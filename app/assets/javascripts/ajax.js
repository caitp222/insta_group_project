// $(document).ready(function() {
//   $('#new_photo').submit(function(e){
//     e.preventDefault();
//     debugger
//     $form = $(this);
//     $.ajax({
//       url: '/photos',
//       method: 'POST',
//       data: $form.serialize()
//     }).done(function(response) {
//     console.log(response);
//     })
//   })
// })

$(document).ready(function() {
  $('#new_photo').submit(function(e) {
    e.preventDefault();
    reader = new FileReader();
    file = $('input[type=file]')[0].files[0]
    reader.readAsDataURL(file)
    reader.onload = function(event) {
      $('img')[0].src = reader.result
      $.ajax({
        url: '/photos',
        method: 'post',
        data: {base64: reader.result}
    }).done(function(response) {
      console.log(response)
    })
  }
})
})
