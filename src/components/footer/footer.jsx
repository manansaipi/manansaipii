import React from 'react'
import './footer'

const footer = () => {
  return (
     <div style={styles.content}>
        <footer style={styles.footer}>
   <div style={styles.space}></div>
      <div style={styles.container}>
        <p style={styles.text}> @manansaipi</p>
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
    maxWidth: '960px',
    margin: '0 auto',
  },
  text: {
    fontSize: '14px',
    color: '#888',
  },
   space: {
    height: '20px',
  },
};

export default footer