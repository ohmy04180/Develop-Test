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

  showDataList();
}

async function activeFetchApi() {
  try {
    const response = await userInfo()
    console.log(response[0])
    console.log(typeof response)
    
    // table Default List
    for (let i = 0; i < response.length; i++) {
      testData.push(response[i])
    }

    showDefaultDataList()
  } catch (err) {
    console.log(err)
  }
}

const userInfo = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  return fetch(url).then((res) => {
    return res.json()
  })
}

const init = () => {
  activeFetchApi()
}

init()
