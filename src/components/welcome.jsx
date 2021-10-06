import React from 'react'

const Welcome = ( props ) => {

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    textContainer: {
      textAlign: 'center'
    },
    imgContainer: {
      paddingTop: '1em'
    },
    img: {
      display: 'flex',
      margin: 'auto',
      maxWidth: '40%',
      borderRadius: '50%',
    },
  }

  return (
    <div style={style.container}>
      <div style={style.textContainer}>
        <h1>{props.title}</h1>
        <span>{props.children}</span>
      </div>
      <div style={style.imgContainer}>
        <img style={style.img} src={props.img} alt={props.title}/>
      </div>
    </div>
  )
}

export default Welcome