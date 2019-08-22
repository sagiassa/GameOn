import React, {Component} from 'react';
class PopEdit extends Component {
    constructor(){
        super()
        this.state = {
            age: "21",
            level: "good",
            city: "tel aviv"
        }
    } 
    selectCity=()=>{
        let data = [...this.props.data]
        let obj = {}
        for(let d of data){
            if(!obj[d.city]){
             obj[d.city] = d.city
            }
        }
       
        let cityNames = []
        for(let key of Object.keys(obj)){
            cityNames.push(key)
        } 
        return cityNames
    }
    handelChange=async(event)=>{
        await this.setState({[event.target.name]: event.target.value}, function(){
          console.log(this.state.age)
          console.log(this.state.level)
          console.log(this.state.city)
        })
    }
    PopEditSearch=()=>{
        let obj={
        age: this.state.age,
        level: this.state.level,
        city: this.state.city
        }
        console.log(obj)
        this.props.PopEditSearch(obj)
      }
    render(){
        let cityNames= this.selectCity()
        return(
            <div className="pop">
​
            Age:<select className="popEditInput" name="age" value={this.state.age} onChange={this.handelChange}>
                    <option value="11-15"> 11 - 15 </option>
                    <option value="15-17"> 15 - 17 </option>
                    <option value="17-20"> 17 - 20 </option>
                    <option value="20-25"> 20 - 25 </option>
                    <option value="25-40"> 25 - 40 </option>
                    <option value="40+"> 40 + </option>
                </select><br></br>
​
            Level:<select className="popEditInput" name="level" value={this.state.level} onChange={this.handelChange}>
                     <option> bad </option>
                     <option> not that bad </option>
                     <option> good </option>
                     <option> very good </option>
                     <option> pro </option>
                 </select><br></br>
​
​
            City:<input className="popEditInput" type='text' className="in" list='CitiesNames' name='city' value={this.state.city} onChange={this.handelChange} />
                    <datalist id='CitiesNames'>
                        {cityNames.map(x => <option value={x}/> )}
                    </datalist><br></br>
                    <i class="fas fa-volleyball-ball" onClick={this.PopEditSearch}></i>
​
            </div>
        )
    }
}    
  
  export default PopEdit;