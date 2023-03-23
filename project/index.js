const container = document.getElementById("container");

const getBlogs = async () => {
  const res = await fetch("http://localhost:8000/api/blogs");
  const data = await res.json();

  if (data.length < 1) {
    container.innerHTML = "you do not have any post";
  } else {
    let template = "";
    for (let i = 0; i < data.length; i++) {
      template += `
        <div class="blogs">
            <h1>${data[i].title}</h1>
            <p>${data[i].body}</p>
            <a href="/project/details.html?id=${data[i]._id}">read more...</a>
        </div>
    `;
      container.innerHTML = template;
    }
  }
};

getBlogs();
