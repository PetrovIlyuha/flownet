import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.active}>
          Valera
        </div>
        <div className={s.dialog}>
          Dmitri
        </div>
        <div className={s.dialog}>
          Maria
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>What's new in React?</div>
        <div className={s.message}>Hooks has taken over minds of developers</div>
        <div className={s.message}>While I am still on lifecycle methods and REDUX</div>
      </div>
    </div>
  )
};

export default Dialogs;