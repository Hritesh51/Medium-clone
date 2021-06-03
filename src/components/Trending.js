import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@material-ui/core'
import React from 'react'

const Trending = () => {
    return (
        <div className="Main_trending">
            <Container>
                <div className="trending_list">
                    <FontAwesomeIcon icon={faChartLine} />
                    <p>TRENDING ON MEDIUM</p>
                </div>
                <div className="trending_items">
                    <h2>01</h2>
                    <div className="Writer">
                        <img src="https://i.pinimg.com/474x/e4/a8/cf/e4a8cf2b3534ea19918479d35ecb9cc8.jpg" />
                        <p>Arthur Hayes</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Trending;
