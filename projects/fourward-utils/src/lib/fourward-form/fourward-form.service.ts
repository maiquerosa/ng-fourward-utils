import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FieldForm } from './field-form';

@Injectable({
  providedIn: 'root'
})
export class FourwardFormService {
  /* Recriar os campos do formulario */
  private recriateFormSubject = new Subject<FieldForm[]>();
  public recriateFormFields$ = this.recriateFormSubject.asObservable();

  /* Subjects usado para avisar o fourwardForm que uma ação foi tomada no component Pai */
  private submitFormAction1Subject = new Subject<string>();
  private submitFormAction2Subject = new Subject<string>();
  private submitFormAction3Subject = new Subject<string>();

  /* Subjects para enviar os dados e o status da validação  do formulario */
  private sendDataFormAction1 = new Subject<any>();
  private sendDataFormAction2 = new Subject<any>();
  private sendDataFormAction3 = new Subject<any>();

  /* Observables que o fouwardForm está "Escutando" para realizar a ação de enviar os dados e o
  status de validação do formulario */
  public submitDataFormAction1$ = this.submitFormAction1Subject.asObservable();
  public submitDataFormAction2$ = this.submitFormAction2Subject.asObservable();
  public submitDataFormAction3$ = this.submitFormAction3Subject.asObservable();

  /* Observables que os componentes PAI devem "Escutar" para receber os dados e o status de
  validação do fouwardForm
  */
  public sendFormDataObs1$ = this.sendDataFormAction1.asObservable();
  public sendFormDataObs2$ = this.sendDataFormAction2.asObservable();
  public sendFormDataObs3$ = this.sendDataFormAction3.asObservable();

  constructor() {}

  /* Métodos utilizados para "TRIGGAR" os eventos do component PAI para o fouwardForm
   Component pai deve "Chamar" este método na execução de uma ação da tela ex: Click em botões, etc...
  */
  public dataFormAction1(senderComponent?: string): void {
    this.submitFormAction1Subject.next(senderComponent);
  }

  public dataFormAction2(senderComponent?: string): void {
    this.submitFormAction2Subject.next(senderComponent);
  }

  public dataFormAction3(senderComponent?: string): void {
    this.submitFormAction3Subject.next(senderComponent);
  }

  /* Métodos utilizados para "TRIGGAR" os eventos de envio dos dados e status do fouwardForm  para o  component PAI
    Estes métodos são apenas do componente fouwardForm e não devem ser chamados em outros componentes
  */
  public sendFormData1(formData: any): void {
    this.sendDataFormAction1.next(formData);
  }

  public sendFormData2(formData: any): void {
    this.sendDataFormAction2.next(formData);
  }

  public sendFormData3(formData: any): void {
    this.sendDataFormAction3.next(formData);
  }

  /* Recriando formulario em Modo lazy */
  public recriateForm(fieldForms: FieldForm[]) {
    this.recriateFormSubject.next(fieldForms);
  }
}
