This folder is here for your own local image files, if you'd rather
store images in the project than link to external URLs.

Right now, every image on the site (hero, portraits, album covers,
gallery, video thumbnail) is loaded from a hosted Unsplash URL, set
inside the files in src/data/. This keeps the project lightweight and
means the site looks fully designed immediately — no grey boxes.

To swap in your own images:
1. Add your image file to this folder, e.g. public/images/hero.jpg
2. Open the matching data file in src/data/ (artistData.js,
   tracks.js, releases.js, or galleryImages.js)
3. Change the URL to "/images/hero.jpg"

That's it — every component reads images from the data files, so you
never need to touch component code just to change a picture.
