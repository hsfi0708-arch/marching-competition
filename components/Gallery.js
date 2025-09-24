const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  // Add more gallery image URLs
];

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fadeIn delay-300">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx+1}`} className="w-full h-40 object-cover rounded-lg shadow hover:scale-105 transition-transform duration-300" />
        ))}
      </div>
    </section>
  );
}