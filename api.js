let testData;
const tbody = document.querySelector("#tableBody");

const showPaginationData = () => {
  console.log(`--- Second Function Start`);

  const paginationButtonId = []

  // id 변수에 담기
  for (let i = 1; i <= 10; i++) {
    paginationButtonId.push(`#paginationButton${i}`);
  }

  document.querySelector(paginationButtonId[0]).addEventListener("click", (e) => {
    e.preventDefault;

    tbody.innerHTML = '';

    for (let e = 0; e < 10; e++) {
      console.log(e + "~" + ((10 * e) - 1));

      const tableList = `
        <tr id=tableList${e + 1}>
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

  document.querySelector(paginationButtonId[1]).addEventListener("click", (e) => {
    e.preventDefault;

    tbody.innerHTML = '';

    for (let e = 10; e < 20; e++) {
      console.log(e + "~" + ((10 * e) - 1));

      const tableList = `
        <tr id=tableList${e + 1}>
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

  document.querySelector(paginationButtonId[2]).addEventListener("click", (e) => {
    e.preventDefault;

    tbody.innerHTML = '';

    for (let e = 20; e < 30; e++) {
      console.log(e + "~" + ((10 * e) - 1));

      const tableList = `
        <tr id=tableList${e + 1}>
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

const showDefaultData = () => {
  console.log(`--- Second Function Start`);
  console.log(typeof testData, testData);

  for (let e = 0; e < 10; e++) {
    console.log(e + "~" + ((10 * e) - 1));

    const tableList = `
      <tr id=tableList${e + 1}>
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

};

const bringJsonData = () => {
  console.log(`--- First Function Start`);
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

        // table Default List
        showDefaultData();

        // pagination quf Click Data List
        showPaginationData()
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