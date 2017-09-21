class Photo extends React.Component {
  render(){
    let photo = {
      url: "https://static.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg",
      user_id: 1,
      comment: "Chuck Norris inherits from two classes #bro"
    }
    return(
      <div>
        <img src={photo.url} />
        <p>{photo.comment}</p>
      </div>
    )
  }
}
