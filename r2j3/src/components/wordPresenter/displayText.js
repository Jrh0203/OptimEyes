import React, { Component } from'react';

var count = 3;

class DisplayText extends Component {
	constructor(props) {
		super(props)
		this.state = {
			left: 0,
            leftPrevious: 0,
            timer: 3,
			top: 0
		}
    }

	test = () => {
		const selected = document.getElementById('selected')
		if(selected) {
		}
	}

	componentWillReceiveProps(nextProps) {
		const selected = document.getElementById('selected')


		// console.log('selected.getBoundingClientRect().left', selected.getBoundingClientRect().left, this.state.left)
		if(selected) {
			if(selected.getBoundingClientRect().left < this.state.left) {
				// console.log('here yoooo')
				this.setState({top: this.state.top+32})
			} 
			this.setState({left: selected.getBoundingClientRect().left})
		}
		// You don't have to do this check first, but it can help prevent an unneeded render
		// if (nextProps.startTime !== this.state.startTime) {
		// 	this.setState({ startTime: nextProps.startTime });
		// }
	}

	render() {
		this.test()
		const { snippet, selectedWordIndex, position, wordArraySnippet } = this.props;
		return (
			<div style={{padding: '25px', backgroundColor: 'rgb(32,32,32)', marginTop: '50px'}}>
				<div style={{height: '100px', overflow: 'hidden', position: 'relative', top: 0, lineHeight: '1.6', backgroundColor: 'rgb(32,32,32)', width: '100%'}}>
					<div className="thing" style={{position: 'relative', top: -this.state.top+'px', lineHeight: '1.6', width: '70vw', display: 'flex', flexFlow: 'wrap'}}>
							{wordArraySnippet.map((item, i) => {
								if(selectedWordIndex-position === i) {
									return <div style={{color: 'rgb(150,100,100)', fontSize: '20px', lineHeight: '1.6'}} value={i} class={i} id='selected' >{item}&nbsp;</div>
								}
								return <div style={{fontSize: '20px', lineHeight: '1.6', color: 'rgb(100,100,100)'}} id={i}>{item}&nbsp;</div>
							})}
					</div>
				</div>
			</div>
		)
	}
}

export default DisplayText