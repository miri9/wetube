import axios from "axios";
const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

const increaseNumber = () => {
  console.log(commentNumber);
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = comment => {
  // it's fake comment
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  // delete btn
  const div = document.createElement("div");
  const x_span = document.createElement("span");
  const x_btn = document.createElement("button");
  div.className = "delete__comment";
  //div.id = "";
  x_btn.innerHTML = "x";
  x_span.appendChild(x_btn);
  div.appendChild(x_span);
  increaseNumber();
};

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  console.log(videoId);
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

if (addCommentForm) {
  init();
}
