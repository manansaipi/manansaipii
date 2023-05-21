import React from 'react'
import './footer'
import {BiMessageRoundedDots} from 'react-icons/bi'
const footer = () => {
  return (
     <div style={styles.content}>
    <footer style={styles.footer}>
      <div style={styles.space}></div>
      <div style={styles.container}>
        <p style={styles.textLeft}>Hidden Left Text</p>
        <p style={styles.textCenter}>@manansaipi</p>
        <a href="https://ngl.link/manansaipi" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer"><BiMessageRoundedDots style={styles.icon}/></a>
      
      </div>
    </footer>
  </div>
   
  )
}
const styles = {
  content: {
    marginTop: '200px',
  },
  footer: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflowX: 'auto',
  },
  textLeft: {
    fontSize: '0px',
    color: '#f2f2f2',
    visibility: 'hidden',
    margin: 0,
  },
  textCenter: {
    fontSize: '14px',
    color: '#888',
    margin: 0,
  },
  textRight: {
    fontSize: '14px',
    color: '#888',
    margin: 0,
  },
  icon: {
    fontSize: '20px',
    color:"#6E6C78",
  },

};

export default footer