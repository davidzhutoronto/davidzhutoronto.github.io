/* Add any JavaScript you need to this file. */
let data = [
  {
    name: 'Staub - Pumpkin Cocotte',
    description:
      'Rooted in French culinary heritage, Staub cookware is beloved by professional and home chefs. The Staub Ceramic Pumpkin is a stylish addition to your table. Show off your soups, casseroles, and vegetables.',
    price: 3999,
    category: 'Cookware',
    imageUrl: 'images/staub1.jpg'
  },
  {
    name: 'Staub - Round Cocotte',
    description:
      'Staub builds on this tradition with our enameled cast iron cookware. Black matte enamel inside and cooking surface creates a culinary advantage for better browning, braising, and roasting. ',
    price: 27999,
    category: 'Cookware',
    imageUrl: 'images/staub2.jpeg'
  },
  {
    name: 'Le Creuset - Round French Oven',
    description:
      'In collaboration with Le Creuset, celebrate your Canadian heritage with this iconic multistripe French Oven. Even heat distribution and superior heat retention.Made in France',
    price: 51000,
    category: 'Cookware',
    imageUrl: 'images/lecreuset1.webp'
  },
  {
    name: 'HBC x Le Creuset - Multistripe Round French Oven',
    description:
      'Rooted in French culinary heritage, Staub cookware is beloved by professional and home chefs for its exquisite craftsmanship, exceptional performance, and timeless beauty.',
    price: 50000,
    category: 'Cookware',
    imageUrl: 'images/lecreuset2.webp'
  },
  {
    name: 'All-Clad - 7 Piece Stainless Steel Cookware Set',
    description:
      "Marked by classic elegance and simple line, the stainless collection is All-Clad's most popular cookware. The ideal combination of outstanding performance and dishwasher safe cleaning",
    price: 64000,
    category: 'Cookware',
    imageUrl: 'images/all-clad1.webp'
  },
  {
    name: 'All-Clad - Stainless Steel 5-Piece Cookware Set',
    description:
      'A perfect trio for every kitchen, these pans are made from quality stainless steel for excellent heat distribution and long-lasing durability. Stainless steel. Dishwasher safe. Made in USA.',
    price: 52000,
    category: 'Cookware',
    imageUrl: 'images/all-clad2.webp'
  },
  {
    name: 'Smeg - Electric Kettle',
    description:
      'Retro-style electric kettle crafted from polished stainless steel and enhanced with 3D logo detail.',
    price: 25599,
    category: 'Small Appliance',
    imageUrl: 'images/smeg1.webp'
  },
  {
    name: 'Smeg - Drip Filter Coffee Machine',
    description:
      "From the USA Collection. 50's retro style drip filter coffee machine with full-metal, painted housing and lid, digital LED display and clock user-friendly control panel.",
    price: 23999,
    category: 'Small Appliance',
    imageUrl: 'images/smeg2.webp'
  },
  {
    name: 'Breville - The Barista Pro Stainless Steel Manual Espresso Machine BES878BTR',
    description:
      'This stainless steel espresso machine offers barista-quality performance with a new design and intuitive LCD screen interface that provides all the information you need to make coffee exactly the way you like it.',
    price: 94997,
    category: 'Small Appliance',
    imageUrl: 'images/breville1.webp'
  },
  {
    name: 'Breville - Stainless Steel 4-Piece Smart Oven Pizzaiolo Set BPZ820',
    description:
      'This brushed stainless steel oven is the first domestic countertop oven to hit 750°F and cook an authentic wood-fired style pizza in 2 minutes. ',
    price: 87997,
    category: 'Small Appliance',
    imageUrl: 'images/breville2.webp'
  },
  {
    name: 'KitchenAid - Pro 600TM 6 Quart Bowl-Lift Stand Mixer',
    description:
      'The overachiever of the stand mixer family, it has a flour power rating of 14 cups. That means it can mix enough dough for 8 loaves of bread or 13 dozen cookies in a single bowl. ',
    price: 72999,
    category: 'Small Appliance',
    imageUrl: 'images/kitchenaid1.webp'
  },
  {
    name: 'KitchenAid - 1.25L Electric Kettle KEK1222SX',
    description:
      'The KitchenAid Electric Kettle is simple to use and offers a stylish compact footprint for your countertop.',
    price: 8999,
    category: 'Small Appliance',
    imageUrl: 'images/kitchenaid2.webp'
  },
  {
    name: 'Vitamix - Ascent A3300 Black Blender',
    description:
      'From the Ascent Collection. Achieve the perfect blend of flavour and texture with this fine tuned blender.Touchscreen controls give the machine a sleek silhouette and are easily wiped clean.',
    price: 64999,
    category: 'Small Appliance',
    imageUrl: 'images/vitamix1.webp'
  },
  {
    name: 'Vitamix - 3-Piece 8 oz. Bowl Blending Kit',
    description:
      'Quickly chop ingredients for any recipe or blend individual servings of dips, baby food, sauces, and salad dressing. The convenient size is also perfect for quickly chopping ingredients like garlic and onion.',
    price: 13999,
    category: 'Small Appliance',
    imageUrl: 'images/vitamix2.webp'
  },
  {
    name: 'Shun - Shun Premier 7" Santoku Knife',
    description:
      'The Shun Premier 7-in. Santoku is a beautiful, Asian-inspired chef\'s knife. "Santoku" means "three virtues." ',
    price: 28999,
    category: 'Knives',
    imageUrl: 'images/shun1.jpg'
  },
  {
    name: 'Shun - Shun 7" Classic Vegetable Cleaver',
    description:
      'The Shun Classic Vegetable Cleaver is a large squared knife with a very wide blade.The edge is used to chop vegetables. The flat of the blade makes a great tool for smashing garlic cloves or ginger.',
    price: 29995,
    category: 'Knives',
    imageUrl: 'images/shun2.jpg'
  }
];

