import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Input() placeholderText: string = '';
  @Output() filterInputEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //output event emitter for searchbar input
  onFilterInput(event) {
    this.filterInputEvent.emit(event.target.value);
  }

}
