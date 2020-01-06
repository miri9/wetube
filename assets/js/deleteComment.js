import axios from "axios";
const deleteCommentBtns = document.getElementsByClassName("jsDeleteComment");

const BtnsAddEvent = () => {
  for (var i = 0; i < deleteCommentBtns.length; i++) {
    deleteCommentBtns[i].addEventListener("click", handleDelete);
  }
};

const handleDelete = event => {
  const commentId = event.target.id;
  console.log(commentId);
  const sendDeleteComment = async commentId => {
    await axios({
      url: `/api/${commentId}/deleteComment`,
      method: "POST",
      data: {
        commentId
      }
    });
  };
  sendDeleteComment(commentId);
};

function init() {
  BtnsAddEvent();
}

if (deleteCommentBtns) {
  init();
}
