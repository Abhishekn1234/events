import { FC } from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Event Management",
    img: "/images/event-management.jpg",
  },
  {
    title: "Venue Selection",
    img: "/images/venue-selection.jpg",
  },
  {
    title: "Wedding Planning",
    img: "/images/wedding-planning.jpg",
  },
  {
    title: "Birthday Party",
    img: "/images/birthday-party.jpg",
  },
  {
    title: "Corporate Events",
    img: "/images/corporate-events.jpg",
  },
];

const works = [
  "/images/work1.jpg",
  "/images/work2.jpg",
  "/images/work3.jpg",
  "/images/work4.jpg",
  "/images/work5.jpg",
];

const ServicesSection: FC = () => {
  const handleReadMore = () => {
    window.location.href = "/events"; // 👈 Redirect to /events
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">OUR SERVICES</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Exceptional events require extraordinary planning. Our services are tailored
            to meet your vision with elegance and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

                {/* Only for Event Management */}
                {idx === 0 && (
                  <Button
                    variant="default"
                    className="bg-white text-gray-900 hover:bg-gray-200"
                    onClick={handleReadMore} // 👈 Added redirect
                  >
                    READ MORE
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Some of Our Works */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-6 text-center">SOME OF OUR WORKS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {works.map((work, idx) => (
              <img
                key={idx}
                src={work}
                alt={`Work ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
