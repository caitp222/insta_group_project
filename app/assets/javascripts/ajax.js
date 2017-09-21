$(document).ready(function() {
  $('#new_photo').submit(function(e){
    e.preventDefault();
    $form = $(this);
    $.ajax({
      url: '/photos',
      method: 'POST',
      data: $form.serialize()
    }).done(function(response) {
    console.log(response);
    })
  })
})