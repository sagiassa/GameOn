import {action , observable} from 'mobx'
export default class Store{
   @observable User
   @action handleInput = (user) => {
       this[user] = user
   }
}
let user = new Store