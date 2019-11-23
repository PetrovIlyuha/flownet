import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (event) => {
    this.setState({status: event.currentTarget.value});
  };

  render() {
    console.log(this.props.status);
    return (
      <div>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || "Empty Status"}</span>
        </div>
        }
        {
          this.state.editMode &&
          <div>
            <input
              onChange={this.onStatusChange}
              value={this.state.status}
              autoFocus={true}
              onBlur={this.deactivateEditMode}/>
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;