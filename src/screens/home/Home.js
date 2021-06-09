import React from 'react';
import './Home.css' ;
import Header from '../../common/header/Header'

class Home extends React.Component{
    render(){
        return (
          <div className='home-div'>
            <Header/>
          </div>
        )
    }
}
export default Home;