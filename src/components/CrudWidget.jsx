import CrudViewer from "./CrudViewer";
import CrudForm from "./CrudForm";
import React, { useState, useEffect } from "react";

const hostUrl = import.meta.env.VITE_HOST_URL;

const CrudWidget = () => {
  const [content, setContent] = useState([{}]);

  const loadData = () => {
    fetch(`${hostUrl}/notes`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((json) => setContent(json))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = Object.fromEntries(formData.entries()).content;
    if (content) {
      fetch(`${hostUrl}/notes`, {
        method: "POST",
        body: JSON.stringify({ content }),
      })
        .then((response) => {
          if (response.ok) {
            loadData();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    event.target["note-input"].value = "";
  };

  const handleDelete = (id) => {
    fetch(`${hostUrl}/notes/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ content }),
    })
      .then((response) => {
        if (response.ok) {
          loadData();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="crud-widget">
      <div className="crud-header">
        <button type="button" className="refresh" onClick={loadData}>
          &#8635;
        </button>
        <h1>Notes</h1>
      </div>
      <div className="crud-viewer">
        <CrudViewer content={content} onDelete={handleDelete} />
        <CrudForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
export default CrudWidget;
