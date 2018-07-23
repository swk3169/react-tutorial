import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div>

        </div>
    );
};

class Counter extends Component {
    state = {
        number: 0,
        error: false
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        //5의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;

        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        {/*첫 번째 방법 */ }
        // this.setState({
        //     number: this.state.number + 1
        // });
        {/*두 번째 방법 */ }
        // this.setState(
        //     (state) => ({
        //         number: state.number + 1
        //     })
        // );
        {/*세 번째 방법 */ }
        // this.setState(
        //     ({ number }) => ({
        //         number: number + 1
        //     })
        // );
        {/*네 번째 방법 */ }
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        {/*첫 번째 방법 */ }
        // this.setState({
        //     number: this.state.number - 1
        // });
        {/*두 번째 방법 */ }
        // this.setState(
        //     (state) => ({
        //         number: state.number - 1
        //     })
        // );
        {/*세 번째 방법 */ }
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );

    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) return (<h1>에러발생!</h1>);

        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                {this.state.number === 4 && <Problematic />}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;