import React from 'react';

function Footer() {
  return (
    <div className="footer fixed bottom-0 left-0 right-0 z-[999] bg-white flex justify-center items-center h-10">
      <h4>
        <span className="text-[#ff642b]">clarkson de incognito</span> &copy;
        {new Date().getFullYear()}
      </h4>
    </div>
  );
}

export default Footer;
