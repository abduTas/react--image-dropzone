import React, { Component  ,} from 'react';
import './App.css';
import Dropzone   from "react-dropzone";
import ImageDropzone from "./imageDropUsingHooks"
class App extends Component {
  constructor(){
    super()
    this.state = {
      error :'' ,  
    } 
  }
  onDrop = (acceptedFiles) => {
    debugger
    if(!acceptedFiles.length){
      this.setState({error: 'incorrect format for image'})
    }else{
      this.setState({error:'' ,message  : acceptedFiles[0].name })
    }
    console.log(acceptedFiles);
  }
  render() {
    const { error   , message } = this.state ;
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Image dropzone</h2>
        </div>
        <p className="App-intro">
          Page for uploading image using dropzone
        </p>
        <div className="text-center mt-5">
        <Dropzone onDrop={this.onDrop} accept=" image/gif ,image/png ,  image/jpg"
            minSize={0}
            maxSize={10000000}
            multiple //for chosing multiple files 
        >
          {({getRootProps, getInputProps,  isDragActive , isDragReject}) => (
            <div {...getRootProps()} style={{height:"200px"}}>
              <input {...getInputProps()} />
              {!isDragActive && 'Click here to upload a file'}
              {isDragActive && !isDragReject && "image Dropzone "}
              {isDragReject && "File type not accepted, sorry!"}
            </div>
          )}
        </Dropzone>
        {error ? <p style={{color:'red'}}> {error}</p>: <p style={{color:'green'}}> {message}</p>}

      </div>
      <ImageDropzone />
      </div>
    );
  }
}

export default App;