let container = document.getElementById('products-container');
let cookwareBtn = document.querySelector('#cookwareBtn');
let smallApplianceBtn = document.querySelector('#smallApplianceBtn');
let knivesBtn = document.querySelector('#knivesBtn');
let allBtn = document.querySelector('#all-btn');

function load(arr) {
  arr.map(item => {
    let list = document.createElement('div');
    list.setAttribute('class', 'product-item');

    let wrap = document.createElement('div');
    wrap.setAttribute('class', 'product-wrap');

    let img = document.createElement('img');
    img.setAttribute('class', 'product-img');
    img.setAttribute('src', item.imageUrl);
    img.setAttribute('alt', 'All about Kitchenware');
    wrap.appendChild(img);

    let content = document.createElement('div');
    content.setAttribute('class', 'product-content');

    let category = document.createElement('h3');
    category.setAttribute('class', 'product-category');
    category.innerHTML = item.category;
    content.appendChild(category);

    let name = document.createElement('h3');
    name.setAttribute('class', 'product-name');
    name.innerHTML = item.name;
    content.appendChild(name);

    let price = document.createElement('h3');
    price.setAttribute('class', 'product-price');
    price.innerHTML = '$ ' + item.price / 100;

    content.appendChild(price);

    let description = document.createElement('p');
    description.setAttribute('class', 'product-description');
    description.innerHTML = item.description;
    content.appendChild(description);

    wrap.appendChild(content);
    list.appendChild(wrap);
    container.appendChild(list);
  });
}

load(data);

// clear
function clear() {
  container.innerHTML = '';
}

// category filter func
function itemsByCategory(cat) {
  let arr = data.filter(e => e.category === cat);
  return arr;
}

// category filter btn
cookwareBtn.addEventListener('click', function() {
  clear();
  let cookwareArr = itemsByCategory('Cookware');
  load(cookwareArr);
});

smallApplianceBtn.addEventListener('click', function() {
  clear();
  let smallApplianceArr = itemsByCategory('Small Appliance');
  load(smallApplianceArr);
});

knivesBtn.addEventListener('click', function() {
  clear();
  let knivesArr = itemsByCategory('Knives');
  load(knivesArr);
});

allBtn.addEventListener('click', function() {
  clear();
  load(data);
});
