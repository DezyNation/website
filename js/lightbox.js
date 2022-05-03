const lighboxSection = document.getElementById("affiliate-offer");
const lightboxOfferImage = document.getElementById("lightboxImage");
const lightboxCompany = document.getElementById("lightboxCompany");
const lightboxCode = document.getElementById("lightboxCode");
const lightboxLink = document.getElementById("lightboxLink");
const closeBtn = document.getElementById("close-btn");

const Partners = [
    {
        name: "Hostinger",
        img: "img/hostingerOffer.png",
        code: "DGMAX15",
        website: "https://www.hostg.xyz/aff_c?offer_id=264&aff_id=92097"
    },
    {
        name: "Hostgator",
        img: "img/hostgatorOffer.png",
        code: "GATORMODEL",
        website: "https://partners.hostgator.com/dezynation"
    }
]

function openLightbox(partnerID){
    lightboxOfferImage.src =  Partners[partnerID-1].img;
    lightboxCompany.innerHTML = Partners[partnerID-1].name;
    lightboxCode.innerHTML = Partners[partnerID-1].code;
    lightboxLink.href = Partners[partnerID-1].website;
    lighboxSection.style.display = "grid";
}

function closeLightbox(){
    lighboxSection.style.display = "none";
    document.getElementById("copySuccess").style.display = "none";
}

lightboxCode.onclick = function(){
    document.execCommand("Copy");
    document.getElementById("copySuccess").style.display = "block";
}
