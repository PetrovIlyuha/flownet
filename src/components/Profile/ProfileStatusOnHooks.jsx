import React, { useState } from "react";

const ProfileStatusOnHooks = (props) => {
  const [EditMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.state);

  const toggleEditMode = () => {
    setEditMode(!EditMode);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    props.updateStatus(status);
  };

  return (
    <div>
      {!EditMode &&
      <div>
        <span onDoubleClick={toggleEditMode}>{props.status || '---------'}</span>
      </div>
      }
      {EditMode &&
      <div>
        <span>
          <input
            onBlur={toggleEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </span>
      </div>
      }

    </div>
  );
};

export default ProfileStatusOnHooks;