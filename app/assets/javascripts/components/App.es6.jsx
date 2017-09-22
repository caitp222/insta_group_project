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
    let that = this;
    let blurb = $('textarea').val()
    const { newPhoto } = this.state;
    reader = new FileReader();
    file = $('input[type=file]')[0].files[0]
    reader.readAsDataURL(file)
    reader.onload = function(event) {
      $.ajax({
        url: '/photos',
        method: 'post',
        data: {blurb: blurb, base64: reader.result}
    }).done((response) => {
      console.log(response)
      console.log(that)
      that.setState({photos: [response].concat(that.state.photos)})
      that.setState({newPhoto: ""})
      console.log(that.state.photos)
      $('textarea').val("")
      file.empty();
    })
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/photos',
      method: 'get'
    }).done((response) => {
      this.setState({photos: response});
      // console.log(response);
    });
  }

  render() {
    const profileInfo = {
      photoUrl: "https://avatars1.githubusercontent.com/u/25166893?v=4&s=400",
      bio: "I'm Rico and I am Suave.. :) #Bro"
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
