class ProfileInfo extends React.Component {
  render(){

    const { photoUrl, bio } = this.props.profileInfo

    return(
      <div className="profile-info">
        <span className="profile">
          <img className="avatar" src={photoUrl} alt=""/>
            <div>
              <h3>@RicoSuave</h3>
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
