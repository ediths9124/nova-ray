import { useCallback, useEffect, useRef, useState } from "react";
import { tracks } from "../data/tracks";

// A single shared player instance is created in App.jsx and passed down,
// so the sticky player, the featured release, and the releases grid all
// control the same audio element.
export function useMusicPlayer() {
  const audioRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const track = tracks[trackIndex];

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(track.src);
      audioRef.current.volume = volume;
    }
    const audio = audioRef.current;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMeta = () => setDuration(audio.duration || 0);
    const onEnded = () => next();

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMeta);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMeta);
      audio.removeEventListener("ended", onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap source whenever the track changes.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = track.src;
    setCurrentTime(0);
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    isPlaying ? pause() : play();
  }, [isPlaying, play, pause]);

  const next = useCallback(() => {
    setTrackIndex((i) => (i + 1) % tracks.length);
  }, []);

  const prev = useCallback(() => {
    setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);
  }, []);

  const selectTrack = useCallback(
    (id) => {
      const idx = tracks.findIndex((t) => t.id === id);
      if (idx === -1) return;
      setTrackIndex(idx);
      setIsPlaying(true);
    },
    []
  );

  const seek = useCallback((time) => {
    if (audioRef.current) audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  return {
    track,
    trackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    play,
    pause,
    toggle,
    next,
    prev,
    selectTrack,
    seek,
    setVolume,
  };
}
