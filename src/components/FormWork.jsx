const FormWork = ({companyName, positionTitle, tasks, dateFrom, dateUntil, changeHandler, submitHandler}) => {

  return(
    <form onSubmit={submitHandler}>
      <fieldset>
        <legend>Work Experience</legend>
        <label>Company Name</label>
        <input  type="text"
                value={companyName} 
                onChange={changeHandler}
                name="companyName"/>
        <label>Position Title</label>
        <input  type="text"
                value={positionTitle} 
                onChange={changeHandler}
                name="positionTitle"/>
        <label>tasks</label>
        <input  type="text"
                value={tasks} 
                onChange={changeHandler}
                name="tasks"/>
        <label>dateFrom</label>
        <input  type="text"
                value={dateFrom} 
                onChange={changeHandler}
                name="dateFrom"/>
        <label>dateUntil</label>
        <input  type="dateUntil"
                value={dateUntil} 
                onChange={changeHandler}
                name="dateUntil"/>
        <button>Save</button>
      </fieldset>
    </form>
  )
}

export default FormWork;