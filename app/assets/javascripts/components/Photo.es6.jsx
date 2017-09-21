class Photo extends React.Component {
  render(){
    const { photo_url, blurb } = this.props.photo
    return(
      <div>
        <img src={photo_url} />
        <p>{blurb}</p>
      </div>
    )
  }
}
