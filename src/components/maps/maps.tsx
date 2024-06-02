import React from 'react';

const Maps = () => {
  return (
    <div id="maps" className="mt-12 px-4 lg:px-0">
      <hr className="border-t-2 border-gray-200 mb-6" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="w-full h-96 lg:h-[500px] aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84887.90824859189!2d-46.34956373501592!3d-24.00454636165938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce031b479ac11b%3A0x37bcd4bb10e50fc1!2sPraia%20do%20Gonzaga!5e0!3m2!1spt-BR!2sbr!4v1709598305483!5m2!1spt-BR!2sbr"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <hr className="border-t-2 border-gray-200 mt-6" />
    </div>
  );
};

export default Maps;
