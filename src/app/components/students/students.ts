import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.html',
  imports:[FormsModule,CommonModule]
})
export class Students {
  students = [
    { id: 1, name: 'Alice', score: 85 },
    { id: 2, name: 'Bob', score: 78 },
    { id: 3, name: 'Charlie', score: 92 }
  ];

  constructor(private router: Router) {}

  goToDetails(id: number) {
    this.router.navigate(['/students', id]);
  }


}
