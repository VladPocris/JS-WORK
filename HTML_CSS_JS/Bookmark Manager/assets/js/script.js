const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const closeFormButton = document.getElementById("close-form-button");
const closeListButton = document.getElementById("close-list-button");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const nameAddBookmarkFormField = document.getElementById("name");
const urlAddBookmarkFormField = document.getElementById("url");
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const currentBookMark = {
  name: null,
  category: null,
  url: null,
}

const getBookmarks = () => {
  try {
    const data = JSON.parse(localStorage.getItem("bookmarks"));
    if (!Array.isArray(data)) return [];
    return data.every(b => b.name && b.category && b.url) ? data : [];
  } catch {
    return [];
  }
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
  currentBookMark.category = categoryDropdown.value;

  categoryName.innerText = currentBookMark.category[0].toUpperCase() + currentBookMark.category.slice(1);
}

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

const saveNewBookmark = () => {
  const bookmarks = getBookmarks();

  const newBookmark = {
    name: nameAddBookmarkFormField.value,
    url: urlAddBookmarkFormField.value,
    category: currentBookMark.category
  };

  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameAddBookmarkFormField.value = "";
  urlAddBookmarkFormField.value = "";
}

const renderUI = (currentCategoryBookmarks) => {
  let str = "";

  currentCategoryBookmarks.forEach((bookmark) => {
    str += `
<input type="radio" name="bookmarks" id="${bookmark.name}" value="${bookmark.name}">
<label for="${bookmark.name}">
  <a href="${bookmark.url}">${bookmark.name}</a>
</label>
`;
  });

  categoryList.innerHTML = str.trim()
    ? str
    : `<p>No Bookmarks Found</p>`;
};

const bookMarks = getBookmarks();

addBookmarkFormBtn.addEventListener("click", () => {
  saveNewBookmark();
  displayOrCloseForm();
});
addBookmarkBtn.addEventListener("click",displayOrCloseForm);
viewCategoryBtn.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  currentBookMark.category = categoryDropdown.value;

  const currentCategoryBookmarks = getBookmarks().filter(
  b => b.category === currentBookMark.category);

  renderUI(currentCategoryBookmarks);

  displayOrHideCategory();
})
closeListButton.addEventListener("click", () => {
  categoryList.innerHTML = "";
  displayOrHideCategory();
});
closeFormButton.addEventListener("click", displayOrCloseForm)
deleteBookmarkBtn.addEventListener("click", () => {
  const bookmarks = getBookmarks();

  const selectedRadio = document.querySelector('input[name="bookmarks"]:checked');

  if (!selectedRadio) return;

  const selectedName = selectedRadio.value;

  const index = bookmarks.findIndex(b =>
    b.name === selectedName &&
    b.category === currentBookMark.category
  );

  if (index > -1) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    const filtered = bookmarks.filter(
      b => b.category === currentBookMark.category
    );

    renderUI(filtered);
  }
});

categoryList.addEventListener("change", (e) => {
  if (e.target.name === "bookmarks") {
    const link = e.target.nextElementSibling.querySelector("a");
    currentBookMark.name = e.target.value;
    currentBookMark.url = link.getAttribute('href');
    currentBookMark.category = categoryDropdown.value;
  }
});
