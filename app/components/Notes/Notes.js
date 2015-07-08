import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

class Notes extends React.Component {
  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <p>
          <AddNote username={this.props.username} addNote={this.props.addNote} />
        </p>
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
};

Notes.PropTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default Notes;
