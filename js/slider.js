
/*setInterval(function(){
    let banners = document.getElementsByClassName("banner")
    let currentActiveBannerIndex

for (let i = 0; i < banners.length; i++){
    // console.log(banners[i].classList.contains("active"))
    if (banners[i].classList.contains("active")) currentActiveBannerIndex = i
}
// console.log(currentActiveBannerIndex)
let nextActiveBannerIndex 
if (currentActiveBannerIndex+1 > banners.length - 1) nextActiveBannerIndex = 0
    else nextActiveBannerIndex = currentActiveBannerIndex+1
    banners[currentActiveBannerIndex].classList.remove("active")
    banners[nextActiveBannerIndex].classList.add("active")
}, 3000)*/





/*setInterval(function(){
    let article = document.getElementsByClassName("articles")
let currentActiveArticleIndex;
for (let i = 0; i < article.length; i++){
    console.log(article[i].classList.contains("active"))
    if (article[i].classList.contains("active")) currentActiveArticleIndex = i
}
console.log(currentActiveArticleIndex)
let nextActiveArticleIndex = currentActiveArticleIndex+1
    article[currentActiveArticleIndex].classList.remove("active")
    article[nextActiveArticleIndex].classList.add("active")
}, 5000)*/


console.log(document.getElementById("site-container").offsetWidth)
const bannerWidth = document.getElementById("site-container").offsetWidth || 1157
let banners = document.getElementsByClassName("banner")
i = 0;

function moveLeft(){
    if (pos < -(i+1) * bannerWidth) {
        clearInterval(interval)
        i++;
        if (i >= banners.length-1) 
        {
            i = 0
            document.getElementById("line").style.left = '0px'
        }
        // clearInterval(interval2)    
    } 
    else {
       pos -=30       
        // console.log(pos + 'px');
        document.getElementById("line").style.left = pos + 'px' 
    }

}

function moveRight(){
    if (pos >= -(i - 1) * bannerWidth || pos >= 0) {
        clearInterval(interval)
        i--;
        if (i <= 0) 
        {
            i = banners.length - 1
            document.getElementById("line").style.left = (-i * bannerWidth) + 'px'
        }
    } 
    else {
        pos +=30
        document.getElementById("line").style.left = pos + 'px' 
    }
}

function scrolSlide(direct, target){
    if(target.className == "disabled") return false
    target.className= "disabled"
    console.log(target)
    pos =-i * bannerWidth;
    interval = setInterval(function() {
        // console.log(pos + ' ' + -(i+1) * bannerWidth)
     if(direct=="left") moveRight() 
     else moveLeft()
    
        
    }, 10)
    setTimeout(function(){
        target.className = ''
    }, 1000)
}
// let interval2 = setInterval(function() {
//    scrolSlide() 
    
// }, 5000)
