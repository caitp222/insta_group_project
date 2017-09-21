class Timeline extends React.Component {
  render() {
    const photos = [
      {
      photo_url: "https://static.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg",
      user_id: 1,
      blurb: "Chuck Norris inherits from two classes #bro"
      },
      {
      photo_url: "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
      user_id: 2,
      blurb: "Superman wears Chuck Norris pyjamas!"
      }
    ]
    return(
      <div>
        {photos.map((photo, i) =>
          <Photo photo={photo} key={i} />
        )}
      </div>
    )
  }
}
