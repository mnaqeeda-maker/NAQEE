function showGift(){

    document.getElementById("start").classList.add("hidden");
    document.getElementById("giftScreen").classList.remove("hidden");

    sparkleBurst();
}


function openGift(){

    document.getElementById("giftScreen").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");

    sparkleBurst();
}


function showOptions(){

    document.getElementById("message").classList.add("hidden");
    document.getElementById("options").classList.remove("hidden");

}


function openPage(pageId){

    document.getElementById("options").classList.add("hidden");

    var pages = document.querySelectorAll(".content-page");

    pages.forEach(function(page){
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");

}


function goBack(){

    var pages = document.querySelectorAll(".content-page");

    pages.forEach(function(page){
        page.classList.add("hidden");
    });

    document.getElementById("options").classList.remove("hidden");

}


/* FIREWORK EFFECT */

function sparkleBurst(){

    for(let i = 0; i < 8; i++){

        let x = 15 + Math.random() * 70;
        let y = 15 + Math.random() * 50;

        let spark = document.createElement("div");

        spark.className = "firework";
        spark.style.left = x + "vw";
        spark.style.top = y + "vh";

        document.body.appendChild(spark);

        for(let j = 0; j < 22; j++){

            let particle = document.createElement("span");

            let angle = (Math.PI * 2 * j) / 22;
            let distance = 45 + Math.random() * 65;

            particle.innerHTML = "✦";

            particle.style.setProperty(
                "--x",
                Math.cos(angle) * distance + "px"
            );

            particle.style.setProperty(
                "--y",
                Math.sin(angle) * distance + "px"
            );

            spark.appendChild(particle);
        }

        setTimeout(function(){
            spark.remove();
        },1600);
    }

    const wishImage = document.createElement("img");
wishImage.src = "wish.jpg";
wishImage.className = "wish-image";
wishImage.alt = "Birthday Memory";

document.querySelector(".wish-section").appendChild(wishImage);
}