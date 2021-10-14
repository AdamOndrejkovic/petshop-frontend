import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PetDto} from "../shared/pet.dto";

@Component({
  selector: 'app-pets-overview',
  templateUrl: './pets-overview.component.html',
  styleUrls: ['./pets-overview.component.scss']
})
export class PetsOverviewComponent implements OnInit {
  pets: PetDto[] = [];
  image0: string = "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80";
  image1: string = "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80";


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<PetDto[]>(
      'https://localhost:5001/api/Pets?Count=10&Page=1&Sortorder=asc&SortBy=name'
    ).subscribe(pets => {
      this.pets = pets;
    });
  }
}
