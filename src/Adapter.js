class Adapter {

  static getShows (){
    return fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
  }

  static getShowEpisodes (showID){
    return fetch(`https://api.tvmaze.com/shows/${showID}/episodes`)
    .then(res => res.json())
  }

}

export default Adapter