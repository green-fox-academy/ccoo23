const submit = document.querySelector('button');
const main = document.querySelector('main');
// const divs = [];
submit.addEventListener('click', () => {
});
function setUp(id) {
  console.log('upup');
  const url = `http://52.57.196.190:3002/posts/${id + 1}/upvote`;                 //url为服务器接口URL     
  const uploadReq = new Request(url, {                           //eslint-disable-line  
    method: 'PUT',
  });
  fetch(uploadReq).then(x => x.text()).then(x => console.log(x));     //eslint-disable-line                       
}                                                                                  //此处假定响应信息是text
function setDown(id) {
  console.log('downdown');
  const url = `http://52.57.196.190:3002/posts/${id + 1}/downvote`;
  const uploadReq = new Request(url, {                                 //eslint-disable-line                        
    method: 'PUT',                                                                   //url为服务器接口URL
  });
  fetch(uploadReq).then(x => x.text()).then(x => console.log(x));        //eslint-disable-line    
}                                                                                    //此处假定响应信息是text
function createPosts(array) {
  for (let i = 0; i < array.length; i++) {
    let postDiv = document.createElement('div');
    postDiv.className = 'post';
    main.appendChild(postDiv);
    let voteDiv = document.createElement('div');
    voteDiv.className = 'vote';
    let contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    postDiv.appendChild(voteDiv);
    postDiv.appendChild(contentDiv);
    let upvoteDiv = document.createElement('div');    //upvote
    upvoteDiv.className = 'upvote';
    let likesDiv = document.createElement('div');
    likesDiv.className = 'likes';
    likesDiv.innerText = array[i].score;
    let downvoteDiv = document.createElement('div');  //downvote
    downvoteDiv.className = 'downvote';
    voteDiv.appendChild(upvoteDiv);
    voteDiv.appendChild(likesDiv);
    voteDiv.appendChild(downvoteDiv);
    let titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    let detailDiv = document.createElement('div');
    detailDiv.className = 'detail';
    detailDiv.innerText = array[i].timestamp;
    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(detailDiv);
    let titleA = document.createElement('a');
    titleA.innerText = array[i].title;
    titleA.href = array[i].url;
    titleDiv.appendChild(titleA);
    upvoteDiv.addEventListener('click', () => {
      setUp(i);
      upvoteDiv.style.background = 'url(upvoted.png) no-repeat center center';
      downvoteDiv.style.background = 'url(downvote.png) no-repeat center center';
    });
    downvoteDiv.addEventListener('click', () => {
      setDown(i);
      upvoteDiv.style.background = 'url(upvote.png) no-repeat center center';
      downvoteDiv.style.background = 'url(downvoted.png) no-repeat center center';
    });
  }
}
window.onload = () => {
  fetch('http://52.57.196.190:3002/posts')
    .then(function (response) {
      return response.json();
    }, function (error) {
      console.log(error);
    })
    .then(function (myJson) {
      console.log(myJson.posts);
      createPosts(myJson.posts);
    });

};
