import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img  alt="geek" src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>

                            <hr/>

                            <p>HTML/CSS | Bootstrap | Javascript | React | Java | Spring | Python | AWS | MySQL</p>
                            <div className="social-links">

                                {/*Linkedin*/}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"  ></i>
                                </a>

                                 {/*Github*/}
                                 <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"  ></i>
                                </a>

                                 {/*Twitter*/}
                                 <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter-square" aria-hidden="true"  ></i>
                                </a>

                                 {/*Facebook*/}
                                 <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook-square" aria-hidden="true"  ></i>
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;