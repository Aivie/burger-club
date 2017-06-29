$(document).ready(function() {
    $(".social_img").hover(function() {
        $(this).animate({
            paddingTop: "15px"
        }, 100);
    }, function() {
        $(this).animate({
            paddingTop: "10px"
        }, 100)
    });

    $('#myModal').on('show.bs.modal', function(event) {
        var modal = $(this)
        modal.find('#content').html("Hello " + $('#name').val() + ", thank you for signing up! We will send an email to " + $('#email').val() + " shortly.");

    })
})