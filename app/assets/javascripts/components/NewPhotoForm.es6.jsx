class NewPhotoForm extends React.Component {
  render() {
    return(
      <section id="new-photo-form">
        <p id="new-photo-form">Post a Photo</p>
        <form>
          <input type="text" name="photo-url" placeholder="Url to photo" /><br />
          <textarea name="blurb" placeholder="What's your blurb?"></textarea><br />
          <input type="submit" value="Post" />
        </form>
      </section>
    )
  }
}
