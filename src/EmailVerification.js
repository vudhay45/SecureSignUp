import React from 'react';

const fontStyles = {
  fontFamily: "'Pacifico', cursive",
};

const EmailVerification = ({ avatar }) => {
  return (
    <div className="bg-white text-black font-sans">
      <nav className="flex flex-col sm:flex-row justify-between items-center p-4 border-b">
        {/* Navigation links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <h1 style={fontStyles} className="text-pink-500 text-3xl">
            dribbble
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:underline">Inspiration</a>
            <a href="#" className="hover:underline">Find Work</a>
            <a href="#" className="hover:underline">Learn Design</a>
            <a href="#" className="hover:underline">Hire Designers</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="🔎Search..."
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-200 w-40 h-10"
          />
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full border-dotted border-2 border-gray-300"
            />
          ) : (
            <div className="w-10 h-10 rounded-full border-dotted border-2 border-gray-300 flex items-center justify-center">
              <span className="text-gray-300">+</span>
            </div>
          )}
          <button type="button" className="bg-pink-500 text-white p-2 rounded-lg">
            Upload
          </button>
        </div>
      </nav>
      <main className="flex flex-col items-center p-4 md:p-8">
        {/* Main content */}
        <div className="max-w-md text-center">
          <div className="flex justify-center mb-4">
            {/* Envelope icon */}
            <svg className="w-12 h-12" /* Add SVG path data here */></svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Please verify your email...</h1>
          <div className="flex justify-center items-center">
            <img src="/static/email.png" alt="email verification" className="w-13 h-14 max-w-md mb-4" />
          </div>
          <p className="mb-4">Please verify your email address. We've sent a confirmation email to:</p>
          <p className="text-xl font-bold p-2">account@foro.design</p>
          <p className="my-4">Click the confirmation link in that email to begin using Dribbble.</p>
          <p className="mb-4">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <a href="#" className="text-blue-500 hover:underline">resend the confirmation email</a>.</p>
          <p>Wrong email address? <a href="#" className="text-pink-500 hover:underline">Change it</a>.</p>
        </div>
      </main>
      <footer className="p-4 border-t">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-7xl mx-auto text-sm mb-2">
          {/* Navigation sections */}
          <div>
          <p>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
          <div className="flex">
            <img src="/static/socialmedia.png" alt="social media icons" className="w-13 h-14"/>
          </div>
        </div>
          <div>
            <h5 className="font-bold mb-2">For Designers</h5>
            <ul>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Go Pro!</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Explore design work</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Design blog</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Overtime podcast</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Playoffs</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Weekly Warm-Up</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Refer a Friend</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Code of Conduct</a></li>
            </ul>
          </div>
          {/* Other sections */}
          <div>
            <h5 className="font-bold mb-2">Hire Designers</h5>
            <ul>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Post a Job Opening</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Post a Freelance Project</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Search for Designers</a></li>
              <div>
            <h5 className="font-bold mb-2">Brands</h5>
            <ul>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Advertise with us</a></li>
              
            </ul>
          </div>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h5 className="font-bold mb-2">Company</h5>
            <ul>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Support</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Media Kit</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Testimonials</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">API</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Terms of Service</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Privacy Policy</a></li>
              <li className="mb-2 text-gray-700"><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
          {/* Directories */}
          <div>
            <h5 className="font-bold mb-2">Directories</h5>
            <ul>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Design Jobs</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Designers for Hire</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Freelance Designers for Hire</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Tags</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Places</a></li>
              <div>
            <h5 className="font-bold mb-2">Design Assets</h5>
            <ul>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Dribbble Marketplace</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Creative Market</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Fontspring</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Font Squirrel</a></li>
            </ul>
          </div>
            </ul>
          </div>
          {/* Design Assets */}
          
          {/* Design Resources */}
          <div>
            <h5 class="font-bold mb-2">Design Resources</h5>
            <ul>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Freelancing</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Design Hiring</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Design Thinking</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Design Trends</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">UI/UX Design</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Graphic Design</a></li>
              <li className="mb-2 text-gray-700"><a href="#" class="hover:underline">Branding</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p class="text-sm ml-4 text-gray-700">© 2023 Dribbble. All rights reserved.</p>
          <h6 class="text-sm mr-4 text-gray-700">20,501,853 shots dribbled.</h6>
        </div>
        
      </footer>
    </div>
  );
};

export default EmailVerification;
