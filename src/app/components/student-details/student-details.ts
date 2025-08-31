import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.html',
    imports: [RouterOutlet,RouterLink]
})
export class StudentDetails implements OnInit {
  studentId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
