import {observable} from 'mobx'

export default class User{
   @observable user
   
   constructor(user) {
       this.user = user
   }
   
}
