import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo: any;

  constructor(private route: ActivatedRoute, private router: Router) { }
  goBack(): void {
    this.router.navigate(['/']); 
  }

  ngOnInit(): void {
    const storedUserInfo = localStorage.getItem('userInfo');
    

    if (storedUserInfo) {
      this.userInfo = JSON.parse(storedUserInfo); 
    } else {
      console.log('No se encontraron datos de usuario en localStorage');
    }

    const documentId = this.route.snapshot.paramMap.get('documentId');
    const documentType = this.route.snapshot.paramMap.get('documentType');
    
  }
}
