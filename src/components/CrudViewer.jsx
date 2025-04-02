const CrudViewer = ({ content, onDelete }) => {
  return (
    <>
      {content.length === 0 ? (
        <div className="note">No data available. Type it in.</div>
      ) : (
        <>
          {content.map((item, index) => (
            <div className="note-wrapper" key={index}>
              <button onClick={() => onDelete(item.id)}>&#215;</button>

              <div className="note">{item.content}</div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default CrudViewer;
