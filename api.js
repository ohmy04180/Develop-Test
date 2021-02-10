let testData;

const showPaginationNumber = () => {
  console.log(`--- Third Function Start`);
  const paginationButton = document.querySelector("#paginationButton1");

  for (let i = 0; i < 10; i++) {
    console.log(paginationButton);
  }
  paginationButton.addEventListener("click", (e) => {
    e.preventDefault;

    console.log(paginationButton)

    console.log(`${paginationButton1} is Cliked`);
    for (let e = 0; e < 10; e++) {
      console.log(e)
      console.log(e + "~" + ((10 * e) - 1));

      const tbody = document.querySelector("#tableBody");
      const tableList = `
        <tr id=tableList${e+1}>
          <td id="dataUserId">
            <span class="table__text">${testData[e].userId}</span>
          </td>
          <td id="dataId">
            <span class="table__text">${testData[e].id}</span>
          </td>
          <td id="dataTitle">
            <span class="table__text">${testData[e].title}</span>
          </td>
          <td id="dataText">
            <span class="table__text">${testData[e].body}</span>
          </td>
        </tr>`;

      tbody.innerHTML += tableList;
    }
  })
}

const showTestData = () => {
  console.log(`--- Second Function Start`);
  console.log(typeof testData, testData);


  for (let i = 0; i <= testData.length; i++) {
    const tbody = document.querySelector("#tableBody");
    const tableList = `
    <tr id=tableList${i+1}>
      <td id="dataUserId">
        <span class="table__text">${testData[i].userId}</span>
      </td>
      <td id="dataId">
        <span class="table__text">${testData[i].id}</span>
      </td>
      <td id="dataTitle">
        <span class="table__text">${testData[i].title}</span>
      </td>
      <td id="dataText">
        <span class="table__text">${testData[i].body}</span>
      </td>
    </tr>`;

    tbody.innerHTML += tableList;

  }

};

const bringJsonData = () => {
  const xhr = new XMLHttpRequest();

  // load 이벤트는 서버 응답이 완료된 경우에 발생한다.
  xhr.onreadystatechange = () => {
    try {
      // 서버 응답 완료 && 정상 응답
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      // status는 response 상태 코드를 반환 : 200 => 정상 응답
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(`xhr.status is ${xhr.status}`);

        // 데이터를 새로 담아준다.
        testData = JSON.parse(xhr.responseText);

        // testData를 HTML Element로 담아주는 함수 실행
        // showTestData();

        showPaginationNumber()
      } else {
        console.log(`[${xhr.status}] : ${xhr.statusText}`);
      }
    } catch (e) {
      return Error("Caught Exception: " + e.description);
    }
  };

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.send();
};

const init = () => {
  bringJsonData();
};

init();