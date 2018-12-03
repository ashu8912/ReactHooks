import React,{useState,useContext} from 'react';
import {Grid,Row,Col,FormControl, ControlLabel,Panel, ButtonToolbar,Button} from 'react-bootstrap';
import ThemeContext from '../ThemeContext';
export default function Hook(){
    const [name,setName]=useState('ashu');
    const theme=useContext(ThemeContext);
  function nameChangeHandler(e){
    setName(e.target.value)
  }
  return (<div>
    <Grid>
    <Row>
     <Col xs={6} xm={6} md={6} lg={6} >
     <Panel bsStyle={theme.colorClass}>
     <Panel.Heading>
     <ControlLabel>Your Name</ControlLabel>
     </Panel.Heading>
    <Panel.Body><FormControl componentClass="input" type="text" onChange={nameChangeHandler} value={name}/>
    </Panel.Body>
    </Panel>
    </Col>
    <Col xs={6} xm={6} md={6} lg={6}>
    <ButtonToolbar>
    Choose A Theme
    <br/>
    <Button onClick={theme.changeTheme}>
    Default
    </Button>
    <Button bsStyle="danger" onClick={theme.changeTheme}>
    Red
    </Button>
    <Button bsStyle="success" onClick={theme.changeTheme}>
    Green</Button>
    <Button bsStyle="primary" onClick={theme.changeTheme}>
    Blue
    </Button>
    </ButtonToolbar>
    </Col>
  </Row>
  </Grid>
  </div>)
}