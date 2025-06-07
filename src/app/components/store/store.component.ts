import { Component } from '@angular/core';
import { Category } from '../../interfaces/store.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

  categories = Object.values(Category);

}
