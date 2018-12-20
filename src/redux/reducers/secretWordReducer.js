import {SET_SECRETWORD} from '../types'

export default (state=null, {type, payload}={}) => {
    switch(type) {
        case SET_SECRETWORD:
            return payload;
        default:
            return state;
    }
}