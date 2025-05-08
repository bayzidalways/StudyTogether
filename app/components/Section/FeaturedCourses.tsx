import React from "react";

interface Course {
  image: string;
  title: string;
  instructor: string;
  enrollmentText: string;
}

const courses: Course[] = [
  {
    image: "https://example.com/course1.jpg", // Replace with actual image URL
    title: "Digital Poster Design: Best Practices",
    instructor: "Jane Doe",
    enrollmentText: "Over 1,500 students enrolled",
  },
  {
    image: "https://example.com/course2.jpg", // Replace with actual image URL
    title: "Prototype Your First Mobile Application",
    instructor: "John Smith",
    enrollmentText: "Over 1,500 students enrolled",
  },
  {
    image: "https://example.com/course3.jpg", // Replace with actual image URL
    title: "UI Design, a User - Centered Approach",
    instructor: "Elizabeth Bailey",
    enrollmentText: "Over 1,500 students enrolled",
  },
];

const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        See What Others Are Teaching
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">
                {course.enrollmentText}
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {course.title}
              </h3>
              <div className="flex items-center">
                <img
                  src="https://example.com/avatar.jpg" // Replace with actual avatar URL
                  alt={course.instructor}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-sm text-gray-600">
                  by {course.instructor}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
        Explore More
      </button>
    </section>
  );
};

export default FeaturedCourses;
