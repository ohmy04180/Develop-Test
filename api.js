const fetchApi = () => {

  // fetch('https://www.icheon.go.kr/portal/rssBbsNtt.do?bbsNo=13&type=p')
  // Default 'GET' 방식
  // fetch("https://jsonplaceholder.typicode.com/posts/1")
  fetch('https://www.icheon.go.kr/portal/rssBbsNtt.do?bbsNo=13&type=p')
    .then((response) => response)
    .then((data) => console.log(data))
    .catch((error) =>
      console.log(`error : ${error}`)
    )


}
const init = () => {
  fetchApi()
}

init()