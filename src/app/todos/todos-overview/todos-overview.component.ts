import { Component, OnInit } from '@angular/core';
import {TodosDto} from "../shared/todos.dto";
import {HttpClient} from "@angular/common/http";
import {UserDto} from "../shared/user.dto";

@Component({
  selector: 'app-todos-overview',
  templateUrl: './todos-overview.component.html',
  styleUrls: ['./todos-overview.component.scss']
})
export class TodosOverviewComponent implements OnInit {
  todos: TodosDto[] = []
  users: UserDto[] = []
  show: string = "users";
  completed: boolean = true;

  gifComplete: string = "https://media0.giphy.com/media/xsMJyTdf4BQKk/giphy.gif?cid=ecf05e47ihe3mve6wnew50bhp1ht4hfugfw10nyfxkwzkhpi&rid=giphy.gif&ct=g";
  gifIncomplete: string = "https://media4.giphy.com/media/gMjeaB0fzo1yPj4KDZ/giphy.gif?cid=ecf05e47m4g51ctk3g56vu493c9ew0cd73ac2eqekg582ku9&rid=giphy.gif&ct=g";

  options = {
    "background": {
      "color": {
        "value": "#ffffff"
      },
      "image": "url('https://particles.js.org/images/background3.jpg')",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    },
    "backgroundMask": {
      "cover": {
        "color": {
          "value": {
            "r": 255,
            "g": 255,
            "b": 255
          }
        }
      },
      "enable": true
    },
    "fullScreen": {
      "enable": true,
      "zIndex": 1
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onHover": {
          "enable": true,
          "mode": "bubble",
          "parallax": {
            "force": 60
          }
        }
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "duration": 2,
          "opacity": 1,
          "size": 100
        },
        "grab": {
          "distance": 400
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff"
      },
      "links": {
        "color": {
          "value": "#ffffff"
        },
        "distance": 150,
        "enable": true
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "enable": true,
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        }
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 80
      },
      "opacity": {
        "animation": {
          "speed": 1,
          "minimumValue": 0.1
        }
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 1,
          "max": 30
        },
        "animation": {
          "speed": 40,
          "minimumValue": 0.1
        }
      }
    }
  }
  userId: number = 1;
  userIdUsers: number = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<TodosDto[]>('https://jsonplaceholder.typicode.com/todos?userId=' + this.userId)
      .subscribe(todosArray =>{
        this.todos = todosArray
      });

    this.http.get<UserDto[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(usersArray =>{
        this.users = usersArray
      });
  }

  //https://jsonplaceholder.typicode.com/users

  getTodosForUsers(): void {
    this.http
      .get<TodosDto[]>('https://jsonplaceholder.typicode.com/todos?userId=' + this.userId)
      .subscribe(todosArray =>{
        this.todos = todosArray
      });
  }

  ChangeShowValue(value: string) {
    this.show = value;
  }

  getUsersValue() {
    console.log(event)
    //this.userIdUsers = eve.;
  }
}
