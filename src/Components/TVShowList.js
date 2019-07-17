import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  displayShows = () => this.props.searchTerm ? this.props.shows.filter(show => show.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())) : this.props.shows

  mapAllShows = () => {
  return this.displayShows().map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
