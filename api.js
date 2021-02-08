const refreshServerInfo = () => {
  const req = new XMLHttpRequest()

  console.log(req);
  console.log(req.status);

  req.open('GET', 'https://www.icheon.go.kr/portal/rssBbsNtt.do?bbsNo=13&type=p', true)
  req.setRequestHeader('Content-type', 'application/json');
  // req.withCredentials = true;
  req.send();

  // load 이벤트는 서버 응답이 완료된 경우에 발생한다.
  req.onreadystatechange = function () {
    try {
      // 서버 응답 완료 && 정상 응답
      if (req.readyState !== XMLHttpRequest.DONE) return;

      // status는 response 상태 코드를 반환 : 200 => 정상 응답
      if (req.status === 200) {

        // const serverInfo = document.querySelector(".test");

        // Object.keys(data).forEach(p => {
        //   const replacements = serverInfo.querySelectorAll(`[data-replace = "${p}]`);

        //   for(let r of replacements) {
        //     r.textContent = data[p];
        //   }
        // })
        console.log(req.responseText);
      } else {
        console.log(`[${req.status}] : ${req.statusText}`);
      }
    } catch (e) {
      return Error('Caught Exception: ' + e.description);

    }
  };
}

const init = () => {
  refreshServerInfo()
}

init()