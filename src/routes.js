import React from 'react'
import {Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'

export default (
    <div>
     <Route exact path='/' component = {Home}/>
    <Route path = '/about' componenet = {About}/>
    <Route path = '/classlist/:class' component = {ClassList}/>
    <Route path = '/student/:id' component = {Student}/>
     </div>
)