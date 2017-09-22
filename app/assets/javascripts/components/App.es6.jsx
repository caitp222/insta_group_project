class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      newPhoto: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { newPhoto } = this.state;
    reader = new FileReader();
    file = $('input[type=file]')[0].files[0]
    reader.readAsDataURL(file)
    reader.onload = function(event) {
      $('img')[0].src = reader.result
      $.ajax({
        url: '/photos',
        method: 'post',
        data: {base64: reader.result}
    }).done((response) => {
      console.log(response)
      this.setState({photos: [response].concat(this.state.photos)})
      this.setState({newPhoto: ""})
      })
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
    return(
      <div id="container">
        <ProfileInfo profileInfo={profileInfo} />
        <NewPhotoForm newPhoto={this.state.newPhoto} handleSubmit={this.handleSubmit} />
        <Timeline photos={this.state.photos} />
      </div>
    )
  }
}
