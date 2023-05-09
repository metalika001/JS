// css 파일 내의 class 정의를 사용해서 스타일을 바꾼다.
function init(){
    let title = document.querySelector("#title")
    title.addEventListener("clck",handlexlick )
    title.addEventListener("contextmenu",handlecontextmenu )
    if (title.classname!="topic")   {
        tittle.classname = "topic"
    }else{
        title.classname =""
    }
}

init()

function handleclick() {
  //  console.log('title classname:' , title.classname)}
//문제 발생 : large 가 없어져 버린다.


if(!title.classlist.contains("topic")) {
// topic을 포함하지 않은경우
    title.classlist.add("topic")
}else {
    //ropic을 포함할경우
    title.classlist.remove("topic")
}
}
  function handlecontextmenu
function clicked(){

}