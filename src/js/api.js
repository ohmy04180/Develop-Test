let testData = []
const tbody = document.querySelector('#tableBody')
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
let pageNumber = 0;
let startNumber;
let endNumber;

const showDataList = () => {
  console.log(`--- Third Function Start`)

  prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    pageNumber--;
    console.log(pageNumber)

    startNumber = 10 * (pageNumber);
    endNumber = (10 * (pageNumber)) + 9;

    if (pageNumber < 10 && pageNumber > 0) {
      console.log(`startNumber is ${startNumber}`)
      console.log(`endNumber is ${endNumber}`)

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
    } else {
      console.log("error")
      e.target.disabled = true;
      nextButton.disabled = false
    }
  })

  nextButton.addEventListener('click', (e) => {
    e.preventDefault;
    pageNumber++;
    console.log(pageNumber)

    startNumber = 10 * (pageNumber);
    endNumber = (10 * (pageNumber)) + 9;

    if (pageNumber < 10) {
      console.log(`startNumber is ${startNumber}`)
      console.log(`endNumber is ${endNumber}`)
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
    } else {
      console.log("error")
      e.target.disabled = true;
    }
  })


}

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

  showDataList()
}

const activeFetchApi = () => {
  console.log(`--- First Function Start`)
  // Default 'GET' 방식
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(`type of data -> ${typeof data}`)
      console.log(`data.length -> ${data.length}`)

      // table Default List
      for (let i = 0; i < data.length; i++) {
        testData.push(data[i])
      }

      showDefaultDataList()
    })
    .catch((error) => console.log(`error : ${error}`))
}
const init = () => {
  activeFetchApi()
}

init()