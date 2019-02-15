import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.location.search);
    }

    render() {
        return (
            <div>
                {this.props.location.search}
            </div>
        );
    }
}

NewsContent.propTypes = {};

export default NewsContent;
