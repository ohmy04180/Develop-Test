let testData = []
const tbody = document.querySelector('#tableBody')
const pagination = document.querySelector('#pagination')
let pageNumber = 0;
let startNumber;
let endNumber;

const showDataList = () => {
  console.log(`--- Third Function Start`)
  console.log(`pageNumber!!!! is ${pageNumber}`)

  prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    pageNumber--;

    startNumber = 10 * (pageNumber);
    endNumber = (10 * (pageNumber)) + 9;

    if (pageNumber === -1) {
      pageNumber = 0;
      e.target.disabled = true;
      console.log("error")
    } else {
      console.log(`pageNumber is ${pageNumber}`)
      console.log(`startNumber is ${startNumber}`)
      console.log(`endNumber is ${endNumber}`)

      nextButton.disabled = false;
      tbody.innerHTML = '';
      for (let num = startNumber; num <= endNumber; num++) {
        const tableList = `
                <tr id=tableList${num + 1}>
                  <td id="dataUserId">
                    <span class="table__text">${testData[num].userId}</span>
                  </td>
                  <td id="dataId">
                    <span class="table__text">${testData[num].id}</span>
                  </td>
                  <td id="dataTitle">
                    <span class="table__text">${testData[num].title}</span>
                  </td>
                  <td id="dataText">
                    <span class="table__text">${testData[num].body}</span>
                  </td>
                </tr>`
        tbody.innerHTML += tableList
      }
    }
  })

  nextButton.addEventListener('click', (e) => {
    e.preventDefault;
    pageNumber++;
    startNumber = 10 * (pageNumber);
    endNumber = (10 * (pageNumber)) + 9;


    if (pageNumber === (testData.length / 10)) {
      pageNumber = 9;
      e.target.disabled = true;
      console.log("error")
    } else {
      console.log(`pageNumber is ${pageNumber}`)
      console.log(`startNumber is ${startNumber}`)
      console.log(`endNumber is ${endNumber}`)

      prevButton.disabled = false;
      tbody.innerHTML = '';

      for (let num = startNumber; num <= endNumber; num++) {
        const tableList = `
            <tr id=tableList${num + 1}>
              <td id="dataUserId">
                <span class="table__text">${testData[num].userId}</span>
              </td>
              <td id="dataId">
                <span class="table__text">${testData[num].id}</span>
              </td>
              <td id="dataTitle">
                <span class="table__text">${testData[num].title}</span>
              </td>
              <td id="dataText">
                <span class="table__text">${testData[num].body}</span>
              </td>
            </tr>`
        tbody.innerHTML += tableList
      }
    }
  })
}

// 첫 페이지 로딩시 1 ~ 10 리스트 보여주도록 설정
const showDefaultDataList = () => {
  console.log(`--- Second Function Start`)

  for (let e = 0; e < 10; e++) {
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
      </tr>`

    tbody.innerHTML += tableList
  }

  showDataList()
}

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
        showDefaultDataList();

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