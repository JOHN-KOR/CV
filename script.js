let img = document.querySelector(".img");
let preview = document.querySelectorAll(".preview");
let link = [
    "Documents/Web implementation.pdf",
    "Documents/SEO profile.pdf",
    "Documents/Extranet-Notion4.gif",
    "Documents/Remote Selfie_WF.pdf",
    "Documents/HDC Young Chang_WF.pdf",
]
let aIframe = document.createElement("iframe");


//현재 부트스트랩 팝업 테스트
img.addEventListener('click', function(){
    alert("developing")
});




//pdf 미리보기 기능
preview.forEach((el, index) => {
    
    el.addEventListener('mouseover',(e)=>{
         //마우스 위치 및 화면 크기 확인
         const besideMouseX = e.pageX;
         const besideMouseY = e.pageY - 250;

        // pdf 클라스명 생성 및 해당 자료 노출
        aIframe.className = "pdf";
        aIframe.src = link[index];
        document.body.appendChild(aIframe);
        
        //마우스 위치에 맞춰 생성
        aIframe.style.left = besideMouseX + 'px';
        aIframe.style.top = besideMouseY + 'px';        
    }
    )
    
    el.addEventListener('mouseout', ()=>{
        document.body.removeChild(aIframe);
    })

  });