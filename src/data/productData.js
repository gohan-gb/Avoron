const productData = [
    {   
        id: 1,
        title: 'vibgyor umbrella',
        price: 650,
        images: ['https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'handcrafts',
        subCategory: 'umbrella'
    },
    {
        id: 2,
        title: 'tote bag with tall straps',
        price: 550,
        images: ['https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'handcrafts',
        subCategory: 'bag'
    },
    {
        id: 3,
        title: 'wooden piri',
        price: 750,
        images: ['https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'handcrafts',
        subCategory: 'piri'
    },
    {
        id: 4,
        title: 'sooti punjabi',
        price: 999,
        images: ['https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'men',
        subCategory: 'punjabi and tshirts'
    },
    {
        id: 5,
        title: 'white dhoti (south indian)',
        price: 699,
        images: ['https://3.imimg.com/data3/YY/SQ/MY-6467156/111-500x500.jpg','https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'men',
        subCategory: 'pajama and dhotis'
    },
    {
        id: 6,
        title: 'Navy Blue pajamas',
        price: 399,
        images: ['https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'men',
        subCategory: 'pajama and dhotis'
    },
    {
        id: 7,
        title: 'White-red saree',
        price: 1500,
        images: ['https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'Women',
        subCategory: 'sarees'
    },
    {
        id: 8,
        title: 'cotton saree with blouse piece',
        price: 2199,
        images: ['https://images.pexels.com/photos/8229218/pexels-photo-8229218.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            'https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'Women',
        subCategory: 'sarees'
    },
    {
        id: 9,
        title: 'jhumkas',
        price: 399,
        images: ['https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'Women',
        subCategory: 'jewellery'
    },
    {
        id: 10,
        title: 'khaki punjabi',
        price: 899,
        images: ['https://m.media-amazon.com/images/I/71FjJaQ902L._SY550_.jpg','https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'Kids',
        subCategory: 'boys'
    },
    {
        id: 11,
        title: 'line art frock',
        price: 1299,
        images: ['https://5.imimg.com/data5/SELLER/Default/2022/1/IS/FN/SS/2985467/capture.JPG','https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390541/pexels-photo-28390541/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/28390557/pexels-photo-28390557/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
        description: 'this is a demo description to show whatever content is inside this div. kindly write a brief description for each products.',
        category: 'Kids',
        subCategory: 'girls'
    },
]

export default productData;