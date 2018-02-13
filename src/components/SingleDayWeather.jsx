import React from "react";
// utils
import { replaceIcon } from '../utils/replaceIcon';

export default class SingleDayWeather extends React.Component {
  state = {
    icon: null,
  }

  componentDidMount() {
    // replace the ugly icon got by the weather API by a beautiful icon
    const myIcon = replaceIcon(this.props.icon);
    // use require to dynamically get the new svg icon
    const icon =  require(`../static/${myIcon}.svg`);
    this.setState({ icon });
  };

  render() {
    const { day, temp, description } = this.props;
    return (
      <div className="single-forecast">
        <p className="forecast-day">{day}</p>
        <img
          style={{width: '50px', height: '50px'}}
          src={this.state.icon}
          alt={description}
        />
        <p>{temp}°C</p>
      </div>
    );
  };
};
