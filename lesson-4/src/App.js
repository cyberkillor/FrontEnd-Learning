import React from 'react';
import image_1 from './img/1.jpeg'
import image_2 from './img/2.jpeg'
import image_3 from './img/3.jpeg'
import image_4 from './img/4.jpeg'
import './Auto.css';

const width=-400;

class Auto extends React.Component{
  constructor(props){
    super(props);
    this.state={
      No: 0,
      left: 0,
      flag: false,
      x_start:"",
      x_last: ""
    }

    this.tick_right = this.tick_right.bind(this);
    this.tick_left = this.tick_left.bind(this);
  }

  componentDidMount(){
    this.timer=setInterval(
        ()=>this.tick_right(),
        2000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick_right(){
    let No = this.state.No;
    No++;
    if(No > 3) {
      No = 0;
    }
    this.setState({
      No
    });

    this.setState({
      left: width*No
    });
    console.log(this.state.No);
  }

  tick_left(){
    let No = this.state.No;
    No--;
    if(No < 0) {
      No = 3;
    }
    this.setState({
      No
    });

    this.setState({
      left: width*No
    })
    console.log(this.state.No);
  }

  over(){
    clearInterval(this.timer);
  }

  out(){
    this.timer=setInterval(
        ()=>this.tick_right(),
        2000
    );
    document.getElementsByClassName('mid')[0].style.transition="1s";
    this.setState({
      left:this.state.No* width,
      flag:false
    });
  }


  down(e){
    this.setState({
      flag:true,
      x_last: e.clientX,
      x_start:e.clientX
    })
    document.getElementsByClassName('mid')[0].style.transition="0s";
  }

  move(e){
    let move=0;
    if(this.state.flag===true){
      move=this.state.x_last-e.clientX;
      this.setState({
        x_last:e.clientX,
        left:this.state.left-move
      })
    }
  }

  up(e){
    this.setState({
      flag:false,
    })
    document.getElementsByClassName('mid')[0].style.transition="1s";
    if(this.state.x_start-e.clientX>0 && Math.abs(this.state.x_start-e.clientX)>=Math.abs(width/2)){
      this.tick_right();
    }
    else if(this.state.x_start-e.clientX<0 && Math.abs(this.state.x_start-e.clientX)>=Math.abs(width/2)){
      this.tick_left();
    }
    else{
      this.setState({
        left:this.state.No* width
      })
    }
  }

  spot(No){
    this.setState({
      No: No,
      left: No* width
    })
  }

  render(){
    return(
        <div className="big" onMouseOut={this.out.bind(this)} onMouseOver={this.over.bind(this)} onMouseDown={this.down.bind(this)} onMouseMove={this.move.bind(this)} onMouseUp={this.up.bind(this)}>
          {/* // <div className="big"  onMouseDown={this.down.bind(this)} onMouseMove={this.move.bind(this)} onMouseUp={this.up.bind(this)}> */}
          <ul className="mid" style={{left:this.state.left+"px"}}>
            <li className="pic1"> <img src={image_1} alt={1} onClick={() => {this.spot(3)}}/> </li>
            <li className="pic2"> <img src={image_2} alt={2} onClick={() => {this.spot(2)}}/> </li>
            <li className="pic3"> <img src={image_3} alt={3} onClick={() => {this.spot(1)}}/> </li>
            <li className="pic4"> <img src={image_4} alt={3} onClick={() => {this.spot(0)}}/> </li>
          </ul>
          <div className="spot_block">
            <div className="spot" onClick={() => {this.spot(3)}} > ○ </div>
            <div className="spot" onClick={() => {this.spot(2)}} > ○ </div>
            <div className="spot" onClick={() => {this.spot(1)}} > ○ </div>
            <div className="spot" onClick={() => {this.spot(0)}} > ○ </div>
          </div>
          <div className="shift_block">
            <div className="left" onClick={this.tick_left}/>
            <div className="right" onClick={this.tick_right}/>
          </div>
        </div>
    );
  }
}

export default Auto;
