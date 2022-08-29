const textarea = document.querySelector("textarea"),
  filename = document.querySelector(".file-name input"),
  selectmenu = document.querySelector(".save-as select"),
  saveBtn = document.querySelector(".save-btn");

selectmenu.addEventListener("change", () => {
  let selectOption = selectmenu.options[selectmenu.selectedIndex].text;
  saveBtn.innerText = `Save as ${selectOption.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectmenu.value });
  const fileurl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename.value;
  link.href = fileurl;
  link.click();
});
