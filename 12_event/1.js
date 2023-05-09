function clicked(){
    console.log('클릭')
}


let title =document.querySelector ('#title')
title.innerHTML = '좌클릭'
title.addEventListener ("click" , leftclick)
title.addEventListener ("mouseenter",onmouse)
function rightclick(){
    title.innerHTML = '우클릭'
}
function leftclick(){
    title.innerHTML = '좌클릭'
}
function Onmouse(){
    title.styke.color = 'white'
}

