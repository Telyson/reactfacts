import React from 'react'
import Listitemz from './Listitemz'

export default function Project2() {
    const facts = [
        'Was first release in 2013',
        'Was originally created by Jordan Walke',
        'Has well over 100k stars on Github',
        'Is maintained by Facebook',
        'Powers thousands of enterprise apps, including mobile apps']
    const factz = []
    facts.forEach((fact) => {
        factz.push(<Listitemz list={fact}/>)
    })
  return (
    <div className='cove'> 
        <div className='componen'>

            <div style={
                {
                    display:'flex', 
                    justifyContent:'space-between',
                    background:"black",
                    color:'white',
                    padding:'7px'
                }
            }>
                <div style={{justifyContent:'space-around',display:'flex', gap:'10px', color:'#28e0e0'}}>
                    <img src='/logo192.png' />
                    <h3 style={{marginTop:'5px'}}>ReactFacts</h3>
                </div>
                <div>
                    <h4 style={{marginTop:'6px'}}>React Course- Project 2</h4>
                </div>
            </div>

            <div className='about-react'>
                <h1 style={{color:'white', margin:'15px 0px'}}>Fun Facts About React</h1>

                <div>
                    <ul>
                        {factz}
                    </ul>
                </div>
            </div>


        </div>
    </div>
  )
}
