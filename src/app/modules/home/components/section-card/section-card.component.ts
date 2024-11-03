import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss']
})
export class SectionCardComponent {

  @Input() data: any;
  @Output() goToSection = new EventEmitter();

  router = inject(Router);

  onGoToSection(data: any) {
    this.goToSection.emit(data);
  }
}
