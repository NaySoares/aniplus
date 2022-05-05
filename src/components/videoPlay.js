import React, { Component } from 'react'
export default class VideoPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoData: {}
        };
    }
    // async componentDidMount() {
    //     try {
    //         const res = await fetch(`http://localhost:4000/video`);
    //         const data = await res.json();
    //         this.setState({ videoData: data });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <video controls autoPlay>
                        <source
                        src={`http://localhost:4000/video`}
                        type="video/mp4"
                       >
                        </source>
                    </video>
                </header>
            </div>
        )
    }
}