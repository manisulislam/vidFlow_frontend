

const Footer = () => {
  return (
    <footer className="bg-white text-blue-900 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Press</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Email Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Support Chat</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Find a Location</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Social Media</a></li>
          </ul>
        </div>
        
      </div>
     
      <div className="text-center text-blue-700 mt-8 border-t border-blue-300 pt-4">
        © 2024 VidFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
