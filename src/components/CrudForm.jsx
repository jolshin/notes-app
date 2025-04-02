const CrudForm = ({ onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <button type="submit">
        <i className="fa">&#xf1d9;</i>
      </button>
      <div className="textarea">
        <textarea
          id="note-input"
          type="text"
          name="content"
          placeholder="New note"
          required
        />
      </div>
    </form>
  );
};
export default CrudForm;
