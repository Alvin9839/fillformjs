document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const response = await fetch("/api/HttpTrigger1", {
    method: "POST",
    body: formData,
  });
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "filled_form.pdf";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
});
