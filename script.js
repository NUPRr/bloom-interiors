// 1. Data Object (Luxury Portfolio)
const designImages = {
    minimal: {
        bedroom: ["images/mobed2.jpg", "images/mobed3.jpg", "images/mobed4.jpg", "images/bed.jpg.jpg","images/bd8.jpg","images/bd9.jpg" ],
        living: ["images/minL2.jpg.jpg", "images/minL1.jpg.jpg", "images/minL3.jpg.jpg", "images/living.jpg.jpg", "images/l8.jpg", "images/l9.jpg" ],
        kitchen: ["images/kitchen.jpg.jpg", "images/k8.jpg", "images/k9.jpg", "images/k10.jpg", "images/k11.jpg", "images/k12.jpg"],
        workspace: ["images/work.jpg.jpg", "images/ws.jpg.jpg"]
    },
    boho: {
        bedroom: ["images/bed.jpg.jpg", "images/mobed2.jpg"],
        living: ["images/bohoL1.jpg", "images/bohoL2.jpg", "images/living.jpg.jpg" ],
        kitchen: ["images/kit.jpg.jpg", "images/kitchen.jpg.jpg"],
        workspace: ["images/ws.jpg.jpg", "images/work.jpg.jpg"]
    },
    modern: {
        bedroom: ["images/cobed1.jpg", "images/mobed3.jpg"],
        living: ["images/ModernL1.jpg", "images/ModernL2.jpg", "images/living.jpg.jpg"],
        kitchen: ["images/kit.jpg.jpg", "images/kitchen.jpg.jpg"],
        workspace: ["images/ws.jpg.jpg", "images/work.jpg.jpg"]
    },
    cozy: {
        bedroom: ["images/cozyL1.jpg", "images/bed.jpg.jpg"],
        living: ["images/cozyL2.jpg", "images/cozyL3.jpg", "images/living.jpg.jpg"],
        kitchen: ["images/kit.jpg.jpg", "images/kitchen.jpg.jpg"],
        workspace: ["images/ws.jpg.jpg", "images/work.jpg.jpg"]
    }
};

// 2. Quiz Navigation Logic
function goToDesignPage() {
    const style = document.getElementById("style").value;
    const space = document.getElementById("space").value;

    localStorage.setItem("style", style);
    localStorage.setItem("space", space);

    window.location.href = "design.html";
}

// 3. Design Page Display Logic
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("design.html")) {
        const style = localStorage.getItem("style") || "minimal";
        const space = localStorage.getItem("space") || "living";

        const titleElement = document.getElementById("designTitle");
        if (titleElement) {
            titleElement.innerText = `Your ${style.charAt(0).toUpperCase() + style.slice(1)} ${space.charAt(0).toUpperCase() + space.slice(1)} Curation`;
        }

        const grid = document.getElementById("designGrid");
        if (!grid) return;

        const images = designImages[style] && designImages[style][space] ? designImages[style][space] : [];
        grid.innerHTML = ""; 

        if (images.length === 0) {
            grid.innerHTML = "<p style='text-align:center; width:100%; grid-column: 1/-1;'>Selection ke liye images nahi mili. Dubara try karein.</p>";
        } else {
            images.forEach(img => {
                grid.innerHTML += `
                    <div class="card luxury-card">
                        <img src="${img}" alt="Interior Design" onerror="this.src='https://via.placeholder.com/500x600?text=Image+Not+Found'">
                    </div>
                `;
            });
        }
    }
});

// Booking Popup Logic
const consultForm = document.querySelector('.consult-form');
if (consultForm) {
    consultForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('successPopup').style.display = 'flex';
    });
}

function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
    window.location.href = "index.html";
}

// Results Page Booking Logic
document.addEventListener("DOMContentLoaded", function() {
    const finalForm = document.getElementById('finalBookingForm');
    
    if (finalForm) {
        finalForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Page reload hone se rokega
            
            const date = document.getElementById('resDate').value;
            const time = document.getElementById('resTime').value;

            // Success Popup dikhana
            const popup = document.getElementById('successPopup');
            if (popup) {
                // Agar aap message change karna chahte hain toh:
                const pTag = popup.querySelector('p');
                if(pTag) pTag.innerText = `Your consultation is booked for ${date} at ${time}. We will contact you soon!`;
                
                popup.style.display = 'flex';
            }
        });
    }
});