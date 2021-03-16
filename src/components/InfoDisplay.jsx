const InfoDisplay = ({title, ...props}) => {
    const info = Object.values(props).map((value, idx) => <p key={idx}>{value}</p>)

    return (
      <>
        <h2>{title}</h2>
        {info}
      </>
    )
  
}

export default InfoDisplay;