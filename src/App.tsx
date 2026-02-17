import React from 'react';
import Navigation from './components/Navigation';
import CollapsibleMenu from './components/CollapsibleMenu';

function App() {
  return (
    <>
    <Navigation />
    <div className="relative min-h-screen bg-slate-900 overflow-hidden" style={{ backgroundColor: '#0A0E1A' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in"
      >
        <source src="https://ik.imagekit.io/a7tech/Bainbridge%20Bistro/Tagliatelle%20De%20Mare.mp4?updatedAt=1759507820762" type="video/mp4" />
      </video>

      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Hero Content */}
      <div className="relative min-h-screen">
        <img
          src="https://ik.imagekit.io/a7tech/Bainbridge%20Bistro/Bainbridgebistrologo.jpg?updatedAt=1756830222667"
          alt="Bainbridge Bistro Logo"
          className="absolute top-16 left-6 w-24 h-24 object-contain opacity-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        />
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <p className="text-white text-2xl md:text-3xl font-light tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '3s' }}>
            Tagliatelle ai frutti di mare
          </p>
        </div>
      </div>
    </div>

    {/* Lamb Ragu Showcase Section */}
    <div className="relative min-h-screen bg-slate-900 overflow-hidden" style={{ backgroundColor: '#0A0E1A' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in"
      >
        <source src="https://ik.imagekit.io/a7tech/Bainbridge%20Bistro/Lamb%20Ragu%20with%20Spanish%20Wine.mp4?updatedAt=1759528124850" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative min-h-screen flex items-end justify-center pb-12">
        <p className="text-white text-2xl md:text-3xl font-light tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '3s' }}>
          Lamb Ragu with Spanish Wine
        </p>
      </div>
    </div>

    {/* Chicken Marsala Showcase Section */}
    <div className="relative min-h-screen bg-slate-900 overflow-hidden" style={{ backgroundColor: '#0A0E1A' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in"
      >
        <source src="https://ik.imagekit.io/a7tech/Bainbridge%20Bistro/Chickenmarsala.mp4?updatedAt=1759528636176" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative min-h-screen flex items-end justify-center pb-12">
        <p className="text-white text-2xl md:text-3xl font-light tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '3s' }}>
          Chicken Marsala
        </p>
      </div>
    </div>

    {/* Bistecca Alla Gorgonzola Showcase Section */}
    <div className="relative min-h-screen bg-slate-900 overflow-hidden" style={{ backgroundColor: '#0A0E1A' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in"
      >
        <source src="https://ik.imagekit.io/a7tech/Bainbridge%20Bistro/BISTECCA%20ALLA%20GORGONZOLA.mp4?updatedAt=1759529654151" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative min-h-screen flex items-end justify-center pb-12">
        <p className="text-white text-2xl md:text-3xl font-light tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '3s' }}>
          Bistecca Alla Gorgonzola
        </p>
      </div>
    </div>

    {/* Experience Section */}
    <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">
            Experience
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8 opacity-60"></div>
          <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed max-w-2xl mx-auto">
            Welcome to our table, where the best moments unfold when good people gather around great food. Genuine island hospitality and the freshest ingredients we can find—no pretense, just an amazing dining experience!
          </p>
        </div>
      </div>
    </section>
    
    <CollapsibleMenu />

    {/* Specialties Menu Section */}
    <section id="specialties" className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            SPECIALTIES
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-8 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            NON-ALCOHOLIC BEVERAGES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div>
              <h4 className="text-white font-semibold mb-1">SEASONAL SHRUB</h4>
              <p className="text-gray-300 text-sm">Inquire about our seasonal flavor.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">NO GRONI</h4>
              <p className="text-gray-300 text-sm">N/A negroni</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">HOP WATER</h4>
              <p className="text-gray-300 text-sm">Inquire about flavors</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">ATHLETIC</h4>
              <p className="text-gray-300 text-sm">Hazy IPA</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">HELLRAIZER</h4>
              <p className="text-gray-300 text-sm">Dark</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">CIDER</h4>
              <p className="text-gray-300 text-sm">Inquire about our flavors.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">ESTRELLA</h4>
              <p className="text-gray-300 text-sm">Lager, Spain</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">GRUVI</h4>
              <p className="text-gray-300 text-sm">Amber</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">PARTAKE</h4>
              <p className="text-gray-300 text-sm">IPA or Blonde</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">VINADA</h4>
              <p className="text-gray-300 text-sm">Cava rose, Spain</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">RED WINE</h4>
              <p className="text-gray-300 text-sm">Tempranillo, Spain</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">WHITE WINE</h4>
              <p className="text-gray-300 text-sm">Verdejo, Spain</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">VEGA MEDIEN</h4>
              <p className="text-gray-300 text-sm">Vegan bubbles, Spain.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Hours Section */}
    <section id="hours" className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            HOURS
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="text-center">
          <div className="text-gray-300 text-lg space-y-4">
            <div>
              <p className="font-semibold text-white mb-2">Tuesday through Thursday</p>
              <p>11AM to 2PM and 4:30 PM to 9PM</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Friday</p>
              <p>11AM to 2PM and 4:30 to 11PM</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Saturday</p>
              <p>4:30 to 11PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            CONTACT
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              RESERVATIONS & CONTACT
            </h3>
            <div className="text-gray-300 text-lg mb-4">
              <p className="mb-2">403 Madison Ave N</p>
              <p className="mb-4">Bainbridge Island, WA 98110</p>
              <p>(206) 460-4367</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://ik.imagekit.io/a7tech/Bainbridge%20Bistro/Maptobainbridgebistro.webp?updatedAt=1756841481532"
              alt="Map to Bainbridge Bistro"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    
    {/* Privacy Section */}
    <section className="py-8" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            We respect your privacy. This website does not collect personal information or use cookies to track visitors.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;