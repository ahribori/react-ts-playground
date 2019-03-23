import React from 'react';

/**
 * Interface 선언으로 propTypes를 컴파일 시점에 대체할 수 있다.
 */
interface IBasicModal {
  open: boolean;
  title: string;
  handleChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const BasicModal: React.FunctionComponent<IBasicModal> = ({
  open,
  title,
  handleChange,
  handleSubmit,
}) => {
  return open ? (
    <div>
      <div className="modal_header">
        <h1>{title}</h1>
      </div>
      <div className="modal_body">
        <form action="">
          <input type="text" name="title" onChange={handleChange} />
        </form>
      </div>
      <div className="modal_footer">
        <button type="submit" onClick={handleSubmit}>
          제출
        </button>
      </div>
    </div>
  ) : null;
};

export default BasicModal;
