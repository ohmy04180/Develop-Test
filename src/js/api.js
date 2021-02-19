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


    if (pageNumber === 10) {
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