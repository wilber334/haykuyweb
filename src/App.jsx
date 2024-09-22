import { useState } from 'react';
import PropTypes from 'prop-types';
import { MapPin, Facebook, PhoneCall, Share2, Menu, X, Clock, ShoppingBag } from 'lucide-react';
import whatsapp from './assets/whatsapp.svg';
import tiktok from './assets/tiktok.svg';
import rappi from './assets/rappi.svg';
import desayunoa from './assets/desayunoa.webp';
import portada from './assets/portada.webp';
import cafes from './assets/cafes.webp';
import cocteles from './assets/cocteles.webp';
import frape from './assets/frape.webp';
import hamburguesas from './assets/hamburguesas.webp';
import milkshake from './assets/milkshake.webp';
import postres from './assets/postres.webp';
import jugos from './assets/jugos.webp';

const HaykuyHomepage = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Desayunos');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = {
    'Desayunos': [

      {
        name: 'Desayunos',
        description: 'Comienza tu día con un desayuno nutritivo y delicioso que incluye huevos frescos cocinados a tu gusto, rebanadas de pan tostada, jugos naturales y una taza de café aromático de nuestra mejor selección. Este desayuno te proporcionará la energía y satisfacción necesarias para afrontar tu jornada.',
        image: desayunoa
      },

    ],

    'Sandwiches': [
      {
        name: 'Hamburguesa artesanal y Sandwiches',
        description: 'Nuestras hamburguesas son una verdadera delicia. Preparadas con carne de res 100% fresca y jugosa, acompañadas de lechuga, tomate maduro, y queso fundido y acompañadas con nuestras papas fritas doradas. ¡Una experiencia gastronómica que no te puedes perder!.',
        image: hamburguesas
      },

    ],
    'Bebidas Calientes': [
      {
        name: 'Cafés, lates y mates andinos',
        description: 'Bebidas calientes para combatir el frio, tenemos los cafes tradicionales, los mates andinos de pura hierba, tambien hay los clasicos capuchinos y lates',
        image: cafes
      },


    ],
    'Jugos Naturales': [
      {
        name: 'Jugos deliciosos y refrescantes',
        description: 'Jugo natural de piña, papaya, fresa, mixto, surtido y mas, bien refrescante y lleno de sabor.',
        image: jugos
      },

    ],
    'Frapés': [
      {
        name: 'Frapes (12 oz / 16 oz)',
        description: 'Deliciosa bebida fría que combina el sabor intenso del café con hielo, perfecta para refrescarte en cualquier momento del día. tenemos varios sabores como el frap de cafe, moka, vainilla, fresa, chocolate, oreo, lucuma, mango y muchos mas',
        image: frape
      },

    ],
    'Milkshakes': [
      {
        name: 'Milkshake (10 oz / 12 oz)',
        description: 'Batido de fresa o oreo, en 2 tamaños super deliciosos como para satisfacer cualquier antojo.',
        image: milkshake
      },

    ],

    'Cócteles': [
      {
        name: 'Cocteles',
        description: 'Tenemos los cocteles mas demandados, como el Daiquiri, laguna azul, Mojito, Machu Picchu, Pisco Sour, Piña Colada y los Piteados',
        image: cocteles
      },

    ],

    'Postres': [
      {
        name: 'Postres',
        description: 'Tenemos los mas deliciosos postres, pie de limon, pie de maracuya, torta de chocolate, ensalada de frutas, empanadas y wafles',
        image: postres
      },
    ],
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedItem.name,
        text: `Mira este delicioso ${selectedItem.name} de Haykuy Love`,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Web Share API not supported');
    }
  };

  const CustomButton = ({ onClick, children, className }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-white font-semibold transition duration-300 ${className}`}
    >
      {children}
    </button>
  );

  CustomButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  return (
    <div className="bg-orange-50 min-h-screen relative">
      {/* Header */}
      <header className="bg-orange-500 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Haykuy Love</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={() => setActiveTab('menu')}
                  className={`hover:text-orange-200 transition duration-300 ${activeTab === 'menu' ? 'font-bold' : ''}`}
                >
                  Menú
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className={`hover:text-orange-200 transition duration-300 ${activeTab === 'about' ? 'font-bold' : ''}`}
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`hover:text-orange-200 transition duration-300 ${activeTab === 'contact' ? 'font-bold' : ''}`}
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-orange-500 text-white p-4 z-20 flex flex-col space-y-4 h-max">
          <button
            className="self-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <ul className="lex flex-col space-y-2">
            <li>
              <button
                onClick={() => {
                  setActiveTab('menu');
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 ${activeTab === 'menu' ? 'font-bold' : ''}`}
              >
                Menú
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('about');
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 ${activeTab === 'about' ? 'font-bold' : ''}`}
              >
                Nosotros
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 ${activeTab === 'contact' ? 'font-bold' : ''}`}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Always visible address bar */}
      <div className="bg-orange-200 text-orange-800 py-2 px-4 sticky top-16 z-10 text-xs md:text-base">
        <div className="container mx-auto md:flex items-center justify-between">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <MapPin size={20} />
            <a href="https://goo.gl/maps/svVwmyfzhkMHWCpN8" target="_blank" rel="noopener noreferrer" className="text-orange-800 hover:text-orange-600 transition duration-300">
              <span>Ubicanos en Calle Santa Catalina 500, Arequipa</span>
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/Haykuycoffee" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-700 transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="https://www.tiktok.com/@haykuylove" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-black-800 hover:text-orange-600 transition duration-300">
              <img src={tiktok} width={24} alt="TikTok" />
            </a>
            <a
              href="https://goo.gl/maps/svVwmyfzhkMHWCpN8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-700 transition duration-300"
            >
              <MapPin size={24} />
            </a>
            <a
              href="https://www.rappi.com.pe/restaurantes/33396-haykuy-santa-catalina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-700 transition duration-300"
            >
              <img src={rappi} width={40} alt="Rappi" className='bg-white' />
            </a>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${portada})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-orange-200 ">Haykuy Love</h2>
            <p className="text-lg md:text-2xl mb-8 bg-orange-600 rounded-md px-1">Descubre la auténtica delicia de nuestras hamburguesas artesanales, waffles, frappés y el café más exquisito</p>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-2 px-1 sm:px-0">
        {activeTab === 'menu' && (
          <div>
            <h2 className="text-lg md:text-4xl font-bold text-orange-800 mb-2 md:mb-4 text-center">Nuestro Menú</h2>
            <div className="flex justify-start md:justify-center mb-4 md:mb-8 overflow-x-auto">
              {Object.keys(menuItems).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs md:text-base px-1 md:px-4 md:py-2 mx-1 md:mx-2 rounded-xl md:rounded-full font-semibold transition duration-300 ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-orange-200 text-orange-800 hover:bg-orange-300'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex justify-center ">
              {menuItems[activeCategory].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300 md:flex "
                  onClick={() => handleItemClick(item)}
                >
                  <img src={item.image} alt={item.name} className="w-full h-48 md:h-96 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg md:text-xl font-bold text-orange-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-start md:justify-center my-4 overflow-x-auto">
              {Object.keys(menuItems).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs md:text-base px-1 md:px-4 md:py-2 mx-1 md:mx-2 rounded-xl md:rounded-full font-semibold transition duration-300 ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-orange-200 text-orange-800 hover:bg-orange-300'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">Nosotros</h2>
            <div className="flex items-center space-x-4 text-orange-700 my-2">
              <Clock size={40} />
              <p className='text-justify' >Abierto todos los días desde la 7:00 AM hasta las 10:00 PM. peru.</p>
            </div>
            <p className="text-gray-600 text-justify px-2 md:text-xl">
              Haykuy Love es una cafetería comprometida con ofrecer la mejor experiencia del café peruano. En Haykuy Love, cada mañana comienza con una experiencia culinaria excepcional. Nuestros desayunos están diseñados para despertar tus sentidos y satisfacer tu paladar desde el primer bocado. Desde deliciosas hamburguesas artesanales hasta waffles tentadores, cada plato está cuidadosamente preparado con ingredientes frescos y locales, asegurando sabores auténticos y una experiencia gastronómica inolvidable.
            </p>

          </div>
        )}

        {activeTab === 'contact' && (
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-800 mb-4">Contacto</h2>
            <p className="text-gray-600 text-lg md:text-xl mb-4">¡Estamos aquí para ayudarte!</p>
            <div className="flex justify-start md:justify-center space-x-4 mb-6 text-orange-700">
              <MapPin size={28} />
              <span className="md:text-xl">Ubicanos en Calle Santa Catalina 500, Arequipa - Peru</span>
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <a href="https://wa.me/51986844252" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition duration-300">
                <img src={whatsapp} alt="WhatsApp" width={24} />
                <span className="text-base md:text-lg">Escríbenos en WhatsApp</span>
              </a>
              <a href="https://www.facebook.com/Haykuycoffee" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition duration-300">
                <Facebook size={24} />
                <span className="text-base md:text-lg">Síguenos en Facebook</span>
              </a>
              <a
                href="tel:+51986844252"
                className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition duration-300"
              >
                <PhoneCall size={24} />
                <span className="text-base md:text-lg">Llamar a +51 986 844 252</span>
              </a>
              <a
                href="https://goo.gl/maps/svVwmyfzhkMHWCpN8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition duration-300"
              >
                <MapPin size={24} />
                <span className="text-lg">Ver ubicación en Google Maps</span>
              </a>
            </div>
          </div>
        )}


        {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg relative max-w-md md:max-w-lg">
              <button
                onClick={handleCloseDialog}
                className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-600 transition duration-300"
              >
                <X size={24} />
              </button>
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-48 md:h-64 object-cover rounded-t-lg mb-2" />
              <h3 className="text-xl font-bold text-orange-800 mb-2">{selectedItem.name}</h3>
              <p className="text-xs md:text-base text-gray-600 mb-2">{selectedItem.description}</p>
              <div className="flex flex-wrap gap-2 justify-end text-xs md:text-base">
                <CustomButton onClick={() => window.open('https://www.rappi.com.pe/restaurantes/33396-haykuy-santa-catalina', '_blank')} className="bg-orange-500 hover:bg-orange-600">
                  <ShoppingBag className="inline-block mr-2" size={16} /> Pedir por Rappi
                </CustomButton>
                <CustomButton onClick={() => window.open('https://goo.gl/maps/svVwmyfzhkMHWCpN8', '_blank')} className="bg-blue-500 hover:bg-blue-600">
                  <MapPin className="inline-block mr-2" size={16} /> Ver en el mapa
                </CustomButton>
                <CustomButton onClick={() => window.open('https://api.whatsapp.com/send?phone=+51986844252&text=Hola,quiero hacer una reserva', '_blank')} className="bg-green-500 hover:bg-green-600">
                  <PhoneCall className="inline-block mr-2" size={16} /> Contactar por WhatsApp
                </CustomButton>
                <CustomButton onClick={handleShare} className="bg-purple-500 hover:bg-purple-600">
                  <Share2 className="inline-block mr-2" size={16} /> Compartir
                </CustomButton>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-orange-500 text-white mt-12 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Haykuy Love. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://api.whatsapp.com/send?phone=+51986844252&text=Hola,quiero hacer un pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-green-700 transition duration-300"
            >
              <img src={whatsapp} width={24} className='rounded bg-green-700' />
            </a>
            <a
              href="https://goo.gl/maps/svVwmyfzhkMHWCpN8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-700 transition duration-300"
            >
              <MapPin size={24} />
            </a>

            <a href="https://www.facebook.com/Haykuycoffee" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-700 transition duration-300">
              <Facebook size={20} />
            </a>
            <a href="https://www.tiktok.com/@haykuylove" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-black-800 hover:text-orange-600 transition duration-300">
              <img src={tiktok} width={24} />
            </a>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default HaykuyHomepage;
