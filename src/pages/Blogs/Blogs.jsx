import React from "react";

const blogPosts = [
  {
    title: "Understanding Healthcare Insurance",
    excerpt:
      "Learn about the different types of healthcare insurance available and how they can benefit you and your family.",
    date: "2025-04-10",
    image: "https://source.unsplash.com/featured/?insurance",
  },
  {
    title: "How to Stay Healthy During Flu Season",
    excerpt:
      "Tips on how to stay safe and healthy during the cold and flu season. Protect yourself with simple preventive measures.",
    date: "2025-04-05",
    image: "https://source.unsplash.com/featured/?flu",
  },
  {
    title: "The Importance of Regular Check-ups",
    excerpt:
      "Why regular check-ups are essential for your health and how they can help detect potential problems early.",
    date: "2025-03-30",
    image: "https://source.unsplash.com/featured/?checkup",
  },
  {
    title: "Understanding Healthcare Insurance",
    excerpt:
      "Learn about the different types of healthcare insurance available and how they can benefit you and your family.",
    date: "2025-04-10",
    image: "https://source.unsplash.com/featured/?insurance",
  },
  {
    title: "How to Stay Healthy During Flu Season",
    excerpt:
      "Tips on how to stay safe and healthy during the cold and flu season. Protect yourself with simple preventive measures.",
    date: "2025-04-05",
    image: "https://source.unsplash.com/featured/?flu",
  },
  {
    title: "The Importance of Regular Check-ups",
    excerpt:
      "Why regular check-ups are essential for your health and how they can help detect potential problems early.",
    date: "2025-03-30",
    image: "https://source.unsplash.com/featured/?checkup",
  },
];

const HospitalBlog = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 text-center">
        Hospital Blog
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">Published on {post.date}</p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalBlog;
