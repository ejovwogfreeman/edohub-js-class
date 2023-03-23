const id = window.location.href.split("=")[1];

const container = document.getElementById("container");
const updateBlog = async (blog) => {
  await fetch(`http://localhost:8000/api/blogs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
};

updateBlog();

const title = document.getElementById("title");
const body = document.getElementById("body");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  updateBlog({ title: title.value, body: body.value });
  window.location.replace("/project/index.html");
});

const getBlog = async () => {
  const res = await fetch(`http://localhost:8000/api/blogs/${id}`);
  const data = await res.json();

  title.value = data.title;
  body.value = data.body;
};

getBlog();
