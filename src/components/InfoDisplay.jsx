const InfoDisplay = ({title, info1, info2, info3}) => {
  return(
    <div>
      <h2>{title}</h2>
      <p>{info1}</p>
      <p>{info2}</p>
      <p>{info3}</p>
    </div>
  )
}

export default InfoDisplay;