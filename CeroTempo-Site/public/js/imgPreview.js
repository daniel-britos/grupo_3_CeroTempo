document.getElementById("image").addEventListener("change", (e) => {
  let reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
    document.getElementById("imgPreview").src = reader.result;
  };
});
