class Timeline extends React.Component {
  render() {
    const photos = this.props.photos
    return(
      <div>
        {photos.map((photo, i) =>
          <Photo photo={photo} key={i} />
        )}
      </div>
    )
  }
}
