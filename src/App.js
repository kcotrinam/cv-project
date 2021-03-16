import './App.css';
import React, {useState} from 'react';
import FormGeneral from './components/FormGeneral';
import FormStudy from './components/FormStudies'
import InfoDisplay from './components/InfoDisplay'
import FormWork from './components/FormWork';

const App = () => {
  const [tempInfo, setTempInfo] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    title: '',
    dateOfStudy: '',
    companyName: '',
    positionTitle: '',
    tasks: '',
    dateFrom: '',
    dateUntil: ''
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

  const [workInfo, setWorkInfo] = useState({
    companyName: '',
    positionTitle: '',
    tasks: '',
    dateFrom: '',
    dateUntil: '',
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
      ...tempInfo,
      schoolName: '',
      title: '',
      dateOfStudy: ''
    })
  }
  
  const handleSubmitWork = (evt) => {
    evt.preventDefault();
    setWorkInfo({
      companyName: tempInfo.companyName,
      positionTitle: tempInfo.positionTitle,
      tasks: tempInfo.tasks,
      dateFrom: tempInfo.dateFrom,
      dateUntil: tempInfo.dateUntil,
      saved: true
    })

    setTempInfo({
      ...tempInfo,
      companyName: '',
      positionTitle: '',
      tasks: '',
      dateFrom: '',
      dateUntil: ''
    })
  }

  const handleGeneralSubmit = (evt) => {
    evt.preventDefault();
    setInfo({
      name: tempInfo.name,
      email: tempInfo.email,
      phone: tempInfo.phone,
      saved: true
    })

    setTempInfo({
      ...tempInfo,
      name: '',
      email: '',
      phone: ''
    })
  }

  return (
    <>
      {info.saved ?
        <div>
          <InfoDisplay
            title="General Information"
            info1={info.name}
            info2={info.email}
            info3={info.phone}/>
        </div>
        :
          <FormGeneral name={tempInfo.name}
          email={tempInfo.email}
          phone={tempInfo.phone}
          handleChange={handleChange}
          submitHandler={handleGeneralSubmit}
          status={info.saved}
          />
      }
      {
        studiesInfo.saved ?
          <div>
            <InfoDisplay title="Studies Information"
              info1={studiesInfo.schoolName}
              info2={studiesInfo.title}
              info3={studiesInfo.dateOfStudy}/>
          </div>
        :
          <FormStudy 
            schoolName={tempInfo.schoolName}
            title={tempInfo.title}
            dateOfStudy={tempInfo.dateOfStudy}
            changeHandler={handleChange}
            submitHandler={submitStudies}
          />
        }

        { workInfo.saved ?
          <div>
            <InfoDisplay
              info1={workInfo.companyName}
              info2={workInfo.positionTitle}
              info3={workInfo.tasks}
              info4={workInfo.dateFrom}
              info5={workInfo.dateUntil}
              />
          </div>
          :
          <FormWork
            companyName={tempInfo.companyName}
            positionTitle={tempInfo.positionTitle}
            tasks={tempInfo.tasks}
            dateFrom={tempInfo.dateFrom}
            dateUntil={tempInfo.dateUntil}
            changeHandler={handleChange}
            submitHandler={handleSubmitWork}
          />
        }
    </>
  );
}

export default App;
