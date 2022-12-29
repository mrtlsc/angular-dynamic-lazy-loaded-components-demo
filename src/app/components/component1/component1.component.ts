import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentInputs } from '../../app.component';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements DynamicComponentInputs {
  @Input() input1 = '';
  @Input() input2 = '';

  @Output() output = new EventEmitter<string>();
}
