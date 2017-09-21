class App extends React.Component {
  render() {
    const profileInfo = {
      photoUrl: "https://vignette.wikia.nocookie.net/logopedia/images/a/a4/Google-Currents-Featured-300x300.png/revision/latest?cb=20120704191200",
      bio: "Hello I am adam"
    }
    return(
      <div id="container">
        <ProfileInfo profileInfo={profileInfo} />
        <NewPhotoForm />
        <Timeline />
      </div>
    )
  }
}
