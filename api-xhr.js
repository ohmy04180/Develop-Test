const refreshServerInfo = () => {
  const xhr = new XMLHttpRequest();

  // load 이벤트는 서버 응답이 완료된 경우에 발생한다.
  xhr.onreadystatechange = () => {

    try {
      // 서버 응답 완료 && 정상 응답
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      // status는 response 상태 코드를 반환 : 200 => 정상 응답
      if (xhr.readyState === 4 && xhr.status === 200) {

        console.log(`xhr.status is: ${xhr.status}`);

        const parseData = JSON.parse(xhr.responseText);
        console.log(typeof parseData, parseData);

        // document.getElementById("demo").innerHTML = parseData.totalCount;
    
      } else {
        console.log(`[${xhr.status}] : ${xhr.statusText}`);
      }
    } catch (e) {
      return Error('Caught Exception: ' + e.description);

    }
  };

  xhr.open('GET', 'https://www.icheon.go.kr/portal/rssBbsNtt.do?bbsNo=13&type=p', true)
  xhr.send();
}

const init = () => {
  refreshServerInfo()
}

init()