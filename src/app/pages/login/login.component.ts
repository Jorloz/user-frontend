import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Usaremos el router para redirigir a la página de info
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  selectedDocumentTypeLabel: string | null = null;
  documentType: string | null = null;
  documentNumber: string = '';
  documentNumberNotFormated: number = 0;
  userInfo: any = null;
  errorMessage: string = '';

  selectDocumentType(type: string, label: string): void {
    this.documentType = type;
    this.selectedDocumentTypeLabel = label;
  }
  formatNumber(event: any): void {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, '');
    let formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    event.target.value = formattedValue;
    this.documentNumberNotFormated = parseInt(this.documentNumber.replace(/\./g, ''), 10);
  }

  isFormValid(): boolean {
    return this.documentNumber.length >= 10 && this.documentNumber.length <= 14;
  }

  constructor(private userService: UserService, private router: Router) { }

  searchUser(): void {
    this.userService.getUserInfo(this.documentNumberNotFormated, this.documentType?this.documentType:"")
      .subscribe({
        next: (body) => {
          localStorage.setItem('userInfo', JSON.stringify(body));
          this.userInfo = body;
          this.errorMessage = '';
          this.router.navigate(['/user-info']);
        },
        error: (err) => {
          console.error('Error al consultar el usuario:', err);
          alert('Hubo un error al buscar el usuario. Por favor, intente nuevamente.');
          this.errorMessage = 'Hubo un error al buscar el usuario. Por favor, intente nuevamente.';
          this.userInfo = null;
        }
      });
  }
}
