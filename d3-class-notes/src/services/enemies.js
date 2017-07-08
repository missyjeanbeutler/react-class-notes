import axios from 'axios';
import {turnApiObjIntoArray} from '../utils/turnApiObjIntoArray.js'

export function getEnemies() {
  return axios.get('http://192.168.2.119:3005/all')
    .then(res => turnApiObjIntoArray(res.data))
}