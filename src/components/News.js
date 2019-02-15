import React, {Component} from 'react';
import {Link} from "react-router-dom";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [
                {id: '1', title: '新闻1'},
                {id: '2', title: '新闻2'},
                {id: '3', title: '新闻3'},
                {id: '4', title: '新闻4'},
                {id: '5', title: '新闻5'},
            ]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.newsList.map((value, index) => {
                            return (
                                <li key={index}>
                                    {/*<Link to={`/news/${value.id}`}>{value.title}</Link>*/}
                                    <Link to={`/content?id=${value.id}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

News.propTypes = {};

export default News;
