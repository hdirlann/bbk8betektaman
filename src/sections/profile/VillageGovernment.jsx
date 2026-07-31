import { motion } from "framer-motion";
import villageProfile from "../../data/villageProfile";

const VillageGovernment = () => {
  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Pemerintahan Desa
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {villageProfile.government.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl shadow-md p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-200 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-green-700">
                {member.name.charAt(0)}
              </div>

              <h3 className="font-semibold text-lg">
                {member.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {member.position}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default VillageGovernment;