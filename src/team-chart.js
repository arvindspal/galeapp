import React from 'react';
import './App.css';
import {Doughnut} from 'react-chartjs-2';

class TeamChart extends React.Component {
    componentDidMount() {}
    constructor(props) {
        super(props);
        this.state = {};
    }  
    render() {
        const colors = ['#BADE96', '#82BEF3', '#7272FF', '#F8171B']
        const config = {
            labels: this.props.statistics.top_teams.labels,
            datasets: [
              {
                label: 'Wins',
                backgroundColor: colors,
                data: this.props.statistics.top_teams.defaults
              }
            ]
          }        
        return( 
            <div style={{width: "50%"}}>
                <div>
                    <Doughnut
                        data={config}
                        options={{
                            title:{
                                display:true,
                                text:'Top 4 teams in terms of wins',
                                fontSize:15
                            },
                            legend:{
                                display:true,
                                position:'top'
                            }
                        }}
                    />
                </div>
            </div>
        );  
  }  
}  

export default TeamChart;
