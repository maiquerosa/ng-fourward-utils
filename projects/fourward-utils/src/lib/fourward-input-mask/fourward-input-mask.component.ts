import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const InputType = {
  CPF: 'cpf',
  CNPJ: 'cnpj',
  PHONE: 'phone',
  CURRENCY: 'currency',
  PERCENT: 'percent',
  ZIPCODE: 'zipcode',
  NO_FORMAT: 'noFormat',
  NUMBER: 'number'
};

@Component({
  selector: 'nfu-input-mask',
  templateUrl: './fourward-input-mask.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FourwardInputMaskComponent,
      multi: true
    }
  ]
})
export class FourwardInputMaskComponent implements ControlValueAccessor, OnInit {
  @Input() className: string;
  @Input() type = InputType.CPF;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() id: string;
  @Input() disabled = false;
  @Input() maxLength = 50;
  value = '';
  maskFormatMap: Map<string, (param: any) => string> = new Map();

  propagateOnChange: (value: any) => void;

  ngOnInit(): void {
    this.setDefaultMaxLength();
    this.setFormatMask();
  }

  changeEvent(event: any) {
    this.setDefaultMaxLength();

    let noFormatText = event;

    if (this.type !== InputType.NO_FORMAT) {
      noFormatText = event.replace(/\D/g, '');
    }

    const inputField = document.querySelector('#' + this.id) as HTMLInputElement;

    if (!noFormatText.length) {
      this.value = '';
      inputField.value = '';
      this.propagateOnChange('');
      return;
    }
    this.value = this.maskFormatMap.get(this.type)(noFormatText);
    if (this.type === InputType.CURRENCY || this.type === InputType.PERCENT) {
      let numberValue = this.value.replace('.', '');
      numberValue = numberValue.replace(',', '.');
      this.propagateOnChange(parseFloat(numberValue));
      return;
    }
    this.propagateOnChange(this.value);
  }

  writeValue(obj: string): void {
    if (obj) {
      this.type === InputType.CPF
        ? (this.value = this.formatToCpf(obj))
        : this.type === InputType.CNPJ
        ? (this.value = this.formatToCnpj(obj))
        : this.type === InputType.PHONE
        ? (this.value = this.formatToPhone(obj))
        : this.type === InputType.PHONE
        ? (this.value = this.formatToCurrency(obj.toString()))
        : this.type === InputType.PERCENT
        ? (this.value = this.formatToPercent(obj.toString()))
        : this.type === InputType.ZIPCODE
        ? (this.value = this.formatToZipCode(obj))
        : (this.value = this.formatToNothing(obj));
    } else {
      this.value = '';
    }
  }
  registerOnChange(fn: any): void {
    this.propagateOnChange = fn;
  }
  registerOnTouched(fn: any): void {
    // todo
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private formatToCpf(v: string): string {
    v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
    // de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
  }

  private formatToCnpj(v: string): string {
    v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/, '$1.$2'); // Coloca ponto entre o segundo e o terceiro dígitos
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); // Coloca ponto entre o quinto e o sexto dígitos
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); // Coloca uma barra entre o oitavo e o nono dígitos
    v = v.replace(/(\d{4})(\d)/, '$1-$2'); // Coloca um hífen depois do bloco de quatro dígitos
    return v;
  }

  private formatToPhone(v: string): string {
    v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito

    if (v.length <= 5) {
      v = v.replace(/^(\d{2})(\d{1,3})/, '($1) $2'); // Separa o DDD do telefone
    } else if (v.length > 6 && v.length <= 10) {
      v = v.replace(/(\d{2})(\d{1,4})(\d{1,4})/, '($1) $2-$3'); // Separa o DDD e ajusta os digitos do celular
    } else {
      v = v.replace(/(\d{2})(\d{1,5})(\d{1,4})/, '($1) $2-$3'); // Separa o DDD e ajusta os digitos do celular
    }

    if (v.length === 0) {
      return null;
    }
    return v;
  }

  private formatToCurrency(v: string): string {
    v = v.replace(/\D/g, '');

    if (v.length === 3) {
      v = v.replace(/(\d{1})(\d{2})/, '$1,$2');
    } else if (v.length === 4) {
      v = v.replace(/(\d{2})(\d{2})/, '$1,$2');
    } else if (v.length === 5) {
      v = v.replace(/(\d{3})(\d{2})/, '$1,$2');
    } else if (v.length === 6) {
      v = v.replace(/(\d{1})(\d{3})(\d{2})/, '$1.$2,$3');
    } else if (v.length === 7) {
      v = v.replace(/(\d{2})(\d{3})(\d{2})/, '$1.$2,$3');
    } else if (v.length === 8) {
      v = v.replace(/(\d{3})(\d{3})(\d{2})/, '$1.$2,$3');
    } else if (v.length === 9) {
      v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3,$4');
    } else if (v.length === 10) {
      v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3,$4');
    } else if (v.length === 11) {
      v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3,$4');
    } else if (v.length === 12) {
      v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3.$4,$5');
    } else {
      v = v.replace(/(\d{10,})(\d{2})/, '$1.$2');
    }

    if (v.length === 0) {
      return '0,00';
    }

    return v;
  }

  private formatToPercent(v: string): string {
    v = v.replace(/\D/g, '');
    if (v.length >= 3) {
      v = v.replace(/(\d{1,12})(\d{2})/, '$1,$2');
    }

    if (v.length === 0) {
      return '0';
    }

    return v;
  }

  private formatToNumber(v: string): string {
    v = v.replace(/\D/g, '');
    return v;
  }

  private formatToZipCode(v: string): string {
    v = v.replace(/\D/g, '');

    if (v.length === 3) {
      v = v.replace(/(\d{2})(\d{1})/, '$1.$2');
    } else if (v.length === 4) {
      v = v.replace(/(\d{2})(\d{2})/, '$1.$2');
    } else if (v.length === 5) {
      v = v.replace(/(\d{2})(\d{3})/, '$1.$2');
    } else if (v.length === 6) {
      v = v.replace(/(\d{2})(\d{3})(\d{1})/, '$1.$2-$3');
    } else if (v.length === 7) {
      v = v.replace(/(\d{2})(\d{3})(\d{2})/, '$1.$2-$3');
    } else if (v.length === 8) {
      v = v.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
    }

    if (v.length === 0) {
      return '';
    }

    return v;
  }

  private formatToNothing(v: string): string {
    return v;
  }

  private setDefaultMaxLength(): void {
    if (this.type === InputType.ZIPCODE) {
      this.maxLength = 10;
    }

    if (this.type === InputType.CPF) {
      this.maxLength = 14;
    }

    if (this.type === InputType.CNPJ) {
      this.maxLength = 18;
    }
  }
  private setFormatMask(): void {
    this.maskFormatMap.set(InputType.CPF, text => this.formatToCpf(text));
    this.maskFormatMap.set(InputType.CNPJ, text => this.formatToCnpj(text));
    this.maskFormatMap.set(InputType.PHONE, text => this.formatToPhone(text));
    this.maskFormatMap.set(InputType.NUMBER, text => this.formatToNumber(text));
    this.maskFormatMap.set(InputType.NO_FORMAT, text => this.formatToNothing(text));
    this.maskFormatMap.set(InputType.ZIPCODE, text => this.formatToZipCode(text));
    this.maskFormatMap.set(InputType.CURRENCY, text => this.formatToCurrency(text));
    this.maskFormatMap.set(InputType.PERCENT, text => this.formatToPercent(text));
  }
}
