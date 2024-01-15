  document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add("fixed-header");
      } else {
        navbar.classList.remove("fixed-header");
      }
    });
      $(document).ready(function () {
    var cardsPerPage = 3;

    var totalPages = Math.ceil($('.card').length / cardsPerPage);

    for (var i = 1; i <= totalPages; i++) {
      $('#pagination').append('<li class="page-item"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>');
    }

    showPage(1);

    $('#pagination').on('click', 'a.page-link', function (e) {
      e.preventDefault();
      var page = $(this).data('page');
      showPage(page);
    });

    function showPage(page) {
      $('.card').hide();

      var startIndex = (page - 1) * cardsPerPage;
      var endIndex = startIndex + cardsPerPage;

      $('.card').slice(startIndex, endIndex).show();

      $('#pagination li').removeClass('active');
      $('#pagination li:nth-child(' + page + ')').addClass('active');
    }
  });
  });