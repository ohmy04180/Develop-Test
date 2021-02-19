
// https://medium.com/@kiwanjung/%EB%B2%88%EC%97%AD-async-await-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EC%A0%84%EC%97%90-promise%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-955dbac2c4a4
// https://www.daleseo.com/js-async-async-await/

function userInfo() {
  const url = 'https://koreanjson.com/users/1';
  return fetch(url)
    .then((res) =>{
    return res.json();
  })
}

async function sumOfFetch() {
  try {
    const user = await userInfo();
    if(user.id === 1) {
    const todo = await userTodo();
    console.log(todo)
    return todo;
   }
  } catch(err) {
	console.error('err명:', err);
  }
 }
 
const init = () => {

}

init();