const container = document.getElementById("container");
const postBlog = async (blog) => {
  await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
};

postBlog();

const title = document.getElementById("title");
const body = document.getElementById("body");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  postBlog({ title: title.value, body: body.value });
  window.location.replace("/project/index.html");
});
