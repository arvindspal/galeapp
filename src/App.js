import React from 'react';
import './App.css';
import axios from 'axios'; 
import TeamChart from './team-chart';
import Statistics from './statistics';
import {API_URL} from './config';

class App extends React.Component {  
  state = { 
    seasons : [],
    statistics: [],
    selectedSeason: 0,
    load: false,
  }

  componentDidMount() { 
    
    axios
      .get(API_URL + '/api/get-seasons') 
      .then(res => {
          this.setState({ 
            seasons : res.data     
          }); 
      }) 
      .catch(err => {})
  }

  onSeasonChange = (e) => { 
    e.preventDefault(); 
    let selectedVal = e.target.value;
    this.setState({selectedSeason: selectedVal})
    axios
      .get(API_URL + '/api/get-statistics/' + selectedVal) 
      .then(res => {
        this.setState({ 
          statistics : res.data,
          load: true
        }); 
      }) 
      .catch(err => {})
  }; 

  render() {
    const { statistics } = this.state;
    const { load } = this.state;
      return( 
        <div style={{background: "whitesmoke", padding: "10px 50px 20px 50px"}}>
          <div className="form-group">
              <select className="form-control" onChange={this.onSeasonChange}>
                  <option value="0">Please Select a Season</option>
                  {this.state.seasons.map((season, id) =>  ( 
                    <option key={id} value={season}>{season}</option>
                  ))} 
              </select>
          </div>
          <div>
            <span>Selected IPL Season:&nbsp;<b>{this.state.selectedSeason}</b></span>
          </div>
          <div style={{display:"flex"}}> 
            { (load) &&<TeamChart statistics={statistics} />}
            { (load) &&<Statistics statistics={statistics} />}
          </div>
        </div>            
      );  
  }  
}
 
export default App;
