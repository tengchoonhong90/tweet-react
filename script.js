class User extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    var user = this.props.user;
    var datetime = this.props.datetime;
  
    return (
          <p>{user.name} @{user.screen_name} {datetime}</p>
    )
  }
}

class Text extends React.Component {
  constructor() {
    super();
  }

  render() {
    var text = this.props.text;

    return (
      <p>{text}</p>
    )
  }
}

class Picture extends React.Component {
  constructor() {
    super();
  }
  render() {
    var profile = this.props.picture.profile_image_url;
    return(
      <img src={profile}/>
    )
  }
}

class SocialButton extends React.Component {
  constructor() {
    super();
  }
  render() {
    var retweet = this.props.retweet;
    var favorite = this.props.favorite;
    return(
      <p>retweet: {retweet} favorite: {favorite}</p>
    )
  }
}


class Twitter extends React.Component {
  constructor() {
    super();
  }
  render() {
    var tweets = this.props.tweets.map(kanye => {
      return (
        <div key={kanye.id}>
          <Picture picture={kanye.user}/>
          <User user={kanye.user} datetime={kanye.created_at} />
          <Text text={kanye.text}/>
          <SocialButton retweet={kanye.retweet_count} favorite={kanye.favorite_count}/>
        </div>
      )
    })
    
    return(
      <div>
        {tweets}
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Twitter tweets={tweets}/>
  </div>,
  document.getElementById('root')
);