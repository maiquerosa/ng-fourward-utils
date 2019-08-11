import { KeyValue } from '@angular/common';

export interface FieldForm {
  type: FieldType;
  name: string;
  label: string;
  labelTrue?: string;
  labelFalse?: string;
  id?: string;
  maskType?: string;
  required?: boolean;
  disabled?: boolean;
  containerClass?: string;
  inputClass?: string;
  placeholder?: string;
  hasDataPipe?: boolean;
  hasCurrencyPipe?: boolean;
  options?: KeyValue<string, any>[];
  defaultValue?: any;
}

export enum FieldType {
  TEXT = 'text',
  PASSWORD = 'password',
  DROPDOWN = 'dropdown',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  TEXTAREA = 'textarea',
  DATEPICKER = 'datepicker',
  INPUTFILE = 'file',
  AUTOCOMPLETE = 'autocomplete'
}

export class FormResult {
  success: boolean;
  data: any;
}
