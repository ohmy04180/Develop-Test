let testData = []
const tbody = document.querySelector('#tableBody')

const showDefaultData = () => {
  console.log(`--- Second Function Start`)

  for (let e = 0; e < 10; e++) {
    // console.log(e + '~' + (10 * e - 1))
    console.log(testData[e].userId)
    console.log(testData[e].id)
    console.log(testData[e].title)
    console.log(testData[e].body)

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
}

const fetchApi = () => {
  // Default 'GET' 방식
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(`type of data -> ${typeof data}`)
      console.log(`data.length -> ${data.length}`)
      console.log(`type of testData -> ${typeof testData}`)

      // table Default List
      for (let i = 0; i < data.length; i++) {
        testData.push(data[i])
      }

      showDefaultData()
    })
    .catch((error) => console.log(`error : ${error}`))
}
const init = () => {
  fetchApi()
}

init()
