/*
This is the original edit form I was using. After seeing that I needed to break it up, it is now two different
components-- AddEventform and EditEventForm. The code below is just used as reference and not in use currently. 
The container components pass data down to other React components.
*/

//This is a component that pulls from an the SQL API and adds information about an event. 
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EventActions from '../actions/types';

//Import Action fetchEvents from actions/eventActions.js 
import { createEvent } from '../actions/eventActions';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      event: {
        event_title: 'example event',
        start_date: '030318',
        start_time1: '500',
        end_time1: '600',
        event_description_long: 'This is a sample description',
        event_location: 'test',
        event_type: 'test',
        event_cost: 'test',
        event_organizer: 'test',
        event_link: 'test',
        image_link: 'test'
      }
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //set e.target value to be able to type into the form 
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  //When console.logging this it works!!!
  onSubmit(e) {
    e.preventDefault();
    const newEvent = {
      event_title: this.state.event_title,
      start_date: this.state.start_date,
      start_time1: this.state.start_time1,
      end_time1: this.state.end_time1,
      event_description_long: this.state.event_description_long,
      event_location: this.state.location,
      event_type: this.state.event_type,
      event_cost: this.state.event_cost,
      event_organizer: this.state.event_organizer,
      event_link: this.state.event_link,
      image_link: this.state.image_link
    }
    //call action here
    this.props.createEvent(newEvent);
  }

  render() {
    console.log("this is the render for EventForm");
    return (
      <div>
        <h2>Edit your event here</h2>
        This is where the edit form will go.
      <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label><br />
            <input type="text" name="Event Title" onChange={this.onChange} value={this.state.event.event_title} />
          </div>
          <br />

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

//mapping items to the state to the post poerpty. 
function mapDispachToProps(dispatch) {
  return {
    actions: bindActionCreators(EventActions, dispatch)
  };
}

const mapStateToProps = (state, ownProps) => ({
  events: state.events.items
});

EventForm.propTypes = {
  eventActions: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired
}

//SUPER IMPORTANT!!!
export default connect(mapStateToProps, { createEvent })(EventForm);

// return (<div>
//   {this.props.events && this.props.events.map(event => (
//     <div key={event.id}>
//       <br />
//       <h3>{event.id}. Edit Event Here</h3>
//       <div className="event-edit">
//       <input 
//         value={event.event_title} 
//         onChange={e => this.setState({ event: { ...event, event_title: e.target.value } })} 
//       />

//       <input 
//         value={event.start_date} 
//         onChange={e => this.setState({ event: { ...event, start_date: e.target.value } })} 
//         />

//       <input 
//         value={event.start_time1} 
//         onChange={e => this.setState({ event: { ...event, start_time1: e.target.value } })} 
//         />

//       <input 
//         value={event.event_description_long} 
//         onChange={e => this.setState({ event: { ...event, event_description_long: e.target.value } })} 
//         />

//       <button onClick={this.addEvent}>Edit Events</button>
//       </div>

//       </div>
//   ))}
// </div>
// )