import { TestBed } from '@angular/core/testing';

import { WsService } from './ws.service';
import { HttpClientModule } from '@angular/common/http';

describe('WsService', () => {
  let service: WsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(WsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
