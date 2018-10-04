import React, { Component, PropTypes } from 'react'
import { RouteTransition, presets } from 'react-router-transition'

export default class Contact extends Component {

	constructor (props) {
		super(props)
		this.state = {
		}
	}

	render () {
		return (
			<div>
				<h1>Contact</h1>
				<section className="table">
					<div className="cell center">
						<RouteTransition pathname={this.props.location.pathname} {...presets.fade}>
							<div>
								<div className="address">
									17 West 9th Street<br />
									Ground Floor<br />
									NYC 10011, USA
								</div>
								<div className="address">
									1 212 933 1349<br />
									<a href="mailto:info@nianfish.com">info@nianfish.com</a><br />
									<a href="https://www.instagram.com/nianfish">@nianfish</a>
								</div>
							</div>
						</RouteTransition>
					</div>
				</section>
			</div>
		)
	}
}