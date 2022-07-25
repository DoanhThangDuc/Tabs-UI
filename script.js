const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const tabPanes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.width = tabActive.offsetWidth + "px";
line.style.left = tabActive.offsetLeft + "px";

tabs.forEach(function (tab, index) {
  const tabPane = tabPanes[index];
  tab.onclick = function () {
    $(".tab-pane.active").classList.remove("active");
    $(".tab-item.active").classList.remove("active");

    line.style.width = this.offsetWidth + "px";
    line.style.left = this.offsetLeft + "px";
    
    this.classList.add("active");
    tabPane.classList.add("active");
  };
});
