import React, { useState, useEffect } from "react";

const ProfileStatusOnHooks = (props) => {
  const [EditMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!EditMode &&
      <div>
        <span
          onDoubleClick={activateEditMode}
        >{props.status || '---------'}</span>
      </div>
      }
      {EditMode &&
      <div>
        <span>
          <input
            onBlur={deactivateEditMode}
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