//retriving stored comments
const saved = JSON.parse(localStorage.getItem("comments"));
let comments = saved ? saved : [];
const userName = "Deekshith";

const addButton = document.querySelector(".addcomment");
addButton.addEventListener("click", (event) => {
  const textarea = document.querySelector(".commentarea");

  if (textarea.value.trim() === '') {
    return;
  }

  let newcomment = {
    id: `commented by ${userName} on ${Date.now()}`,
    author: `${userName}`,
    comment: textarea.value.trim(),
    parentId: null,
    upvote: 0,
    upvotedBy: [],
  };

  comments.unshift(newcomment);
  save();
  renderComments();
  textarea.value = "";
});

function creatcomment(comment) {
  //comment card
  const div = document.createElement("div");
  div.className = "comment";
  div.id = `${comment.id}`;
  const author = document.createElement("span");
  author.textContent = `${userName}:`;
  const text = document.createElement("p");
  text.textContent = comment.comment;

  // upvote button
  const upvoteButton = document.createElement("button");
  upvoteButton.textContent = `upvote ${comment.upvote}`;
  upvoteButton.onclick = () => addupvote(comment.id);

  //reply card
  const replyButton = document.createElement("button");
  replyButton.textContent = "reply";
  replyButton.onclick = () => displayReplyContainer(comment.id);

  //reply container
  const replyContainer = document.createElement("div");
  replyContainer.id = `reply-container: ${comment.id}`;
  replyContainer.style.display = "none";

  //reply field
  const replyField = document.createElement("textarea");
  replyField.id = `reply-field: ${comment.id}`;
  replyField.placeholder = "send reply";

  // reply submit
  const sendReplyButton = document.createElement("button");
  sendReplyButton.textContent = "send";
  sendReplyButton.onclick = () => addReply(comment.id);
  replyContainer.append(replyField, sendReplyButton);

  // replies"
  const childContainer = document.createElement("div");
  childContainer.className = "replies";
  childContainer.id = `replies-${comment.id}`;
  div.append(
    author,
    text,
    upvoteButton,
    replyButton,
    replyContainer,
    childContainer,
  );

  //display all replies
  comments.forEach((coment) => {
    if (coment.parentId === comment.id) {
      childContainer.appendChild(creatcomment(coment));
    }
  });
  return div;
}

function renderComments() {
  const list = document.querySelector(".commentslist");
  list.textContent = "";

  comments.forEach((comment) => {
    if (comment.parentId === null) list.appendChild(creatcomment(comment));
    // console.log(comment);
  });
}

function displayReplyContainer(parentId) {
  const replyContainer = document.getElementById(
    `reply-container: ${parentId}`,
  );
  replyContainer.style.display =
    replyContainer.style.display === "none" ? "block" : "none";
}

function addReply(commentid) {
  const textarea = document.getElementById(`reply-field: ${commentid}`);

  if (textarea.value.trim() === '') {
    return;
  }

  let newcomment = {
    id: `reply to ${userName} on ${Date.now()}`,
    author: `${userName}`,
    comment: textarea.value.trim(),
    parentId: commentid,
    upvote: 0,
    upvotedBy: [],
  };

  comments.unshift(newcomment);
  save();
  renderComments();
  textarea.value = "";
}

//upvote function
function addupvote(commentId) {
  const comment = comments.find((comment) => comment.id === commentId);
  if (!comment) return;
  const userIndex = comment.upvotedBy.indexOf(userName);
  if (userIndex === -1) {
    comment.upvote += 1;
    comment.upvotedBy.push(userName);
  } else {
    comment.upvote = comment.upvote > 0 ? comment.upvote - 1 : 0;
    comment.upvotedBy.pop(userIndex);
  }
  save();
  renderComments();
}

//save comments
function save() {
  localStorage.setItem("comments", JSON.stringify(comments));
}
renderComments();
