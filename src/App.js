import './App.css';
import React, {useState} from 'react';
import FormGeneral from './components/FormGeneral';
import FormStudy from './components/FormStudies'
import InfoDisplay from './components/InfoDisplay'

const App = () => {
  const [tempInfo, setTempInfo] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    title: '',
    dateOfStudy: ''
  })

  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    saved: false
  })

  const [studiesInfo, setStudiesInfo] = useState({
    schoolName: '',
    title: '',
    dateOfStudy: '',
    saved: false
  })

  const handleChange = (evt) => {
    setTempInfo({
      ...tempInfo,
      [evt.target.name]: evt.target.value
    })
  }

  const submitStudies = (evt) => {
    evt.preventDefault();
    setStudiesInfo({
      schoolName: tempInfo.schoolName,
      title: tempInfo.title,
      dateOfStudy: tempInfo.dateOfStudy,
      saved: true
    })

    setTempInfo({
      schoolName: '',
      title: '',
      dateOfStudy: ''
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setInfo({
      name: tempInfo.name,
      email: tempInfo.email,
      phone: tempInfo.phone,
      saved: true
    })

    setTempInfo({
      name: '',
      email: '',
      phone: ''
    })
  }

  return (
    <>
      {info.saved ?
          <InfoDisplay
            title="General Information"
            info1={info.name}
            info2={info.email}
            info3={info.phone}/>
        :
          <FormGeneral name={tempInfo.name}
          email={tempInfo.email}
          phone={tempInfo.phone}
          handleChange={handleChange}
          submitHandler={handleSubmit}
          status={info.saved}
          />
      }
      {
        studiesInfo.saved ?
          <InfoDisplay title="Studies Information"
            info1={studiesInfo.schoolName}
            info2={studiesInfo.title}
            info3={studiesInfo.dateOfStudy}/>
        :
          <FormStudy 
            schoolName={tempInfo.schoolName}
            title={tempInfo.title}
            dateOfStudy={tempInfo.dateOfStudy}
            changeHandler={handleChange}
            submitHandler={submitStudies}
            />
      }
        
    </>
  );
}

export default App;
