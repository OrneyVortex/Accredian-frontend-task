import React from 'react';
import logo2 from '../assets/logo2.png';

const Footer = () => {
  const programs = [
    { name: 'Data Science & AI', link: '#' },
    { name: 'Product Management', link: '#' },
    { name: 'Business Analytics', link: '#' },
    { name: 'Digital Transformation', link: '#' },
    { name: 'Business Management', link: '#' },
    { name: 'Project Management', link: '#' },
    { name: 'Strategy & Leadership', link: '#' },
    { name: 'Senior Management', link: '#' },
    { name: 'Fintech', link: '#' },
  ];

  const links = [
    'About',
    'Career',
    'Blog',
    'Admission Policy',
    'Referral Policy',
    'Privacy Policy',
    'Terms Of Service',
    'Master FAQs',
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>

        <img src={logo2} alt=""/>
          </div>

        <div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
            Schedule 1-on-1 Call Now
          </button>
          <p className="mt-2">Speak with our Learning Advisor</p>
        </div>
          
        </div>

        <hr />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5">
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold">Programs</h2>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name} className="flex justify-between group">
                  <a href={program.link} className="hover:text-white">{program.name}</a>
                  <a href={program.link} className="text-white group-hover:text-blue-500">+</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold">Contact Us</h2>
            <ul className="space-y-2">
              <li>Email us (For Data Science Queries): admissions@accredian.com</li>
              <li>Email us (For Product Management Queries): pm@accredian.com</li>
              <li>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</li>
              <li>Product Management Admission Helpline: +91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969322507</li>
              <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
            </ul>
            <div>
              <h2 className="text-white text-lg font-bold">Why Accredian</h2>
              <h2 className="text-white text-lg font-bold mt-4">Follow Us</h2>
              <div className="flex space-x-4 mt-2">
                <a href="#" aria-label="Facebook" className="text-white hover:text-blue-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.073C22 6.48 17.523 2 12 2S2 6.48 2 12.073c0 5.001 3.657 9.138 8.437 9.926v-7.045H7.898v-2.88h2.539v-2.2c0-2.507 1.492-3.89 3.774-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.261c-1.243 0-1.63.775-1.63 1.567v1.866h2.773l-.443 2.88h-2.33v7.046C18.343 21.21 22 17.074 22 12.073z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.646c0-1.344-.026-3.071-1.877-3.071-1.877 0-2.165 1.463-2.165 2.975v5.742H9.295V8.926h3.412v1.576h.048c.475-.901 1.635-1.849 3.367-1.849 3.597 0 4.258 2.366 4.258 5.451v6.348zM5.337 7.354c-1.144 0-2.07-.928-2.07-2.072s.926-2.072 2.07-2.072c1.145 0 2.071.928 2.071 2.072 0 1.144-.926 2.072-2.071 2.072zm1.777 13.098H3.561V8.926h3.553v11.526zm16.386-20.452H2.453C1.096 0 0 1.096 0 2.453v19.094C0 22.904 1.096 24 2.453 24h19.094C22.904 24 24 22.904 24 21.547V2.453C24 1.096 22.904 0 21.547 0z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569c-.885.389-1.833.654-2.825.774 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.917 2.2-4.917 4.917 0 .39.045.765.127 1.125-4.083-.205-7.697-2.159-10.126-5.125-.422.722-.666 1.561-.666 2.462 0 1.699.866 3.197 2.181 4.075-.805-.026-1.564-.247-2.228-.616v.062c0 2.37 1.685 4.348 3.918 4.794-.41.111-.843.171-1.289.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.375 4.6 3.415-1.685 1.321-3.809 2.107-6.102 2.107-.396 0-.789-.023-1.17-.067 2.179 1.396 4.768 2.209 7.557 2.209 9.054 0 14.004-7.497 14.004-13.986 0-.21 0-.42-.015-.63.962-.695 1.8-1.562 2.46-2.549z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.95.24 2.417.413.6.234 1.038.516 1.488.965.449.449.731.888.965 1.488.173.467.359 1.247.413 2.417.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.95-.413 2.417-.234.6-.516 1.038-.965 1.488-.449.449-.888.731-1.488.965-.467.173-1.247.359-2.417.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.95-.24-2.417-.413-.6-.234-1.038-.516-1.488-.965-.449-.449-.731-.888-.965-1.488-.173-.467-.359-1.247-.413-2.417-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.95.413-2.417.234-.6.516-1.038.965-1.488.449-.449.888-.731 1.488-.965.467-.173 1.247-.359 2.417-.413 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.67.011-4.947.071-1.273.059-2.15.271-2.909.58-.81.33-1.5.77-2.188 1.458-.688.688-1.128 1.378-1.458 2.188-.309.759-.521 1.636-.58 2.909-.06 1.277-.071 1.688-.071 4.947s.011 3.67.071 4.947c.059 1.273.271 2.15.58 2.909.33.81.77 1.5 1.458 2.188.688.688 1.378 1.128 2.188 1.458.759.309 1.636.521 2.909.58 1.277.06 1.688.071 4.947.071s3.67-.011 4.947-.071c1.273-.059 2.15-.271 2.909-.58.81-.33 1.5-.77 2.188-1.458.688-.688 1.128-1.378 1.458-2.188.309-.759.521-1.636.58-2.909.06-1.277.071-1.688.071-4.947s-.011-3.67-.071-4.947c-.059-1.273-.271-2.15-.58-2.909-.33-.81-.77-1.5-1.458-2.188-.688-.688-1.378-1.128-2.188-1.458-.759-.309-1.636-.521-2.909-.58-1.277-.06-1.688-.071-4.947-.071zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.141a3.979 3.979 0 110-7.957 3.979 3.979 0 010 7.957zm6.406-11.846a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="text-white hover:text-red-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186c-.294-1.11-1.163-1.98-2.273-2.274C19.717 3.5 12 3.5 12 3.5s-7.717 0-9.226.412C1.664 3.906.795 4.776.501 5.886.091 7.396.091 12 .091 12s0 4.604.41 6.114c.294 1.11 1.163 1.98 2.273 2.274C4.283 20.5 12 20.5 12 20.5s7.717 0 9.226-.412c1.11-.294 1.98-1.163 2.274-2.274.41-1.51.41-6.114.41-6.114s0-4.604-.41-6.114zM9.545 15.545v-7.09L15.818 12l-6.273 3.545z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-white text-lg font-bold">Accredian</h2>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link} className="hover:text-white">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
