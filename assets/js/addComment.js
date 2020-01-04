import axios from "axios";
const addCommentForm = document.getElementById("jsAddComment");

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  console.log(response);
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
