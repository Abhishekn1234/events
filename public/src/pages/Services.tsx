import { motion } from "framer-motion";
import DripSection from "./Drip";
import { useEffect, useState } from "react";
import { cubicBezier } from "framer-motion";
import { Calendar, Heart, Briefcase, Star, CheckCircle, Users, Camera, Music, Utensils, Sparkles } from "lucide-react";

// ---------------- SCROLL-IN VARIANT ----------------
const scrollVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.2, 0.0, 0.2, 1),
    },
  },
};

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  image, 
  color, 
  children 
}: { 
  title: string;
  description: string;
  icon: any;
  image: string;
  color: string;
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={scrollVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden rounded-3xl group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${color}/90 via-black/80 to-black/90`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
           style={{ boxShadow: `inset 0 0 100px ${color}20` }} />

      {/* Content */}
      <div className="relative z-10 p-8 min-h-[600px] flex flex-col">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6 
                       transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title & Description */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">{description}</p>
        </div>

        {/* Content Children */}
        <div className="mt-auto">
          {children}
        </div>

        {/* Hover Indicator */}
        <motion.div
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.4 }}
          className="h-1 bg-white absolute bottom-0 left-0"
        />
      </div>
    </motion.div>
  );
};

const ServiceItem = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <motion.div
    whileHover={{ x: 5 }}
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
  >
    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <span className="text-gray-200">{text}</span>
  </motion.div>
);

const ServiceCategory = ({ title, items, color }: { title: string; items: string[]; color: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
               hover:border-white/30 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <h4 className="text-xl font-semibold">{title}</h4>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3 text-gray-300"
        >
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const serviceCategories = [
    {
      title: "Weddings",
      icon: Heart,
      color: "from-pink-600/90 to-rose-600/90",
      iconColor: "bg-gradient-to-br from-pink-500 to-rose-600",
      image: "/157c4193953156c29c314cc87f694946 (1).jpg",
      description: "Transform your dream wedding into reality with our comprehensive planning and design services.",
      categories: [
        {
          title: "Planning & Coordination",
          items: ["Full Wedding Planning", "Partial Planning", "Day-of Coordination", "Destination Wedding Planning"]
        },
        {
          title: "Wedding Styles",
          items: ["Luxury Weddings", "Destination Weddings", "Cultural Weddings", "Intimate Weddings", "Outdoor Weddings"]
        },
        {
          title: "Special Services",
          items: ["Vendor Management", "Budget Planning", "Timeline Creation", "Guest Management"]
        },
        {
          title: "Design & Décor",
          items: ["Theme Development", "Floral Arrangements", "Lighting Design", "Venue Styling"]
        }
      ]
    },
    {
      title: "Private Events",
      icon: Users,
      color: "from-purple-600/90 to-indigo-600/90",
      iconColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
      image: "/68439ece091407b13f240b822af574cf.jpg",
      description: "Create unforgettable moments with personalized celebrations for every milestone in life.",
      categories: [
        {
          title: "Celebrations",
          items: ["Birthday Parties", "Anniversaries", "Baby Showers", "Graduations", "Engagement Parties"]
        },
        {
          title: "Luxury Events",
          items: ["Yacht Parties", "Private Dinners", "Villa Events", "Garden Parties", "Poolside Gatherings"]
        },
        {
          title: "Entertainment",
          items: ["Live Performances", "DJ Services", "Photo Booths", "Games & Activities", "Themed Props"]
        },
        {
          title: "Services",
          items: ["Catering Design", "Venue Selection", "Guest Coordination", "Transportation", "Security"]
        }
      ]
    },
    {
      title: "Corporate Events",
      icon: Briefcase,
      color: "from-blue-600/90 to-cyan-600/90",
      iconColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
      image: "/a0fd3abb31d8d1126603b3a4940a1a3c.jpg",
      description: "Professional events designed to impress, inspire, and deliver meaningful business connections.",
      categories: [
        {
          title: "Business Events",
          items: ["Conferences", "Product Launches", "Trade Shows", "Seminars", "Networking Events"]
        },
        {
          title: "Corporate Celebrations",
          items: ["Annual Galas", "Award Ceremonies", "Team Parties", "Milestone Events", "Retirement Parties"]
        },
        {
          title: "Team Building",
          items: ["Corporate Retreats", "Workshops", "Training Sessions", "Team Activities", "Strategy Sessions"]
        },
        {
          title: "Brand Events",
          items: ["Brand Activations", "Press Conferences", "Media Events", "Client Appreciation", "Showroom Events"]
        }
      ]
    },
    {
      title: "Premium Services",
      icon: Star,
      color: "from-amber-600/90 to-yellow-600/90",
      iconColor: "bg-gradient-to-br from-amber-500 to-yellow-600",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      description: "Elevate your event with our exclusive add-on services and premium offerings.",
      categories: [
        {
          title: "Design & Production",
          items: ["Custom Lighting Design", "Stage Production", "AV Equipment", "Special Effects", "Set Design"]
        },
        {
          title: "Entertainment",
          items: ["Celebrity Booking", "Live Bands", "Performers", "Speakers", "MC/Host Services"]
        },
        {
          title: "Hospitality",
          items: ["VIP Services", "Guest Management", "Transportation", "Accommodation", "Concierge Services"]
        },
        {
          title: "Creative Services",
          items: ["Invitation Design", "Brand Integration", "Digital Marketing", "Content Creation", "Social Media"]
        }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Events Planned", icon: Calendar },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "200+", label: "Venues Partnered", icon: Star },
    { number: "50+", label: "Countries Served", icon: Briefcase }
  ];

  return (
    <div className="w-full bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
            className="w-full h-full object-cover opacity-40"
            alt="Services Background"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Premium Event Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Unforgettable</span> Experiences
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we transform visions into reality with precision, 
              creativity, and unparalleled attention to detail.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-colors"
                >
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive event solutions tailored to your unique needs and vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              color={service.color}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {service.categories.map((category, catIndex) => (
                  <ServiceCategory
                    key={catIndex}
                    title={category.title}
                    items={category.items}
                    color={service.iconColor}
                  />
                ))}
              </div>
            </ServiceCard>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center px-6 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Extraordinary?</span>
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss your vision and bring your dream event to life with our expert planning and execution.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full 
                     font-semibold text-lg hover:from-pink-700 hover:to-purple-700 
                     transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Start Planning Your Event
          </motion.button>
        </motion.div>
      </div>

      <DripSection />
    </div>
  );
}