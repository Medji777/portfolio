import React from 'react';
import Progress from "./Progress";

class ProgressContainer extends React.Component {

    state = {
        count: 0,
        isLoad: true
    };

    fill = React.createRef();

    componentDidUpdate(prevProps, prevState) {
        if(this.state.isLoad){
            this.setState({isLoad: false});
            this.interval = setInterval(()=>{
                this.setState({count: this.state.count + 1});
                if(this.state.count <= this.props.progress){
                    this.fill.current && (this.fill.current.style.width = this.state.count + '%');
                } else {
                    clearInterval(this.interval);
                }
            },0);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return <Progress refer={this.fill} progress={this.props.progress} title={this.props.title}/>
    }

}

export default ProgressContainer;