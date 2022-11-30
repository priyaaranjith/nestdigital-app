import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchCourseData = ()=>{
    return this.http.get('https://mylinkurcodesapp.herokuapp.com/getcourses')
  }

  fetchAllFriends = () =>{
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }

  addCourse = (data:any) =>{
    return this.http.post('https://mylinkurcodesapp.herokuapp.com/addcourse',data)
  }

  addFriends = (data:any) =>{
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",data)
}
}

