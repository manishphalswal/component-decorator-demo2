import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input()
  user!: { name: string };

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

}
