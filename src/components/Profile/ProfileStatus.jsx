import React from "react";
import s from './ProfileStatus.module.css';

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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode} className={s.status}>{this.props.status || "Empty Status"}</span>
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