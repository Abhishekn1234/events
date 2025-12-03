import { FC } from "react";
import { FaSmile, FaStar, FaTasks } from "react-icons/fa";

const reasons = [
  {
    title: "Ultimate Client Satisfaction",
    description:
      "At Jannat, our unwavering commitment is to your satisfaction. This dedication sets us apart from our competitors and ensures that your event is a success.",
    icon: <FaSmile size={40} className="text-yellow-400 mb-4" />,
  },
  {
    title: "Top-Notch Quality and Professionalism",
    description:
      "At Jannat, we nurture every aspect of your event, from strategizing, planning, and production, with unwavering dedication and a meticulous focus on quality. Our systematic approach ensures that no detail is overlooked, giving you the confidence that your event is in the best hands.",
    icon: <FaStar size={40} className="text-yellow-400 mb-4" />,
  },
  {
    title: "Systematic Planning Process",
    description:
      "We consider taking one step at a time, and everything starts with connecting with us for the event.",
    icon: <FaTasks size={40} className="text-yellow-400 mb-4" />,
  },
];

const WhyChoose: FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose to Hire Us?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Jannat is committed to delivering exceptional events with utmost professionalism and client satisfaction.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-center"
            >
              {/* React Icon */}
              <div className="flex justify-center">{reason.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
