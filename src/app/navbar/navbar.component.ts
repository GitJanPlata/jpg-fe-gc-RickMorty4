import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickMortyService } from '../rick-morty.service';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';

  constructor(private rickMortyService: RickMortyService,private userService: UserService, private router: Router) {}
  
  ngOnInit(): void{ 
  }

  search() {
    this.rickMortyService.setSearchTerm(this.searchTerm);
    this.router.navigate(['/search']);
  }
  onClick(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['login']);
    })
    .catch(error => console.log(error));

  }
}