
const refreshServerInfo = () => {
  const req = new XMLHttpRequest()

  console.log(req);
  console.log(req.status);

  req.addEventListener('load', () => {
    if (xhr.readyState == 4) {

      if (xhr.status == 200) { //200은 잘넘어왔단 것이다.

        process();


        console.log(this);
        console.log(this.responseText)
        console.log('success')
    
        const data = JSON.parse(this.responseText);
    
        // const serverInfo = document.querySelector(".test");
    
        // Object.keys(data).forEach(p => {
        //   const replacements = serverInfo.querySelectorAll(`[data-replace = "${p}]`);
    
        //   for(let r of replacements) {
        //     r.textContent = data[p];
        //   }
        // })
      } else {

        alert("요청오류 : " + xhr.status);

      }

    }
  })

  req.open('GET', 'https://www.icheon.go.kr/portal/rssBbsNtt.do?bbsNo=13&type=p', true)
  req.withCredentials = true;
  // Access-Control-Allow-Origin' 을 모두 모든 도메인으로부터의 서버 리소스 접근을 허용 하는 방법?? *
  req.send();

}

const init = () => {
  refreshServerInfo()
}

init()
