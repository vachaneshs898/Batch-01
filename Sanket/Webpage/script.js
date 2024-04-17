const images = ["https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0",
"https://th.bing.com/th/id/R.be080585c0da64067404b23530a814ce?rik=vjGDbB2xFyn9Sw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg&ehk=W21nAe%2fQYSWkLQF83VxX2RflaJ7eKm%2fm0J4pW85PpjU%3d&risl=&pid=ImgRaw&r=0",
"https://th.bing.com/th/id/OIP.ErAiMih0ltX9nxzgEbfN0gHaEp?rs=1&pid=ImgDetMain",
"https://th.bing.com/th/id/R.4eb01b6d1de8180fc16a7ea457df2dd0?rik=mDmVmiPWKjG19Q&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f102787-nature-mountain-river-landscape.jpg&ehk=tKQDONLRX3EXEvzzdRuXB5UBE3a0IgFKug46zeMojOg%3d&risl=&pid=ImgRaw&r=0",
"https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0"];

var currentindex = 0;

function next(){
    var value1 = document.getElementById("setimage");
    currentindex = currentindex >= images.length-2 ? 0 : currentindex+1;
    value1.src = images[currentindex];
    document.getElementById("setposition").textContent = currentindex+1;
}
function prev(){
    var value1 = document.getElementById("setimage");
    currentindex = currentindex <=0 ? images.length-2 : currentindex-1;
    value1.src = images[currentindex]
    document.getElementById("setposition").textContent = currentindex+1;
}

function sign_in(){
    window.open("H:\Projects\Batch-01\Sanket\Webpage\Sign-in\Sign-in-page.html", '_blank');
}




// var currentindex = 0;

// const next = document.getElementById("next-btn");
// // console.log(next);
// const prev = document.getElementById("prev-btn");
// // console.log(prev)
// const image = document.getElementById("image");

// next.addEventListener = ('click', () => {
//     console.log("clicked");
//     currentindex = currentindex <= 0 ?  images.length-1 : currentindex-1; 
//     console.log(currentindex);
//     image.src = images[currentindex];
// })

// prev.addEventListener = ('click', () => {
//     console.log("clcked");
//     currentindex = currentindex >= images.length-1 ? 0 :currentindex+1;
//     console.log(currentindex);
//     image.src = images[currentindex];
// })