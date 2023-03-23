const id = window.location.href.split("=")[1];

const container = document.getElementById("container");

const getBlog = async () => {
  const res = await fetch(`http://localhost:8000/api/blogs/${id}`);
  const data = await res.json();

  let template = "";
  template += `
          <div class="blogs">
              <h1>${data.title}</h1>
              <p>${data.body}</p>
              <a href="/project/update.html?id=${data._id}">edit</a>
          </div>
      `;
  container.innerHTML = template;
};

getBlog();

const deleteBlog = async () => {
  await fetch(`http://localhost:8000/api/blogs/${id}`, {
    method: "DELETE",
  });
};

document.getElementById("delt").addEventListener("click", () => {
  deleteBlog();
  window.location.replace("/project/index.html");
});
