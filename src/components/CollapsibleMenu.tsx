import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
}

interface MenuCategory {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

interface MenuSection {
  title: string;
  time: string;
  categories: MenuCategory[];
}

const CollapsibleMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set());

  const toggleMenu = (menuType: string) => {
    setActiveMenu(activeMenu === menuType ? null : menuType);
  };

  const toggleCategory = (categoryId: string) => {
    const newActiveCategories = new Set(activeCategories);
    if (newActiveCategories.has(categoryId)) {
      newActiveCategories.delete(categoryId);
    } else {
      newActiveCategories.add(categoryId);
    }
    setActiveCategories(newActiveCategories);
  };

  const menuData: MenuSection[] = [
    {
      title: 'Dinner Menu',
      time: '',
      categories: [
        {
          title: 'TAPAS',
          items: [
            {
              name: 'SEAFOOD CHOWDER',
              description: 'Dungeness crab, lobster, cod, seafood broth, bacon, potatoes, smoked paprika, cream, side of bread.'
            },
            {
              name: 'CAESAR SALAD',
              description: 'Romaine, parmesan, croutons, caesar dressing.'
            },
            {
              name: 'BURRATA',
              description: 'Heirloom tomatoes, onions, olives, balsamic, burrata.'
            },
            {
              name: 'HUMMUS',
              description: 'Harissa, feta, cucumber, pita.'
            },
            {
              name: 'GAMBAS AL AJILLO',
              description: 'Jumbo garlic shrimp, smoked paprika, sherry, side of bread.'
            },
            {
              name: 'WILD MUSHROOMS',
              description: 'Wild mushrooms, garlic, sherry, side of bread.'
            },
            {
              name: 'CAULIFLOWER',
              description: 'Roasted cauliflower, lemon, paprika, almonds, romesco.'
            }
          ]
        },
        {
          title: 'FRESH PASTA & GRAINS',
          items: [
            {
              name: 'LEMON CHICKEN LINGUINI',
              description: 'Free range chicken, asparagus, tomatoes, onions, lemon mascarpone, pecorino.'
            },
            {
              name: 'RAGU DI AGNELLO',
              description: 'Slow cooked New Zealand lamb, cacciatore sauce, saffron rice, roasted veggies, feta.'
            },
            {
              name: 'PRAWNS TAGLIATELLE',
              description: 'Asparagus, tomatoes, onions, olives, pesto, parmesan.'
            },
            {
              name: 'LOBSTER RISOTTO',
              description: 'Maine lobster tail, shrimp, asparagus, carrots, tomatoes, onions, creamy carnaroli rice, parmesan.'
            },
            {
              name: 'SUMMER BOWL',
              description: 'Bainbridge organic vegetables, wilted baby kale, farro, asparagus, tzatziki, feta.'
            }
          ]
        },
        {
          title: 'ENTREE',
          items: [
            {
              name: 'FILET MIGNON',
              description: 'Gorgonzola, roasted veggies, roasted potatoes.'
            },
            {
              name: 'PORK CAZUELA',
              description: 'Pork tenderloin, garbanzo beans, brava, veggies.'
            },
            {
              name: 'WILD KING SALMON',
              description: 'Mashed potatoes, roasted veggies, gremolata.'
            },
            {
              name: 'BACON WRAPPED SCALLOPS',
              description: 'Nantucket scallops, saffron rice, roasted veggies, mojo verde.'
            }
          ]
        },
        {
          title: 'DESSERT',
          items: [
            {
              name: 'TIRAMISU',
              description: 'Espresso soaked lady fingers layered with cocoa and mascarpone.'
            },
            {
              name: 'CHOCOLATE CAKE',
              description: 'Triple chocolate cake, hazelnut cream, whipped cream.'
            },
            {
              name: 'BASQUE CHEESECAKE',
              description: 'Burnt basque cheesecake, strawberries (gluten free).'
            },
            {
              name: 'GELATO & SORBETTO',
              description: 'Vanilla, pistachio, salted caramel, mango.'
            }
          ]
        }
      ]
    },
  ];

  return (
    <>
      {/* Menu Title Section */}
      <section id="menu" className="py-8" style={{ backgroundColor: '#2A364A' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              MENU
            </h2>
            <div className="w-24 h-px bg-white mx-auto opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Collapsible Menu Sections */}
      <section className="py-8" style={{ backgroundColor: '#2A364A' }}>
        <div className="max-w-4xl mx-auto px-6">
          {menuData.map((menu, menuIndex) => (
            <div key={menuIndex} className="mb-6 rounded-lg overflow-hidden" style={{ backgroundColor: '#384558' }}>
              {/* Menu Header */}
              <div 
                className={`p-6 cursor-pointer transition-all duration-300 ${activeMenu === menu.title.toLowerCase().split(' ')[0] ? 'opacity-100' : 'opacity-90'}`}
                style={{ backgroundColor: '#2A364A' }}
                onClick={() => toggleMenu(menu.title.toLowerCase().split(' ')[0])}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-white tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                      {menu.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">{menu.time}</p>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-white transition-transform duration-300 ${
                      activeMenu === menu.title.toLowerCase().split(' ')[0] ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Menu Content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                activeMenu === menu.title.toLowerCase().split(' ')[0] ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6" style={{ backgroundColor: '#384558' }}>
                  {menu.categories.map((category, categoryIndex) => {
                    const categoryId = `${menu.title.toLowerCase().split(' ')[0]}-${category.title.toLowerCase().replace(/\s+/g, '-')}`;
                    return (
                      <div key={categoryIndex} className="mb-4 last:mb-0 rounded-lg overflow-hidden" style={{ backgroundColor: '#2A364A' }}>
                        {/* Category Header */}
                        <div 
                          className="p-4 cursor-pointer transition-all duration-200 hover:opacity-90"
                          onClick={() => toggleCategory(categoryId)}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-lg md:text-xl font-light text-white tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                                {category.title}
                              </h4>
                              {category.subtitle && (
                                <p className="text-gray-300 text-sm mt-1">{category.subtitle}</p>
                              )}
                              <div className="w-12 h-0.5 mt-2" style={{ backgroundColor: '#d4af37' }}></div>
                            </div>
                            <ChevronDown 
                              className={`w-5 h-5 text-white transition-transform duration-300 ${
                                activeCategories.has(categoryId) ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </div>

                        {/* Category Content */}
                        <div className={`overflow-hidden transition-all duration-400 ${
                          activeCategories.has(categoryId) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="px-4 pb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {category.items.map((item, itemIndex) => (
                                <div 
                                  key={itemIndex} 
                                  className="p-4 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" 
                                  style={{ backgroundColor: '#384558' }}
                                >
                                  <h5 className="text-base font-semibold text-white mb-2 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                                    {item.name}
                                  </h5>
                                  <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Disclaimer Section */}
      <section className="py-8" style={{ backgroundColor: '#2A364A' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <p className="text-gray-300 text-sm text-center leading-relaxed">
              <strong className="text-white">*</strong> Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of food borne illness. <strong className="text-white">*</strong> Automatic gratuity 20% gratuity will be added to parties of 6+. Please be aware that our food may contain or come into contact with common allergens, such as dairy, eggs, soybeans, tree nuts, peanuts, fish, shellfish or wheat. <strong className="text-white">Corkage fee $20.</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollapsibleMenu;