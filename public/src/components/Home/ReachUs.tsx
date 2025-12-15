import { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ReachUs: FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!"); 
  };

  return (
    <section
      id="reach-us"
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Reach Us</h2>
        <p className="text-gray-300 mb-8">
          We Can Create Your Wedding Special to Meet Your Exact Needs.
        </p>

        {/* {!showForm && (
          <Button
            variant="default"
            className="mb-8 bg-pink-600 hover:bg-pink-500"
            onClick={() => setShowForm(true)}
          >
            Plan My Wedding
          </Button>
        )} */}

       
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 text-left"
          >
            <div>
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name *
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="bg-gray-700 text-white border-gray-600 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email *
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                className="bg-gray-700 text-white border-gray-600 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="phone">
                Phone Number *
              </label>
              <Input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                required
                className="bg-gray-700 text-white border-gray-600 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your Message"
                rows={4}
                className="bg-gray-700 text-white border-gray-600 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-pink-600 hover:bg-pink-500 w-full md:w-auto"
              >
                Submit
              </Button>
            </div>
          </form>
        
      </div>
    </section>
  );
};

export default ReachUs;
