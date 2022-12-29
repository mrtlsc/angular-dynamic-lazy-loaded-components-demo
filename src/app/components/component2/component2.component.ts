import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentInputs } from '../../app.component';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements DynamicComponentInputs {
  @Input() input1 = '';
  @Input() input2 = '';

  @Output() output = new EventEmitter<string>();
}
