import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FieldForm, FieldType, FormResult } from './field-form';

@Component({
  selector: 'nfu-form',
  templateUrl: './fourward-form.component.html',
  styleUrls: ['./fourward-form.component.scss']
})
export class FourwardFormComponent implements OnInit {
  @Input() fields: FieldForm[] = [];
  @Input() rowContainerClass: string;
  @Input() loadingIndicatorClass: string;
  @Input() btnContainerClass: string;
  @Input() actionBtn1Enabled = false;
  @Input() actionBtn1Label: string;
  @Input() actionBtn1Class: string;
  @Input() actionBtn1Icon: string;
  @Input() actionBtn2Enabled = false;
  @Input() actionBtn2Label: string;
  @Input() actionBtn2Class: string;
  @Input() actionBtn2Icon: string;
  @Input() cancelBtnEnabled = false;
  @Input() cancelBtnLabel: string;
  @Input() cancelBtnIcon: string;
  @Input() cancelBtnClass: string;
  @Input() isLoading: boolean;
  @Input() getRawValue = true;
  @Input() autoCompleteSugestions: any[] = [];

  @Output() actionBtn1Click = new EventEmitter();
  @Output() actionBtn2Click = new EventEmitter();
  @Output() cancelBtnClick = new EventEmitter();
  @Output() autoCompleteMethod = new EventEmitter();

  isSubmited = false;
  fieldType = FieldType;
  fourwardFormGroup: FormGroup;
  subscriptionSendFormData1: Subscription;
  subscriptionSendFormData2: Subscription;
  subscriptionSendFormData3: Subscription;
  subscritionRecriateFormField: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.generateReactiveForm();
  }

  public actionButton1Click(): void {
    this.actionBtn1Click.emit(this.submitForm());
  }
  public actionButton2Click(): void {
    this.actionBtn2Click.emit(this.submitForm());
  }

  public cancelButtonClick(): void {
    this.fourwardFormGroup.reset();
    this.cancelBtnClick.emit();
  }

  private submitForm(): FormResult {
    this.isSubmited = true;
    const formResult = new FormResult();
    formResult.data = this.getRawValue ? this.fourwardFormGroup.getRawValue() : this.fourwardFormGroup.value;
    formResult.success = this.fourwardFormGroup.valid;

    this.fourwardFormGroup.reset();
    this.isSubmited = !formResult.success;
    return formResult;
  }

  private generateReactiveForm(): void {
    const controls: any = {};

    this.fields.forEach((el: FieldForm) => {
      controls[el.name] = this.prepareFieldControl(el);
    });

    this.fourwardFormGroup = this.fb.group(controls);
  }

  private prepareFieldControl(field: FieldForm): FormControl {
    const defaultValue = field.type === FieldType.DROPDOWN ? field.options[0].value : field.defaultValue;
    return new FormControl(
      {
        value: defaultValue,
        disabled: field.disabled
      },
      field.required ? Validators.required : null
    );
  }
}
