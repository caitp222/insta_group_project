class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/photos',
      method: 'get'
    }).done((response) => {
      this.setState({photos: response});
      console.log(response);
    });
  }

  render() {
    const profileInfo = {
      photoUrl: "https://vignette.wikia.nocookie.net/logopedia/images/a/a4/Google-Currents-Featured-300x300.png/revision/latest?cb=20120704191200",
      bio: "Hello I am adam"
    }
    // const photos = [
    //   {
    //   photo_url: "https://static.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg",
    //   user_id: 1,
    //   blurb: "Chuck Norris inherits from two classes #bro"
    //   },
    //   {
    //   photo_url: "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
    //   user_id: 2,
    //   blurb: "Superman wears Chuck Norris pyjamas!"
    //   }
    // ]
    return(
      <div id="container">
        <ProfileInfo profileInfo={profileInfo} />
        <NewPhotoForm />
        <Timeline photos={this.state.photos} />
      </div>
    )
  }
}
