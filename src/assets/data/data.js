const sampleData = [
  {
    id: 1,
    city: 'NewMarket',
    title: 'Central Downtown Apartment with Amenities',
    address: 'No. 11, Song-Sho Road, NewMarket, Suffolk',
    about: 'Come and stay at this modern and comfortable apartment! My home is centrally located right in the middle' +
      ' of the downtown. Talk about convenience! Shops, stores, and other destination areas are nearby. \r\n\r\nFeel the ' +
      'warmth of the sun as there is plenty of natural light showers. The living room features tv, sofa, table, radio, ' +
      'and fan. There is free wi-fi with a fast internet speed. \r\n\r\nForgot shopping for breakfast staples? We provide ' +
      'eggs, bread, cereals, coffee, milk, tea and cookies. Enjoy cooking as my kitchen boasts full size appliances. The ' +
      'dining table is for four people. Need to wash your clothes? There is a washer and a dryer. We provide hampers, ' +
      'detergents, and clothing conditioner. \r\n\r\nIf you need to hit the gym, there is located at the fourth floor of ' +
      'the building. There is indoor spa and pool.',
    thumb: {
      src: require('@/assets/image/1/image_0_thumb.jpg')
    },
    image: [
      {
        src: require('@/assets/image/1/image_1.jpg')
      },
      {
        src: require('@/assets/image/1/image_2.jpg')
      },
      {
        src: require('@/assets/image/1/image_3.jpg')
      },
      {
        src: require('@/assets/image/1/image_4.jpg')
      }
    ],
    amenities: [
      {
        title: 'Wireless Internet',
        icon: 'mdi-wifi'
      },
      {
        title: 'Pets Allowed',
        icon: 'mdi-paw'
      },
      {
        title: 'TV',
        icon: 'mdi-television'
      },
      {
        title: 'Kitchen',
        icon: 'mdi-silverware-fork-knife'
      },
      {
        title: 'Breakfast',
        icon: 'mdi-coffee'
      }
    ],
    prices: [
      {
        title: 'Per night',
        value: '£89'
      },
      {
        title: 'Extra people',
        value: 'No charge'
      },
      {
        title: 'Weekly discount',
        value: '18%'
      },
      {
        title: 'Monthly discount',
        value: '50%'
      }
    ]
  },
  {
    id: 2,
    city: 'Cambridge',
    title: 'Private Suite with Free Parking',
    address: '110, Ditton Walk, Cambridge, Xinyi District, Section 5, Xinyi Road, 7',
    about: 'The entire apartment is for you to enjoy as my home is not shared with other guests or myself. This is a private suite so you can enjoy total privacy! I am just a text away if you need anything. \r\n\r\nThe kitchen has a microwave, oven, coffee machine, electric stove, and many others. The whole unit has air conditioning and heating that you can easily adjust its temperatures. \r\n\r\nAt the living room is like your small office space. It has a desk and chair, a good area for you to work. There is also wi-fi. The bathroom features a bath tub for you to relax. We provide soaps, shampoo, and other toiletries. \r\n\r\nThere is one free parking in this unit. No need to park in metered parking spots or paid garages!',
    thumb: {
      src: require('@/assets/image/2/image_0_thumb.jpg')
    },
    image: [
      {
        src: require('@/assets/image/2/image_1.jpg')
      },
      {
        src: require('@/assets/image/2/image_2.jpg')
      },
      {
        src: require('@/assets/image/2/image_3.jpg')
      },
      {
        src: require('@/assets/image/2/image_4.jpg')
      }
    ],
    amenities: [
      {
        title: 'Wireless Internet',
        icon: 'mdi-wifi'
      },
      {
        title: 'Pets Allowed',
        icon: 'mdi-paw'
      },
      {
        title: 'TV',
        icon: 'mdi-television'
      },
      {
        title: 'Kitchen',
        icon: 'mdi-silverware-fork-knife'
      },
      {
        title: 'Breakfast',
        icon: 'mdi-coffee'
      }
    ],
    prices: [
      {
        title: 'Per night',
        value: '£99'
      },
      {
        title: 'Extra people',
        value: '£16'
      },
      {
        title: 'Weekly discount',
        value: '18%'
      },
      {
        title: 'Monthly discount',
        value: '54%'
      }
    ]
  },
  {
    id: 3,
    city: 'Cambridge',
    title: "2 Bedroom House ' Pool Included!",
    address: 'No. 51, Hanzhong Street, Wanhua District, Icenic way, Cambridge',
    about: 'Come and stay at my home that has two bedrooms and bathrooms. Each bedroom is lockable and secure if you want safety and privacy. \r\nBreakfast is included and there is airport transfer. Wow! \r\n\r\nThere is free wi-fi included in your stay. Dip into the inviting private pool. The kitchen is fully-equipped. Dining area can accommodate up to 8 people. There is cable TV and DVD player in the living room. \r\n\r\nIf you want to go around the town and you have no vehicle, I can rent you out my motorbike. Everything is so easy to access from this fabulous location! Just a ten minute drive is the town where you can shop, dine, and look around!',
    thumb: {
      src: require('@/assets/image/3/image_0_thumb.jpg')
    },
    image: [
      {
        src: require('@/assets/image/3/image_1.jpg')
      },
      {
        src: require('@/assets/image/3/image_2.jpg')
      },
      {
        src: require('@/assets/image/3/image_3.jpg')
      },
      {
        src: require('@/assets/image/3/image_4.jpg')
      }
    ],
    amenities: [
      {
        title: 'Wireless Internet',
        icon: 'mdi-wifi'
      },
      {
        title: 'Pets Allowed',
        icon: 'mdi-paw'
      },
      {
        title: 'TV',
        icon: 'mdi-television'
      },
      {
        title: 'Kitchen',
        icon: 'mdi-silverware-fork-knife'
      },
      {
        title: 'Breakfast',
        icon: 'mdi-coffee'
      }
    ],
    prices: [
      {
        title: 'Per night',
        value: '£84'
      },
      {
        title: 'Extra people',
        value: '£26'
      },
      {
        title: 'Weekly discount',
        value: '7%'
      },
      {
        title: 'Monthly discount',
        value: '8%'
      }
    ]
  },
  {
    id: 4,
    city: 'Cambridge',
    title: 'Downtown Apartment with Amenities',
    address: 'No. 11, Rose town, Cambridge',
    about: 'Come and stay at this modern and comfortable apartment! My home is centrally located right in the middle' +
      ' of the downtown. Talk about convenience! Shops, stores, and other destination areas are nearby. \r\n\r\nFeel the ' +
      'warmth of the sun as there is plenty of natural light showers. The living room features tv, sofa, table, radio, ' +
      'and fan. There is free wi-fi with a fast internet speed. \r\n\r\nForgot shopping for breakfast staples? We provide ' +
      'eggs, bread, cereals, coffee, milk, tea and cookies. Enjoy cooking as my kitchen boasts full size appliances. The ' +
      'dining table is for four people. Need to wash your clothes? There is a washer and a dryer. We provide hampers, ' +
      'detergents, and clothing conditioner. \r\n\r\nIf you need to hit the gym, there is located at the fourth floor of ' +
      'the building. There is indoor spa and pool.',
    thumb: {
      src: require('@/assets/image/1/image_0_thumb.jpg')
    },
    image: [
      {
        src: require('@/assets/image/1/image_1.jpg')
      },
      {
        src: require('@/assets/image/1/image_2.jpg')
      },
      {
        src: require('@/assets/image/1/image_3.jpg')
      },
      {
        src: require('@/assets/image/1/image_4.jpg')
      }
    ],
    amenities: [
      {
        title: 'Wireless Internet',
        icon: 'mdi-wifi'
      },
      {
        title: 'Pets Allowed',
        icon: 'mdi-paw'
      },
      {
        title: 'TV',
        icon: 'mdi-television'
      },
      {
        title: 'Kitchen',
        icon: 'mdi-silverware-fork-knife'
      },
      {
        title: 'Breakfast',
        icon: 'mdi-coffee'
      }
    ],
    prices: [
      {
        title: 'Per night',
        value: '£89'
      },
      {
        title: 'Extra people',
        value: 'No charge'
      },
      {
        title: 'Weekly discount',
        value: '18%'
      },
      {
        title: 'Monthly discount',
        value: '50%'
      }
    ]
  },
  {
    id: 5,
    city: 'NewMarket',
    title: 'Private Suite with Free Parking',
    address: '110, Fennen Walk, Newmarket, Red-lodge',
    about: 'The entire apartment is for you to enjoy as my home is not shared with other guests or myself. This is a private suite so you can enjoy total privacy! I am just a text away if you need anything. \r\n\r\nThe kitchen has a microwave, oven, coffee machine, electric stove, and many others. The whole unit has air conditioning and heating that you can easily adjust its temperatures. \r\n\r\nAt the living room is like your small office space. It has a desk and chair, a good area for you to work. There is also wi-fi. The bathroom features a bath tub for you to relax. We provide soaps, shampoo, and other toiletries. \r\n\r\nThere is one free parking in this unit. No need to park in metered parking spots or paid garages!',
    thumb: {
      src: require('@/assets/image/2/image_0_thumb.jpg')
    },
    image: [
      {
        src: require('@/assets/image/2/image_1.jpg')
      },
      {
        src: require('@/assets/image/2/image_2.jpg')
      },
      {
        src: require('@/assets/image/2/image_3.jpg')
      },
      {
        src: require('@/assets/image/2/image_4.jpg')
      }
    ],
    amenities: [
      {
        title: 'Wireless Internet',
        icon: 'mdi-wifi'
      },
      {
        title: 'Pets Allowed',
        icon: 'mdi-paw'
      },
      {
        title: 'TV',
        icon: 'mdi-television'
      },
      {
        title: 'Kitchen',
        icon: 'mdi-silverware-fork-knife'
      },
      {
        title: 'Breakfast',
        icon: 'mdi-coffee'
      }
    ],
    prices: [
      {
        title: 'Per night',
        value: '£99'
      },
      {
        title: 'Extra people',
        value: '£16'
      },
      {
        title: 'Weekly discount',
        value: '18%'
      },
      {
        title: 'Monthly discount',
        value: '54%'
      }
    ]
  },
  {
    id: 6,
    city: 'NewMarket',
    title: 'Private Suite with Free Parking',
    address: '110, Park lane, Newmarket, Xinyi District, Section 5, Xinyi Road, 7',
    about: 'The entire apartment is for you to enjoy as my home is not shared with other guests or myself. This is a private suite so you can enjoy total privacy! I am just a text away if you need anything. \r\n\r\nThe kitchen has a microwave, oven, coffee machine, electric stove, and many others. The whole unit has air conditioning and heating that you can easily adjust its temperatures. \r\n\r\nAt the living room is like your small office space. It has a desk and chair, a good area for you to work. There is also wi-fi. The bathroom features a bath tub for you to relax. We provide soaps, shampoo, and other toiletries. \r\n\r\nThere is one free parking in this unit. No need to park in metered parking spots or paid garages!',
    thumb: {
      src: require('@/assets/image/2/image_0_thumb.jpg')
    },
    image: [
      {
        src: require('@/assets/image/2/image_1.jpg')
      },
      {
        src: require('@/assets/image/2/image_2.jpg')
      },
      {
        src: require('@/assets/image/2/image_3.jpg')
      },
      {
        src: require('@/assets/image/2/image_4.jpg')
      }
    ],
    amenities: [
      {
        title: 'Wireless Internet',
        icon: 'mdi-wifi'
      },
      {
        title: 'Pets Allowed',
        icon: 'mdi-paw'
      },
      {
        title: 'TV',
        icon: 'mdi-television'
      },
      {
        title: 'Kitchen',
        icon: 'mdi-silverware-fork-knife'
      },
      {
        title: 'Breakfast',
        icon: 'mdi-coffee'
      },
      {
        title: 'Furnished',
        icon: 'mdi-clipboard-list'
      },
      {
        title: 'Fridge Freezer',
        icon: 'mdi-fridge-bottom'
      },
      {
        title: 'Breakfast',
        icon: 'mdi-microwave'
      },
      {
        title: 'Oven/Hob',
        icon: 'mdi-stove'
      },
      {
        title: 'Washing Machine',
        icon: 'mdi-washing-machine'
      }
    ],
    prices: [
      {
        title: 'Per night',
        value: '£99'
      },
      {
        title: 'Extra people',
        value: '£16'
      },
      {
        title: 'Weekly discount',
        value: '18%'
      },
      {
        title: 'Monthly discount',
        value: '54%'
      }
    ]
  }
]
export default sampleData
