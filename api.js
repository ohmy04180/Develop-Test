let testData = []
let paginationArr = []
const tbody = document.querySelector('#tableBody')
const pagination = document.querySelector('#pagination')

const showDataList = () => {
  console.log(`--- Fourth Function Start`)

  paginationArr.forEach((element) => {
    let paginationButton = document.querySelector(`#${element}`)

    paginationButton.addEventListener('click', (event) => {
      event.preventDefault()
      let paginationButtonId = Number(element.slice(12))

      if (paginationButtonId === 1) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 0; e < 10; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      } else if (paginationButtonId === 2) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 10; e < 20; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      } else if (paginationButtonId === 3) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 20; e < 30; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      } else if (paginationButtonId === 4) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 30; e < 40; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      } else if (paginationButtonId === 5) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 40; e < 50; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      } else if (paginationButtonId === 6) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 50; e < 60; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      } else if (paginationButtonId === 7) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 60; e < 70; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      } else if (paginationButtonId === 8) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 70; e < 80; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      } else if (paginationButtonId === 9) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 80; e < 90; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      } else if (paginationButtonId === 10) {
        console.log(paginationButtonId)
        tbody.innerHTML = ''
        for (let e = 90; e < 100; e++) {
          const tableList = `
        <tr id=tableList${e}>
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
      }
    })
  })
}

const showPaginationList = () => {
  console.log(`--- Third Function Start`)
  // 총 데이터 리스트 갯수
  let testDataAmount = testData.length

  // 필요한 페이지 네비게이션 갯수
  let paginationAmount = Math.ceil(testData.length / 10)

  if (testDataAmount > 1) {
    for (let num = 0; num < paginationAmount; num++) {
      paginationArr.push(`paginatonBtn${num + 1}`)

      const paginationList = `
      <li class="pagination__item">
        <button type="button" id="paginatonBtn${num + 1}" class="pagination__button"> ${num + 1} </button>
      </li>`

      pagination.innerHTML += paginationList
    }
    showDataList()
  } else {
    console.log(`DataList가 없음`)
  }
}

const showDefaultData = () => {
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

  showPaginationList()
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
        showDefaultData();

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