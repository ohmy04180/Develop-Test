let testData = []
let paginationArr = []
const tbody = document.querySelector('#tableBody')
const pagination = document.querySelector('.pagination')

// 각각의 PaginationButton 클릭시, 페이지 보이도록 구현
const showDataList = () => {
  console.log(`--- Fourth Function Start`)

  // 각각의 버튼 할 일을 실행
  paginationArr.forEach((element) => {
    let paginationButton = document.querySelector(`#${element}`)

    paginationButton.addEventListener('click', (event) => {
      event.preventDefault()

      // paginatonBtn의 넘버 값을 새로운 변수로 담아준다.
      let paginationButtonId = Number(element.slice(12))
      console.log(paginationButtonId);

      let listId = paginationButtonId - 1;
      let startIndex = 10 * listId;
      let endIndex = (10 * listId) + 9;

      tbody.innerHTML = '';

      for (let e = startIndex; e <= endIndex; e++) {
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
    })
  })
}

// DataList에 맞게 Pagination 보여주기
const setPaginationButton = () => {
  console.log(`--- Third Function Start`)
  // 총 데이터 리스트 갯수
  let testDataAmount = testData.length

  // 필요한 페이지 네비게이션 버튼 갯수
  // 예) 반올림(100 / 10) = 10 개 까지 버튼이 필요함
  let paginationAmount = Math.floor((testDataAmount / 10))

  if (testDataAmount > 1) {
    for (let num = 1; num <= paginationAmount; num++) {
      paginationArr.push(`paginatonBtn${num}`)

      const paginationList = `
      <li class="pagination__item">
        <button type="button" id="${paginationArr[num-1]}" class="pagination__button"> ${num} </button>
      </li>`

      pagination.innerHTML += paginationList
    }
    showDataList()

  } else {
    console.log(`DataList가 없음`)
  }
}


// 로딩 시 1 페이지 리스트 보여지도록 디폴트 함수 선언 
const showDefaultDataList = () => {
  console.log(`--- Second Function Start`)

  for (let num = 0; num < 10; num++) {
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

  setPaginationButton()
}

const activeFetchApi = () => {
  console.log(`--- First Function Start`)
  // Default 'GET' 방식으로 옵션 설정 안함
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(`data.length -> ${data.length}`)

      // testData에 배열 오브젝트 형태로 담아준다.
      for (let i = 0; i < data.length; i++) {
        testData.push(data[i])
      }

      showDefaultDataList()
    })
    // 예외(에러) 처리
    .catch((error) => console.log(`error : ${error}`))
}

const init = () => {
  activeFetchApi()
}

init()