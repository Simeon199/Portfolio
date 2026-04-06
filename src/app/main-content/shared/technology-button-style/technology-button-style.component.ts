import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-technology-button-style',
  standalone: true,
  imports: [],
  templateUrl: './technology-button-style.component.html',
  styleUrl: './technology-button-style.component.scss'
})
export class TechnologyButtonStyleComponent {
  @Input() isActive: boolean = false;
  @Output() select = new EventEmitter<void>();

  onClick(): void {
    this.select.emit();
  }
}