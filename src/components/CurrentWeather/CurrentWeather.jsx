import React from 'react';
import PropTypes from 'prop-types';
// css
import './index.css';
// component
import Icon from '../Icon/Icon';
// utils
import { replaceIcon } from '../../utils/replaceIcon';

export default class CurrentWeather extends React.Component {
    state = {
        icon: null,
    };

    static propTypes = {
        data: PropTypes.object.isRequired,
    };
    
    componentDidMount() {
        // replace the ugly icon got by the weather API by a beautiful icon
        const myIcon = replaceIcon(this.props.data.weather[0].icon);
        // use require to dynamically get the new svg icon
        const icon =  require(`../../static/${myIcon}.svg`);
        this.setState({ icon });
    };

    render() {
        const { data } = this.props;
        return (
            <div className="container">
                <div className="subcontainers">
                    <div className="temp">{Math.floor(data.main.temp)}°</div>
                    <div>
                        <span className="description">{data.weather[0].description}</span>
                    </div>
                </div>
                <div className="subcontainers">
                    <div className="icon-container">
                        <Icon icon={this.state.icon} />
                    </div>
                </div>        
            </div>
        );
    };
};
