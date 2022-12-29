import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentInputs } from '../../app.component';

@Component({
  selector: 'app-component3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements DynamicComponentInputs {
  @Input() input1 = '';
  @Input() input2 = '';

  @Output() output = new EventEmitter<string>();
}
