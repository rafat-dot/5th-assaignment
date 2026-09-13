import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-12 pb-6 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-12 text-center md:text-left">
          
        
          <div className=" sm: col-span-2 md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <img src={logo} alt="Dev Stack" className="h-8 object-contain" />
            
            <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            
            <ul className="flex items-center justify-cente md:justify-start gap-4 font-semibold text-gray-700 pt-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-black transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">PRODUCT</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-gray-900 transition">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Projects</a></li>
            </ul>
          </div>

  
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">COMPANY</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">LEGAL</h3>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

     
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center md:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          
          <ul className="flex items-center gap-6">
            <li><a href="#" className="hover:text-gray-600 transition">Privacy</a></li>
            <li><a href="#" className="hover:text-gray-600 transition">Terms</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
