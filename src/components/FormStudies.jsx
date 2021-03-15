const FormStudy = ({schoolName, title, dateOfStudy, changeHandler, submitHandler}) => {

  return(
    <form onSubmit={submitHandler}>
      <fieldset>
        <legend>Studies Information</legend>
        <label>School Name</label>
        <input  type="text"
                value={schoolName} 
                onChange={changeHandler} name="schoolName"/>
        <label>Title of study</label>
        <input  type="text"
                value={title} 
                onChange={changeHandler} name="title"/>
        <label>Date of Study</label>
        <input  type="text"
                value={dateOfStudy} 
                onChange={changeHandler} name="dateOfStudy"/>
        <button>Save</button>
      </fieldset>
    </form>
  )
}

export default FormStudy;