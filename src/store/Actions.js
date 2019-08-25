import { observable, action } from 'mobx'
import { User } from './User'

export class Actions {

    @observable uid 
    
    @action handleUserUID = (id) => {
        let u_id = new User(id)
        this.uid = u_id;
    }
}
