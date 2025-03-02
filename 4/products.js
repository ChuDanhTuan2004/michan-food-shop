
// Menu categories data
const categories = {
    all: {
        name: "All",
        subcategories: ["beef", "lamb", "coldcuts"]
    },
    beef: {
        name: "Premium Beef",
        items: ["Ribeye", "Sirloin", "Brisket"]
    },
    lamb: {
        name: "Lamb",
        items: ["Leg of Lamb", "Lamb Chops", "Lamb Shoulder"]
    },
    coldcuts: {
        name: "Cold Cuts",
        items: ["Salami", "Prosciutto", "Pepperoni"]
    },
    bestSellers: {
        name: "Best Sellers"
    },
    newArrivals: {
        name: "New Arrivals"
    }
};

// Featured image for sidebar
const sidebarImage = "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1470&auto=format&fit=crop";

// Product data
const products = [
    {
        id: "duicuu",
        name: "Đùi cừu",
        image: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?q=80&w=1374&auto=format&fit=crop",
        category: "Meat",
        price: "$12.99/pound",
        rating: 4.5,
        cart: "popup.html#duicuu"
    },
    {
        id: "duiheomuoi",
        name: "Đùi heo muối",
        image: "https://images.unsplash.com/photo-1591386767153-987783380885?q=80&w=1374&auto=format&fit=crop",
        category: "Meat",
        price: "$9.99/pound",
        rating: 4.2,
        cart: "popup.html#duiheomuoi"
    },
    {
        id: "dautay",
        name: "Dâu tây Sơn La",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1470&auto=format&fit=crop",
        category: "Fruits",
        price: "$4.99/pound",
        rating: 4.3
    },
    {
        id: "thanbo",
        name: "Phần thăn bò",
        image: "https://images.unsplash.com/photo-1613454320447-98affd88f197?q=80&w=1470&auto=format&fit=crop",
        category: "Meat",
        price: "$15.50/pound",
        rating: 4.7
    },
    {
        id: "salami",
        name: "Salami",
        image: "https://images.unsplash.com/photo-1626082896492-766af4eb6501?q=80&w=1470&auto=format&fit=crop",
        category: "Meat",
        price: "$7.99/pound",
        rating: 4.1
    },
    {
        id: "suoncuu",
        name: "Sườn cừu",
        image: "https://images.unsplash.com/photo-1628268909376-e8c28097e8b6?q=80&w=1470&auto=format&fit=crop",
        category: "Meat",
        price: "$14.99/pound",
        rating: 4.6
    },
    {
        id: "thanlungcuu",
        name: "Thăn lưng cừu",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1470&auto=format&fit=crop",
        category: "Meat",
        price: "$16.99/pound",
        rating: 4.8
    },
    {
        id: "thitucbo",
        name: "Thịt ức bò",
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1470&auto=format&fit=crop",
        category: "Meat",
        price: "$11.99/pound",
        rating: 4.4
    },
    {
        id: "nhoxanh",
        name: "Nho xanh Hàn Quốc",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1473&auto=format&fit=crop",
        category: "Fruits",
        price: "$3.99/pound",
        rating: 4.6
    },
    {
        id: "thitvai",
        name: "Thịt vai",
        image: "https://images.unsplash.com/photo-1547050605-2f267cd78ffa?q=80&w=1470&auto=format&fit=crop",
        category: "Meat",
        price: "$10.50/pound",
        rating: 4.3
    },
    {
        id: "thitvaibo",
        name: "Thịt vai bò",
        image: "https://images.unsplash.com/photo-1551198297-094dd118827b?q=80&w=1470&auto=format&fit=crop",
        category: "Meat",
        price: "$13.49/pound",
        rating: 4.5
    }
];

// Features section data
const features = [
    "✅ Product Package",
    "📞 24/7 Support",
    "🚚 Delivery in 5 hours",
    "🔒 Payment Secure"
];
