
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
        oldPrice: '$235'
    },

    {
        img: '../../public/images/black_leather_suit.jpg',
        title: 'Black Leather Suit',
        description: 'Men, Jackets',
        price: '$176',
        oldPrice: ''
    },

    {
        img: '../../public/images/blue_jacket_and_white_stripe_tee.jpg',
        title: 'Blue Jacket & Stripe Tee',
        description: 'Jackets, Men, Suits',
        price: '$580',
        oldPrice: ''
    },

    {
        img: '../../public/images/modern_black_leather_suit.jpg',
        title: 'Modern Black Leather Suit',
        description: 'Men, Jackets',
        price: '$96',
        oldPrice: ''
    },

    

]

export {links , images , categories , categoryCards};