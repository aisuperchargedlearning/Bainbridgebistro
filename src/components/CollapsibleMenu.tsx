import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
}

interface MenuCategory {
  title: string;
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
          title: 'ANTIPASTO',
          items: [
            {
              name: 'KALE & FARRO SALAD',
              description: 'Organic Bainbridge kale, farro, cucumber, tomatoes, olives, feta.'
            },
            {
              name: 'CAESAR SALAD',
              description: 'Romaine, parmesan, seasoned croutons, black pepper with garlic anchovy dressing.'
            },
            {
              name: 'TOMATO & BURRATA',
              description: 'Heirloom tomatoes, basil pesto, cucumbers, onions, olives.'
            },
            {
              name: 'GAZPACHO ANDALUZ',
              description: 'Traditional Spanish tomato cold soup, served with bread.'
            },
            {
              name: 'ANTIPASTO PLATTER',
              description: 'Assorted platter of cold cuts and cheeses with accompaniments, served with toasted bread.'
            },
            {
              name: 'DIP TASTING PLATTER',
              description: 'Home-made tzatziki, hummus, romesco, served with pita and baguette.'
            }
          ]
        },
        {
          title: 'TAPAS',
          items: [
            {
              name: 'CAPRESE CROSTINI',
              description: 'Tomatoes, basil pesto, creamy mozzarella, balsamic.'
            },
            {
              name: 'MANILA CLAMS',
              description: 'Fresh clams, brava sauce, bread.'
            },
            {
              name: 'ARANCINI',
              description: 'Spinach & ricotta filled risotto balls, spicy arrabbiata, parmesan.'
            },
            {
              name: 'SPINACH PIE',
              description: 'Spinach, feta, phyllo dough, tzatziki.'
            },
            {
              name: 'MEDITERRANEAN SCALLOPS',
              description: 'Seared scallops, creamy garlic sauce, olives and feta, mini pitas.'
            },
            {
              name: 'GAMBAS AL AJILLO',
              description: 'Garlic shrimp, paprika, sherry, bread.'
            },
            {
              name: 'EMPANADAS',
              description: 'Ground beef, four cheese, harissa.'
            },
            {
              name: 'WILD MUSHROOMS CAZUELA',
              description: 'Fresh local wild mushrooms, garlic, sherry, served with bread.'
            },
            {
              name: 'CAULIFLOWER',
              description: 'Roasted cauliflower, lemon juice, paprika, almonds, romesco.'
            },
            {
              name: 'SALMON CANAPE',
              description: 'Seasonal salmon, mascarpone, dill, bread.'
            }
          ]
        },
        {
          title: 'FRESH PASTA',
          items: [
            {
              name: 'PUMPKIN RAVIOLI',
              description: 'Sage butter, diced carrots, toasted walnuts, pecorino cheese. Pair with Il Borgo Pinot Grigio'
            },
            {
              name: 'SCALLOPS TAGLIATELLE',
              description: 'Fresh diver sea scallops, asparagus, tomatoes, onions, basil pesto. Pair with Eidosela Albariño'
            },
            {
              name: 'RAGU DI AGNELLO',
              description: 'Braised lamb, red pepper pappardelle, ricotta cheese. Pair with Castle Rock Pinot Noir'
            },
            {
              name: 'LEMON CHICKEN CAPELLINI',
              description: 'Asparagus, tomatoes, onions, olives, lemon mascarpone sauce, pecorino. Pair with Barone Di Bernaj Alcamo'
            }
          ]
        },
        {
          title: 'ENTREE',
          items: [
            {
              name: 'COSTATA DI MANZO',
              description: '12 oz. local ribeye steak, roasted potatoes, vegetables, gorgonzola. Pair with Ontanon Tempranillo'
            },
            {
              name: 'SEARED HALIBUT',
              description: 'Wild-caught halibut, mashed potatoes, gremolata. Pair with Santola Vinho Verde'
            },
            {
              name: 'LOBSTER RISOTTO',
              description: 'Maine lobster tail, shrimp, asparagus, diced carrots, tomatoes, onions, parmesan. Pair with Il Borgo Pinot Grigio'
            },
            {
              name: 'PORK MARSALA',
              description: 'Pork tenderloin, roasted vegetables, mashed potatoes, mushrooms marsala. Pair with La Quercia Aglianico'
            },
            {
              name: 'BAINBRIDGE BOUILLABAISSE',
              description: 'Fresh clams, halibut, prawns, mire-poix, saffron aioli, bread. Pair with Flama d\'or Cava'
            },
            {
              name: 'DUNGENESS CRAB LEGS',
              description: 'Steam served with roasted potatoes, veggies, and butter. Pair with Santola Vinho Verde'
            }
          ]
        },
        {
          title: 'DESSERT',
          items: [
            {
              name: 'PISTACHIO CHEESECAKE',
              description: 'Ricotta cheese, pistachio cream, berries compote.'
            },
            {
              name: 'GELATO & SORBETTO',
              description: 'Vanilla, pistachio, salted caramel, Vegan gelato and Mango sorbetto.'
            },
            {
              name: 'TIRAMISU',
              description: 'Espresso-soaked lady fingers layered with mascarpone.'
            },
            {
              name: 'BASQUE CHEESECAKE',
              description: 'Gluten free Spanish cheese cake, berries compote.'
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
          title: 'ANTIPASTO',
          items: [
            {
              name: 'KALE & FARRO SALAD',
              description: 'Organic Bainbridge kale, farro, cucumber, tomatoes, olives, feta.'
            },
            {
              name: 'CAESAR SALAD',
              description: 'Romaine, parmesan, seasoned croutons, black pepper, garlic anchovy dressing.'
            },
            {
              name: 'TOMATO & BURRATA',
              description: 'Heirloom tomatoes, basil pesto, cucumbers, onions, olives.'
            },
            {
              name: 'GAZPACHO ANDALUZ',
              description: 'Traditional Spanish tomato cold soup, served with bread.'
            },
            {
              name: 'ANTIPASTO PLATTER',
              description: 'Assorted cold cuts and cheeses with accompaniments, toasted bread.'
            },
            {
              name: 'DIP TASTING PLATTER',
              description: 'House tzatziki, hummus, romesco, served with pita & baguette.'
            }
          ]
        },
        {
          title: 'TAPAS',
          items: [
            {
              name: 'MANILA CLAMS',
              description: 'Fresh clams, brava sauce, bread.'
            },
            {
              name: 'ARANCINI',
              description: 'Spinach & ricotta risotto balls, spicy arrabiata, parmesan.'
            },
            {
              name: 'SPINACH PIE',
              description: 'Spinach, feta, phyllo dough, tzatziki.'
            },
            {
              name: 'MEDITERRANEAN SCALLOPS',
              description: 'Sautéed scallops, creamy garlic sauce, olives, feta, mini pitas.'
            },
            {
              name: 'GAMBAS AL AJILLO',
              description: 'Garlic shrimp, paprika, sherry, bread.'
            },
            {
              name: 'EMPANADAS',
              description: 'Ground beef, four cheese, harissa.'
            },
            {
              name: 'WILD MUSHROOMS CAZUELA',
              description: 'Fresh local wild mushrooms, garlic, sherry, bread.'
            },
            {
              name: 'CAULIFLOWER',
              description: 'Roasted cauliflower, lemon juice, paprika, almonds, romesco.'
            },
            {
              name: 'SALMON CANAPE',
              description: 'Seasonal salmon, mascarpone, dill, bread.'
            }
          ]
        },
        {
          title: 'FLATBREADS',
          items: [
            {
              name: 'CAPRESE',
              description: 'Mozzarella, basil pesto, tomatoes, balsamic.'
            },
            {
              name: 'STEAK GORGONZOLA',
              description: 'Grilled steak, gorgonzola, red onions, mushrooms.'
            },
            {
              name: 'CHICKEN HARISSA',
              description: 'Free-range chicken, harissa, onions, feta.'
            }
          ]
        }
        ,
        {
          title: 'PASTAS',
          items: [
            {
              name: 'LEMON CAPELLINI',
              description: 'Asparagus, tomatoes, onions, olives, lemon mascarpone sauce, pecorino.'
            },
            {
              name: 'WILD MUSHROOM RAVIOLI',
              description: 'Mushrooms, onions, tomatoes, garlic, basil, roasted tomato sauce, gorgonzola.'
            },
            {
              name: 'RIGATONI AL POMODORO',
              description: 'Cherry tomatoes, onions, garlic, basil, parmesan.'
            }
          ]
        }
        ,
        {
          title: 'DESSERTS',
          items: [
            {
              name: 'PISTACHIO CHEESECAKE',
              description: 'Ricotta cheese, pistachio cream, berries compote.'
            },
            {
              name: 'TIRAMISU',
              description: 'Espresso-soaked ladyfingers, sweet Italian mascarpone.'
            },
            {
              name: 'GELATO & SORBETTO',
              description: 'Vanilla, pistachio, salted caramel, vegan gelato, mango sorbetto.'
            },
            {
              name: 'BASQUE CHEESECAKE',
              description: 'Gluten-free Spanish cheesecake, berries compote.'
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