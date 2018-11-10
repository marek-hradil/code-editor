import React, { useState } from 'react'
import glamorous from 'glamorous'
import File from './components/File'
import Editor from './components/Editor'
import './App.css'

const AddNewButton = glamorous('button')({
  display: 'flex',
  width: '100%',
  padding: '0.25rem 0',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#373a49',
  color: '#fff',
  border: 0,
  cursor: 'pointer',
  borderBottom: '0.05rem solid #fff'
})

const AddNewInput = glamorous('input')({
  width: '100%',
  padding: '0.25rem'
})

export default () => {
  const [files, setFiles] = useState([
    {
      name: 'abc'
    }
  ])
  const [newFile, setNewFile] = useState({
    name: 'Abc'
  })

  const handleNewFileInputChange = (e) => {
    setNewFile({
      name: e.target.value
    })
  }

  const addNewFile = () => {
    console.log('works')
    setFiles([
      ...files,
      {
        name: newFile.name,
        value: ''
      }
    ])
    console.log(files)
  }
  return (
    <div className='App'>
      <div className='files'>
        <div>
          <AddNewInput value={newFile.name} onChange={(e) => handleNewFileInputChange(e)} />
          <AddNewButton onClick={() => addNewFile()}>
            Add New File
          </AddNewButton>
        </div>
        {files.map((file) => (
          <File name={file.name} />
        ))}
      </div>
      <Editor file={{

      }}/>
    </div>
  )
}
