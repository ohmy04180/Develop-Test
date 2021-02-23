let testData = []
const tbody = document.querySelector('#tableBody')
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
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

// 로딩했을 때 Default 데이터가 보여지도록 설정
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

  showDataList();
}

async function activeApi() {
  try {
    // Data를 가져올 때 까지 기다리는 동안 다른 함수를 실행한다.
    const response = await userInfo()

    // testData에 해당 data를 배열로 담아준다.
    for (let i = 0; i < response.length; i++) {
      testData.push(response[i])
    }

    showDefaultDataList()
    // 예외(에러)처리
  } catch (err) {
    console.log(err)
  }
}

// Promise 형태로 데이터를 가져온다.
const userInfo = () => {
return fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    return res.json()
  })
}

const init = () => {
  activeApi()
}

init()