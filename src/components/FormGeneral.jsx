const FormGeneral = ({name, email, phone, handleChange, submitHandler, status}) => {

  return(
    <form onSubmit={submitHandler}>
      <fieldset>
        <legend>Personal Information</legend>
        <label>Name</label>
        <input  type="text"
                value={name} 
                onChange={handleChange} name="name"/>
        <label>E-mail</label>
        <input  type="text"
                value={email} 
                onChange={handleChange} name="email"/>
        <label>Phone</label>
        <input  type="text"
                value={phone} 
                onChange={handleChange} name="phone"/>
        <button>{status ? 'Save' : 'Edit'}</button>
      </fieldset>
    </form>
  )
}

export default FormGeneral;