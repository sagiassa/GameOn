import React , {Component} from 'react'
import VisitorSortGames from './VisitorSortGames'
// import axios from 'axios'
// import {MDCTextField} from 'material'
// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

class VisitorGames extends Component{
   constructor(props) {
       super(props)
       this.state= {
           posts: [],
           sport : 'basketball',
           city : 'tel-aviv',
           age : '11-15',
           level : 'bad',
           flag : false,
           filteredPosts : ''
       }
   }
   componentWillMount = async () => {
       let posts = await  this.props.renderMyData()
       await this.setState({posts})
   }
   cityNames = () => {
       let cities = this.state.posts.map(c => c.city)
       cities = [... new Set(cities)]
       return cities
   }
   ageRange = () => {
       let age = this.state.posts.map(a => a.age)
       age = [... new Set(age)]
       return age
   }
   levelRange = () => {
       let level = this.state.posts.map(l => l.level)
       level = [... new Set(level)]
       return level
   }
   handleChanges = async (e) => {
       let name = e.target.name
       let value = e.target.value
       await this.setState({ [name] : value })
       console.log(this.state)
       this.filterPosts()
   }
   filterPosts = async () => {
        let filteredPosts
        filteredPosts = await this.state.posts.filter( p => p.sport === this.state.sport && 
                                                    p.city === this.state.city &&
                                                    p.level === this.state.level &&
                                                    p.age === this.state.age )
        console.log(filteredPosts)
        if( filteredPosts.length > 0){
            this.setState( { flag : true , filteredPosts : filteredPosts })
        }  
        else {
            this.setState ( { flag : false })
        }                       
   }

   render(){
       const cities = this.cityNames()
       const age = this.ageRange()
       const levels = this.levelRange()
       
       return(
           <div id="visitors-inputs">
               <div>
               <span>Sport:</span>                
               <input type='text'  list='fieldsNames' name='sport' value={this.state.sport} onChange={this.handleChanges} />
                <div><datalist id='fieldsNames'>
                    {cities.map(c => <option> {c} </option>)}
                </datalist></div>
               </div>
               <div>
               <span>City:</span>                
               <input type='text' className="in" list='cities' name='city' value={this.state.city} onChange={this.handleChanges} />
                <div><datalist id='cities'>
                    {cities.map(c => <option> {c} </option>)}
                </datalist></div>
               </div>
               <div>
                   <span> Age Range :  </span>
               <input type='text' className="in" list='ageRange' name='age'onChange={this.handleChanges} />
                <div><datalist id='ageRange'>
                    {age.map(a => <option> {a} </option>)}
                </datalist></div>
               </div>
               <div>
               <span> Level :  </span>
               <input type='text' className="in" list='levels' name='level' onChange={this.handleChanges}/>
                <div><datalist id='levels'>
                    {levels.map(l => <option> {l} </option>)}
                </datalist></div>
               </div>
                    
                   <div>
           {this.state.flag ? <VisitorSortGames posts={this.state.filteredPosts} /> : this.state.posts.map(p => 
            <div id = "posts">
                <div id="eachpost">
                <span> {p.sport} </span>
                <span> {p.level} </span> 
                <span> {p.day} </span> 
                <span> {p.city} </span>
                <span> {p.cort_name} </span>
                <span> {p.address} </span> 
                <span> {p.numOfPlayers} </span> </div>
            </div> )}
            </div>
        </div>
          
       )
   }
}
export default VisitorGames;