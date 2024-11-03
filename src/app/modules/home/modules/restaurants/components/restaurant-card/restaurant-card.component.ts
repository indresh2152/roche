import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {
  @Input() data: any;
  @Output() goToRestaurant = new EventEmitter();

  router = inject(Router);

  ngOnInit() {}

  onGoToRestaurant() {
    this.goToRestaurant.emit(this.data);
  }
}
