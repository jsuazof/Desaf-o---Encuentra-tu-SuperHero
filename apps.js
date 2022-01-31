$(() => {
    const btnPosts = $("#btnPosts");
    const resultadoPosts = $("#resultadoPosts");
  
    btnPosts.on("click", () => {
      console.log("me diste click");
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        dataType: "JSON",
        success(data) {
          console.log(data);
          data.forEach((item) => {
            resultadoPosts.append(`
            <article class="col-12 col-md-4 mb-2">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.id} - ${item.title}</h5>
                        <p class="lead">${item.body}</p>
                    </div>
                </div>
            </article>
            `);
          });
        },
        error(err) {
          console.log(err);
        }
      });
    });
  });
  

