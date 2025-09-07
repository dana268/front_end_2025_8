// البحث عن الكتب
var searchInput = document.getElementById("search");
if (searchInput) {
  var books = document.querySelectorAll(".book");
  searchInput.addEventListener("keyup", function() {
    var term = searchInput.value.toLowerCase();
    books.forEach(function(book){
      var title = book.querySelector(".card-title").textContent.toLowerCase();
      book.style.display = title.includes(term) ? "block" : "none";
    });
  });
}

// التفاعل مع الفورم في add-book.html
var form = document.getElementById("bookForm");
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    var name = document.getElementById("bookName").value;
    var author = document.getElementById("bookAuthor").value;
    if(name=="" || author==""){
      alert("يرجى تعبئة اسم الكتاب والمؤلف");
    } else {
      alert("تم إضافة الكتاب: " + name);
      form.reset();
    }
  });
}
