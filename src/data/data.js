
const links = [
    {
        link: 'Home',
        active: true
    }, 
    {
        link: 'Shop',
        active: false
    },
    {
        link: 'Products',
        active: false
    },
    {
        link: 'categories',
        active: false
    },
    {
        link: 'News',
        active: false
    },
    {
        link: 'Elements',
        active: false
    },
];

const images = [
    // '../../public/images/home1_slide_one_bg.jpg',
    // '../../public/images/home1_slide_2_bg.jpg',
    {
        url: '../../public/images/home1_slide_three_bg_2.jpg',
        title: 'Brand New Arrivals',
        secondTitle: 'New collection from new york',
        button1: 'view all',
        button2: 'lookbook'
    }
];

const categories = [
    {
        name: 'Men',
        selected: true
    },

    {
        name: 'Women',
        selected: false
    },

    {
        name: 'Accessories',
        selected: false
    },
];

const categoryCards = [
    {
        img: '../../public/images/black_elegant_leather_jacket.jpg',
        title: 'Black Leather Jacket',
        description: 'Men, Jackets, Jeans',
        price: '$200',
        oldPrice: '$235',
        category: 'Men'
    },

    {
        img: '../../public/images/black_leather_suit.jpg',
        title: 'Black Leather Suit',
        description: 'Men, Jackets',
        price: '$176',
        oldPrice: '',
        category: 'Men'
    },

    {
        img: '../../public/images/blue_jacket_and_white_stripe_tee.jpg',
        title: 'Blue Jacket & Stripe Tee',
        description: 'Jackets, Men, Suits',
        price: '$580',
        oldPrice: '',
        category: 'Men'
    },

    {
        img: '../../public/images/modern_black_leather_suit.jpg',
        title: 'Modern Black Leather Suit',
        description: 'Men, Jackets',
        price: '$96',
        oldPrice: '',
        category: 'Men'
    },

    {
        img: '../../public/images/spring_printed_dress.jpg',
        title: 'Spring Printed Dress',
        description: 'Women, Dress',
        price: '$47',
        oldPrice: '',
        category: 'Women'
    },

    {
        img: '../../public/images/modern_love_tee.jpg',
        title: 'Modern Love Tee',
        description: 'T-Shirts, Women',
        price: '$68',
        oldPrice: '',
        category: 'Women'
    },

    {
        img: '../../public/images/black_leather_jacket.jpg',
        title: 'Black Jacket',
        description: 'Jackets, Women',
        price: '$125',
        oldPrice: '',
        category: 'Women'
    },

    {
        img: '../../public/images/hipster_black_top.jpg',
        title: 'Hipster Black Top',
        description: 'T-Shirts, Women',
        price: '$57',
        oldPrice: '',
        category: 'Women'
    },

    {
        img: '../../public/images/casual_leather_belts.jpg',
        title: 'Casual Leather Belts',
        description: 'Men, Accessories',
        price: '$65',
        oldPrice: '',
        category: 'Accessories'
    },

    {
        img: '../../public/images/leather_gloves.jpg',
        title: 'Leather Gloves',
        description: 'Gloves, Men, Women, Accessories',
        price: '$45',
        oldPrice: '',
        category: 'Accessories'
    },

    {
        img: '../../public/images/modern_leather_boots.jpg',
        title: 'Modern Leather Boots',
        description: 'Men, Accessories, Miscellaneous, Shoes',
        price: '$30',
        oldPrice: '$50',
        category: 'Accessories'
    },

    {
        img: '../../public/images/brown_dress_shoes.jpg',
        title: 'Brown Dress Shoes',
        description: 'Accessories, Miscellaneous, Shoes, Women',
        price: '$36',
        oldPrice: '$46',
        category: 'Accessories'
    },

];

export {links , images , categories , categoryCards};