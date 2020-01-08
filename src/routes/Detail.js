import React from 'react';

class Detail extends React.Component {
    
    // 제일 먼저 실행되는 라이프 사이클
    componentDidMount(){
        const { location, history } = this.props;

        //만약 입력해서 movie_detail로 가면 홈으로 보낸다
        if(location.state === undefined){
            history.push("/");
        }
    }

    // 그런데 render가 먼저 실행된다
    render() {
        const { location } = this.props;
        if (location.state) {
          return <span>{location.state.title}</span>;
        } else {
          return null;
        }
    }
}

export default Detail;