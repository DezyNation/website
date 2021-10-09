const lightbox = document.getElementById("lightbox-section");
const productImg = document.getElementById("productImg");
const productPrice = document.getElementById("productPrice");
const lightboxTechDesc = document.getElementById("lightboxTechDesc");
const lightboxAddInfo = document.getElementById("lightboxAddInfo");

// This is the products database

const Products = [
    {
        productId: 1,
        img: "https://5.imimg.com/data5/ANDROID/Default/2021/3/BN/ZD/KH/40930076/product-jpeg-500x500.jpg",
        title: "Brushless AVR",
        price: "2499 per piece",
        techDesc: "This is Brushless AVR's technical description.",
        addInfo: "This is Brushless AVR's additional information."
    },
]

// Products database ends here


function openLightbox(givenId){
    for (let i = 0; i < Products.length; i++) {
        if (givenId === Products[i].productId)
        {
            productImg.src = Products[i].img;
            productPrice.innerHTML = Products[i].price;
            lightboxTechDesc.innerHTML = Products[i].techDesc;
            lightboxAddInfo.innerHTML = Products[i].addInfo;
            lightbox.style.display = "flex";
        }

        else
        window.alert("Sorry! No data found for this product.");
    }
}

function closeLightbox(){
    lightbox.style.display = "none";
}