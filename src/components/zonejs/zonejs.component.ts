import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-zonejs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zonejs.component.html',
  // turn off change detection
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZonejsComponent implements OnInit {
  h1 = 'ZoneJS';
  todos: Todo[] = [];
  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) {}
  getTodos() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .subscribe((res: any) => {
        this.todos = res;
        // mannually trigger change detection
        setTimeout(() => this.cdRef.detectChanges(), 1000);
      });
  }

  ngOnInit(): void {
    this.getTodos();
  }

  // reloadUI() {}
}
