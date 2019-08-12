import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clipboard-input',
  templateUrl: './clipboard-input.component.html',
  styleUrls: ['./clipboard-input.component.scss']
})
export class ClipboardInputComponent implements OnInit {
  @Input() code: string;
  @Input() elementId = 'cliped-input';
  installCommandCopied = false;

  constructor() {}

  ngOnInit() {}

  public copyCommand(): void {
    const el = document.getElementById(this.elementId) as HTMLInputElement;
    el.disabled = false;
    el.select();
    el.disabled = true;
    document.execCommand('copy');

    this.installCommandCopied = true;

    setTimeout(() => {
      this.installCommandCopied = false;
    }, 3000);
  }
}
