class NewPhotoForm extends React.Component {
  render() {
    return(
      <section id="new-photo-form">
        <p id="new-photo-form">Post a Photo</p>
        <form method= "post" action="/photos">
          <input type="file" name="photo[photo]" /><br />
          <input type="hidden" name="photo[user_id]" value="1" /><br />
          <textarea name="photo[blurb]" value="blup"></textarea><br />
          <input type="submit" value="Post" />
        </form>
      </section>
    )
  }
}
