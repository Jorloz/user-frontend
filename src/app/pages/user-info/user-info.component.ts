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
    this.router.navigate(['/']);  // Aquí puedes poner la ruta a la que deseas volver
  }

  ngOnInit(): void {
    const storedUserInfo = localStorage.getItem('userInfo');
    

    // Verificar si hay datos en localStorage
    if (storedUserInfo) {
      this.userInfo = JSON.parse(storedUserInfo); // Convertir de string a objeto
    } else {
      // Si no hay datos en localStorage, manejar el caso aquí, por ejemplo:
      console.log('No se encontraron datos de usuario en localStorage');
    }

    // Obtener los parámetros de la URL (si es necesario)
    const documentId = this.route.snapshot.paramMap.get('documentId');
    const documentType = this.route.snapshot.paramMap.get('documentType');

    // Opcional: Puedes usar documentId y documentType si los necesitas en esta página
    console.log('Document ID:', documentId);
    console.log('Document Type:', documentType);
    
  }
}
