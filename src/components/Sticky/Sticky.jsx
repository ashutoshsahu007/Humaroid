const images = ["or.jpg", "ph.jpg"];

export default function Sticky() {
  return (
    <div className="w-full overflow-x-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className="h-screen sticky top-0 flex items-center justify-center bg-black"
          style={{ zIndex: images.length - index }}
        >
          <img
            src={img}
            alt={`Gallery ${index + 1}`}
            className="object-contain max-h-full max-w-full rounded-xl shadow-xl transition-transform duration-500"
          />
        </div>
      ))}

      {/* Spacer after last image */}
      <div className="h-[150vh] bg-white" />
    </div>
  );
}
