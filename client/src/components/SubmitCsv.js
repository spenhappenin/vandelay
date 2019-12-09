import React, { useCallback, useState, } from "react";
import axios from "axios";
import { useDropzone, } from "react-dropzone";

const SubmitCsv = () => {
  const [csv, setCsv] = useState("");

  const onDrop = useCallback(acceptedFiles => {
    setCsv(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, });

  const onSubmit = () => {
    let data = new FormData();
    data.append(csv.name, csv);

    axios.post("/api/contacts_report", data)
      .then( res => {
        console.log(res.data);
      })
      .catch( err => {
        console.log(err);
      })
  };

  return (
    <div>  
      <div {...getRootProps()} style={styles.dropzone}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p>
            :
            <span>Drag photo here or click to select a file.</span>
        }
      </div>    
      <br />
      <br />
      <button onClick={onSubmit} style={styles.btn}>Generate Report</button>
    </div>
  );
};

const styles = {
  dropzone: {
    alignItems: "center",
    borderColor: "#cccccc",
    borderRadius: "5px",
    borderStyle: "dashed",
    borderWidth: "2px",
    cursor: "pointer",
    display: "flex",
    height: "100px",
    width: "50vw",
    justifyContent: "center",
  },
  btn: {
    height: "50px",
    width: "100px",
    background: "#232325",
    color: "white",
    borderRadius: "2px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  }
};

export default SubmitCsv;
