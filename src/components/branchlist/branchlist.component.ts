import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment/environment';
import { CommonModule } from '@angular/common';

interface Branch {
  branchName: string;
  vercelLink: string | null;
}

@Component({
  selector: 'app-branchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branchlist.component.html',
})
export class BranchlistComponent implements OnInit {
  branches: Branch[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBranches();
  }

  getBranches() {
    this.http.get<Branch[]>(environment.BRANCH_SENTINEL_URL).subscribe({
      next: (data) => {
        this.branches = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch guide info, try again after some time!';
        this.loading = false;
      },
    });
  }
}
