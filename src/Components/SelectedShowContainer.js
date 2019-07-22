import React, { Component } from 'react';
import Episode from './Episode';

class SelectedShowContainer extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.selectedShow.id !== this.props.selectedShow.id) {
      this.props.selectSeason(1);
    }
  }

  mapSeasons = () => {
    if (!!this.props.allEpisodes){
      let seasons = this.props.allEpisodes.map((e)=> e.season).unique()

      return seasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  seasonEpisodes() {
    this.props.allEpisodes.filter(episode => episode.season === this.props.selectedSeason)
  }

  filteredEpisodes = () => {
    return this.props.allEpisodes.filter(episode => episode.season === this.props.selectedSeason)
  }

  mapEpisodes = () => {
     return this.filteredEpisodes().map((e)=><Episode eachEpisode={e} key={e.id}/>)
  }

  // handleSelectionChange = (e) => {
  //   this.setState({ selectedSeason: parseInt(e.target.value,10) })
  // }


  render() {
    const { selectedShow } = this.props

    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={(e) => this.props.selectSeason(parseInt(e.target.value,10))} value={this.props.selectedSeason} >
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }

}

export default SelectedShowContainer;


Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if(!arr.includes(this[i])) {
        arr.push(this[i]);
    }
  }
  return arr;
}
