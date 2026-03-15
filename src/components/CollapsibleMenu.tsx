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
              description: 'Lobster, salmon, seafood broth, bacon, potatoes, smoked paprika, cream, bread.'
            },
            {
              name: 'CAESAR SALAD',
              description: 'Romaine, parmesan, seasoned croutons, caesar dressing.'
            },
            {
              name: 'ARANCINI',
              description: 'Ground beef, peas, ricotta, brava.'
            },
            {
              name: 'GAMBAS AL AJILLO',
              description: 'Jumbo garlic shrimp, smoked paprika, sherry, bread.'
            },
            {
              name: 'BURRATA & HUMMUS',
              description: 'Heirloom tomatoes, cucumber, olives, balsamic, olive oil, pita.'
            },
            {
              name: 'CAULIFLOWER',
              description: 'Roasted cauliflower, lemon juice, paprika, almonds, romesco.'
            },
            {
              name: 'WILD MUSHROOMS',
              description: 'Fresh local wild mushrooms, garlic, sherry, served with bread.'
            },
            {
              name: 'DUNGENESS CRAB DIP',
              description: 'Fresh crab meat, onions, celery, mozzarella, parmesan, baguette.'
            },
            {
              name: 'EMPANADAS',
              description: 'Spinach & mozzarella filled empanadas, served with harissa.'
            }
          ]
        },
        {
          title: 'FRESH PASTA',
          items: [
            {
              name: 'WILD MUSHROOMS RAVIOLI',
              description: 'Creamy Wild mushrooms sauce, onions, gorgonzola cheese. Pair with: David Hill Pinot Noir'
            },
            {
              name: 'RAGU DI AGNELLO',
              description: 'Braised lamb, cacciatore sauce, red pepper pappardelle, feta cheese. Pair with: Qui Pro Quo, Sangiovese'
            },
            {
              name: 'PRAWNS CAPELLINI',
              description: 'Asparagus, tomatoes, onions, lemon mascarpone, pecorino. Pair with: Coelho Chardonnay'
            },
            {
              name: 'CHICKEN TORTELLINI',
              description: 'Asparagus, tomatoes, onions, olives, pesto sauce, parmesan. Pair with: Barone Di Bernaj Alcamo'
            }
          ]
        },
        {
          title: 'ENTREE',
          items: [
            {
              name: 'BISTECCA ALLA GORGONZOLA',
              description: '12 oz. Grass fed New York steak, gorgonzola, veggie medley, roasted potatoes. Pair with: La Quercia, Red blend'
            },
            {
              name: 'BACON WRAPPED SCALLOPS',
              description: 'Nantucket scallops, beluga lentils, carrots, asparagus, mojo verde. Pair with: Santola, Vinho Verde'
            },
            {
              name: 'LOBSTER RISOTTO',
              description: 'Maine lobster tail, shrimp, asparagus, carrots, tomatoes, onions, creamy carnaroli rice, parmesan. Pair with: Anne Amie Pinot Grigio'
            },
            {
              name: 'PORK CAZUELA',
              description: 'Pork Tenderloin, Spanish chorizo, garbanzo, veggies, brava, gorgonzola, bread. Pair with: Flama d\'or Cava'
            },
            {
              name: 'WINTER HARVEST',
              description: 'Wilted greens, carrots, yellow squash, farro, wild mushrooms, tzatziki, feta. Pair with: Cingilia, Pecorino'
            },
            {
              name: 'DUNGENESS CRAB CAKE',
              description: 'Fresh Dungeness meat, remoulade sauce, veggie medley, mashed potatoes. Pair with: Coelho Chardonnay'
            }
          ]
        },
        {
          title: 'DESSERT',
          items: [
            {
              name: 'CHOCOLATE CAKE',
              description: 'Triple chocolate cake, whipped cream. Pairing: Yzaguirre white Vermouth'
            },
            {
              name: 'TIRAMISU',
              description: 'Espresso-soaked lady fingers layered with cocoa and sweet Italian mascarpone. Pairing: Statement Port'
            },
            {
              name: 'GELATO & SORBETTO',
              description: 'Vanilla, pistachio, salted caramel, Vegan gelato and Mango sorbetto.'
            }
          ]
        }
      ]
    },
    {
      title: 'Lunch Menu',
      time: '',
      categories: [
        {
          title: 'TAPAS',
          items: [
            {
              name: 'ARANCINI',
              description: 'Ground beef, peas, ricotta, brava.'
            },
            {
              name: 'GAMBAS AL AJILLO',
              description: 'Jumbo garlic shrimp, smoked paprika, sherry, bread.'
            },
            {
              name: 'EMPANADAS',
              description: 'Spinach & mozzarella filled empanadas, served with harissa.'
            },
            {
              name: 'WILD MUSHROOMS',
              description: 'Seasonal wild mushrooms, red onions, gorgonzola cheese.'
            },
            {
              name: 'CAULIFLOWER',
              description: 'Roasted cauliflower, lemon juice, paprika, almonds, romesco.'
            }
          ]
        },
        {
          title: 'SANDWICHES',
          items: [
            {
              name: 'CAPRESE PANINI',
              description: 'Fresh mozzarella, basil pesto, tomatoes, balsamic.'
            },
            {
              name: 'FRIED CHICKEN SANDWICH',
              description: 'Free range chicken, spicy aioli, tomato, lettuce, onions.'
            },
            {
              name: 'STEAK SANDWICH',
              description: 'Grilled steak, tomatoes, mushrooms, onions, pepperjack, spicy aioli.'
            }
          ]
        },
        {
          title: 'FLATBREADS',
          items: [
            {
              name: 'WILD MUSHROOMS',
              description: 'Seasonal wild mushrooms, red onions, gorgonzola cheese.'
            },
            {
              name: 'PESTO CHICKEN',
              description: 'Free range chicken, pesto, mozzarella, onions, tomatoes.'
            },
            {
              name: 'MEAT LOVERS',
              description: 'Spanish chorizo, pepperoni, bacon, red sauce, mozzarella.'
            }
          ]
        },
        {
          title: 'PASTAS & BOWLS',
          subtitle: 'Add Chicken or Add Prawns (extra charge)',
          items: [
            {
              name: 'LEMON CAPELLINI',
              description: 'Asparagus, tomatoes, onions, olives, lemon mascarpone sauce, pecorino.'
            },
            {
              name: 'RIGATONI AL POMODORO',
              description: 'Cherry tomatoes, onions, garlic, basil, parmesan.'
            },
            {
              name: 'VEGETARIAN BOWL',
              description: 'Roasted vegetables, quinoa, Feta cheese, harissa.'
            },
            {
              name: 'MUSHROOMS BOWL',
              description: 'Wild mushrooms, farro, gorgonzola greens, balsamic.'
            }
          ]
        }
        ,
        {
          title: 'DESSERT',
          items: [
            {
              name: 'TIRAMISU',
              description: 'Espresso-soaked lady fingers layered with cocoa and sweet Italian mascarpone.'
            },
            {
              name: 'GELATO & SORBETTO',
              description: 'Vanilla, pistachio, salted caramel, Vegan gelato and Mango sorbetto.'
            },
            {
              name: 'CHOCOLATE CAKE',
              description: 'Triple chocolate cake, whipped cream.'
            }
          ]
        }
      ]
    }
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