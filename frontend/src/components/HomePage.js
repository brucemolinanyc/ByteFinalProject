import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
// import { Form, Container, Button} from 'semantic-ui-react';
import './HomePage.css'
import './Header.css'
import Representatives from './Representatives';

class HomePage extends React.Component{

    state = {

    }
 
   
    render(){
        // if (!localStorage.token){
        //     return <Redirect to="/" />
        //   }

        return(
            <div>
            
            <div className="header_class">
                <Header/>
            </div>
            
            <div className="home_container">
                <div className="top_segment">
                    <p>top segment</p>
                    <Representatives/>

                </div>
                <div className="middle_segment">
                    <div className="text">
                        test of this fasfsdafsaddas
                    </div>
                </div>
                <div className="lower_segment">
                    <div className="text">
                        test of this fasfsdafsaddas
                    </div>
                </div>
            </div>

            </div>
            
        )
    }


}


export default HomePage;