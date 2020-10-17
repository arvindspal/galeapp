import React from 'react';
import './App.css';

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}
    render() {
        return( 
            <div style={{width: "50%"}}>
                <div>
                    <span><b>Team won the most number of tosses in the season:</b></span>
                    <div>
                        {this.props.statistics.tosses.map((toss, id) =>  ( 
                            <div key={id}>
                                <span>
                                    {toss.toss_winner}:
                                    {toss.toss_wins_count}
                                </span>
                            </div>
                        ))} 
                    </div>
                </div>

                <div>
                    <span><b>Player won the maximum number of Player of the Match awards in the whole season::</b></span>
                    <div>
                        {this.props.statistics.awards.map((award, id) =>  ( 
                            <div key={id}>
                                <span>
                                    {award.player_of_match}:
                                    {award.award_count}
                                </span>
                            </div>
                        ))} 
                    </div>
                </div>

                <div>
                    <span><b>Team won max matches in the whole season:</b></span>
                    <div>
                        {this.props.statistics.wins.map((win, id) =>  ( 
                            <div key={id}>
                                <span>
                                    {win.winner}:
                                    {win.wins_count}
                                </span>
                            </div>
                        ))} 
                    </div>
                </div>

                <div>
                    <span><b>location which have the most number of wins for the top team ({this.props.statistics.venue.winner}):</b></span>
                    <div>
                        <span>
                            {this.props.statistics.venue.venue}:
                            {this.props.statistics.venue.wins_count}
                        </span>
                    </div>
                </div>

                <div>
                    <span><b>% of teams decided to bat when they won the toss</b></span>
                    <div>
                        <span>
                            {this.props.statistics.percenatge.toFixed(2)}%
                        </span>
                    </div>
                </div>

                <div>
                    <span><b>Location hosted most number of matches and win % and loss % for the season:(Question not fully clear):</b></span>
                    <div>
                        {this.props.statistics.most_matches_by_locations.map((location, id) =>  ( 
                            <div key={id}>
                                <span>
                                    {location.venue}:
                                    {location.matches_count}
                                </span>
                            </div>
                        ))} 
                    </div>
                </div>

                <div>
                    <span><b>Which team won by the highest margin of runs for the season:</b></span>
                    <div>
                        {this.props.statistics.runs_margin.map((team, id) =>  ( 
                            <div key={id}>
                                <span>
                                    {team.winner}:
                                    {team.win_by_runs}
                                </span>
                            </div>
                        ))} 
                    </div>
                </div>


                <div>
                    <span><b>Which team won by the highest number of wickets for the season:</b></span>
                    <div>
                        {this.props.statistics.wkts_margin.map((team, id) =>  ( 
                            <div key={id}>
                                <span>
                                    {team.winner}:
                                    {team.win_by_wickets}
                                </span>
                            </div>
                        ))} 
                    </div>
                </div>

                <div>
                    <span><b>How many times has a team won the toss and the match</b></span>
                    <div>
                        <span>
                            {this.props.statistics.teams_won_toss_and_match}
                        </span>
                    </div>
                </div>


                <div>
                    <span><b>Which Batsman (or bowler?) gave away the most number of runs in a match for the selected season:</b></span>
                    <div>
                        <span>
                            {this.props.statistics.most_runs_given.bowler}&nbsp;|&nbsp;
                            {this.props.statistics.most_runs_given.runs_given}&nbsp;|&nbsp;
                            {this.props.statistics.most_runs_given.venue}
                        </span>
                    </div>
                </div>

                <div>
                    <span><b>Most number of catches by a fielder in a match for the selected season:</b></span>
                    <div>
                        <span>
                            {this.props.statistics.most_catches.fielder}&nbsp;|&nbsp;
                            {this.props.statistics.most_catches.catches}&nbsp;|&nbsp;
                            {this.props.statistics.most_catches.venue}
                        </span>
                    </div>
                </div>

                


                

            </div>
        );  
    }  
}  

export default Statistics;
