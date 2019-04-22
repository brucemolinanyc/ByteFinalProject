import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';

class HomePage extends React.Component{



    render(){
        if (!localStorage.token){
            return <Redirect to="/" />
          }

        return(
            <div>
                <Header/>

                This is the homepage
            </div>
        )
    }


}


export default HomePage;