let filter_col = document.querySelector("#filter-col");
      document
        .querySelector("#filter-toggle")
        .addEventListener("click", () => filter_col.classList.toggle("active"));
      document
        .querySelector("#filter-close")
        .addEventListener("click", () => filter_col.classList.toggle("active"));