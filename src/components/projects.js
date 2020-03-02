import React, {Component} from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    { /*Project 1 */}
                <Card shadow={5} style={{minWidth: '45px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.cbronline.com/wp-content/uploads/2016/06/Java.png) center / cover'}}></CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>LIVE-DEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/*Project 2 */}
                <Card shadow={5} style={{minWidth: '45px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.cbronline.com/wp-content/uploads/2016/06/Java.png) center / cover'}}></CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>LIVE-DEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                  {/*Project 3 */}
                  <Card shadow={5} style={{minWidth: '45px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.cbronline.com/wp-content/uploads/2016/06/Java.png) center / cover'}}></CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>LIVE-DEMO</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                </div>   

            )
            
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>Second Tab</h1></div>
            )
            
        }  else if(this.state.activeTab === 2) {
            return(
                <div><h1>Third Tab</h1></div>
            )
        }   else if(this.state.activeTab === 3) {
            return(
                <div><h1>Fourth Tab</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Java</Tab>
                    <Tab>Spring-MVC</Tab>
                    <Tab>Springboot</Tab>
                    <Tab>Python</Tab>
                </Tabs>
                
                   <Grid>
                       <Cell col={12}>
                           <div className="content">{this.toggleCategories()}</div>

                       </Cell>
                   </Grid>
                    
            </div>    
        );
    }
}

export default Projects;