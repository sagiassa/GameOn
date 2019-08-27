import React , {Component} from 'react'
import VisitorSortGames from './VisitorSortGames'
import { Message } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
// import axios from 'axios'
// import {MDCTextField} from 'material'
// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

class VisitorGames extends Component{
   constructor(props) {
       super(props)
       this.state= {
           posts: [],
           sport : 'basketball',
           city : '',
           age : '',
           level : '',
           flag : false,
           filteredPosts : ''
       }
   }
   componentWillMount = async () => {
       console.log("start")
       let posts = await this.props.renderMyData()
       this.setState({posts})
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
       this.filterPosts()
   }
   filterPosts = async () => {
        let filteredPosts
        filteredPosts = await this.state.posts.filter( p => p.sport === this.state.sport && 
                                                    p.city === this.state.city &&
                                                    p.level === this.state.level &&
                                                    p.age === this.state.age )
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
           <div>
        <div id="visitors-input">
            <div id="visitors-input-child">
                <div id="visHeader">Sport:</div>
                 <div class="ui focus input" size='small' icon='search'>
                    <input type='text'  list='fieldsNames' name='sport' value={this.state.sport} onChange={this.handleChanges} />
                <datalist id='fieldsNames'>
                {cities.map(c => <option> {c} </option>)}
                </datalist>
                </div>
           </div>
           <div id="visitors-input-child">
                <div id="visHeader">City:</div>
                <div class="ui focus input" size='small' icon='search'>
                    <input type='text' className="in" list='cities' name='city' value={this.state.city} onChange={this.handleChanges} />
                    <datalist id='cities'>
                      {cities.map(c => <option> {c} </option>)}
                    </datalist>
                </div>
            </div>
           <div id="visitors-input-child" >
               <div id="visHeader"> Age Range :</div>
               <div class="ui focus input" size='small' icon='search'>
                 <input type='text' className="in" list='ageRange' name='age'onChange={this.handleChanges} />
                    <datalist id='ageRange'>
                        {age.map(a => <option> {a} </option>)}
                    </datalist>
                </div>
           </div>
           <div id="visitors-input-child">
                <div id="visHeader"> Level :</div>
                <div class="ui focus input" size='small' icon='search'>
                    <input type='text' className="in" list='levels' name='level' onChange={this.handleChanges}/>
                        <datalist id='levels'>
                        {levels.map(l => <option> {l} </option>)}
                        </datalist>
                </div>
           </div>
        </div>
               <div>
                  <div className="allGames">All GAMES!</div>
       {this.state.flag ? <VisitorSortGames posts={this.state.filteredPosts} /> : this.state.posts.map(p =>
        <Message id="post" color='teal' size='mini'>
            <div className="containerPost">
                <div className="g1"><div className="headerGame"> Sport:</div> {p.sport} </div><i class="fas fa-basketball-ball"></i>
                <div className="g1"><div className="headerGame"> Level:</div> {p.level} </div>
                <div className="g1"><div className="headerGame"> day:</div> {p.day} </div>
                <div className="g1"> <div className="headerGame"> Age:</div> {p.age} </div>
                <div className="g1"> <div className="headerGame">City:</div> {p.city} </div>
                <div className="g1"> <div className="headerGame">Court:</div> {p.court_name} </div>
                <div className="g1"><div className="headerGame"> Max Players:</div> {p.numOfPlayers} </div>
            </div>
        </Message>)}
        </div>
    </div>
       )
    }
}
export default VisitorGames;
//  <div id="visitors-inputs">
//        <div>
//        <span>Sport:</span>                
//        <input type='text'  list='fieldsNames' name='sport' value={this.state.sport} onChange={this.handleChanges} />
//         <div><datalist id='fieldsNames'>
//             {cities.map(c => <option> {c} </option>)}
//         </datalist></div>
//        </div>
//        <div>
//        <span>City:</span>                
//        <input type='text' className="in" list='cities' name='city' value={this.state.city} onChange={this.handleChanges} />
//         <div><datalist id='cities'>
//             {cities.map(c => <option> {c} </option>)}
//         </datalist></div>
//        </div>
//        <div>
//            <span> Age Range :  </span>
//        <input type='text' className="in" list='ageRange' name='age'onChange={this.handleChanges} />
//         <div><datalist id='ageRange'>
//             {age.map(a => <option> {a} </option>)}
//         </datalist></div>
//        </div>
//        <div>
//        <span> Level :  </span>
//        <input type='text' className="in" list='levels' name='level' onChange={this.handleChanges}/>
//         <div><datalist id='levels'>
//             {levels.map(l => <option> {l} </option>)}
//         </datalist></div>
//        </div>
            
//            <div>
//    {this.state.flag ? <VisitorSortGames posts={this.state.filteredPosts} /> : this.state.posts.map(p => 
//     <div id = "posts">
//         <div id="eachpost">
//         <span> {p.sport} </span>
//         <span> {p.level} </span> 
//         <span> {p.day} </span> 
//         <span> {p.TIME} </span> 
//         <span> {p.age} </span> 
//         <span> {p.city} </span>
//         <span> {p.court_name} </span>
//         <span> {p.numOfPlayers} </span> </div>
//     </div> )}
//     </div>
// </div>