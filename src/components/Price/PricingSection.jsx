// PricingSection.jsx
import { CheckCircleIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$9.99',
      features: [
        'Upload up to 50 videos',
        'Basic video analytics',
        '5 GB storage',
        'Limited customer support',
        'Basic security features',
      ],
    },
    {
      name: 'Pro Plan',
      price: '$19.99',
      features: [
        'Upload unlimited videos',
        'Advanced video analytics',
        '50 GB storage',
        '24/7 support',
        'Priority support',
      ],
    },
    {
      name: 'Enterprise Plan',
      price: '$49.99',
      features: [
        'Unlimited uploads',
        'Complete video analytics',
        '500 GB storage',
        '24/7 support',
        'Dedicated account manager',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-blue-400 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform hover:-translate-y-2 rounded-lg"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-gray-800 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-700">
                    <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/home/video">
              <button className="w-full py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300">
                Choose Plan
              </button>
              
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
