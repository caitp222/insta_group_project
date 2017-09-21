class ProfileInfo extends React.Component {
  render(){

    const { photoUrl, bio } = this.props

    return(
      <div>
        <span class="profile">
          <img class="avatar" src={photoUrl} alt=""/>
            <div>
                {bio}
              </div>
        </span>
        <section id="follow-details">

          <FollowDetails followers={33} following={122} photoCount={312}/>

        </section>
      </div>
    )
  }
}
