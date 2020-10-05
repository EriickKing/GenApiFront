import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-newmodel',
  templateUrl: './newmodel.component.html',
  styleUrls: ['./newmodel.component.scss']
})
export class NewmodelComponent implements OnInit {
  modelForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form();
    console.log();
  }

  form() {
    this.modelForm = new FormGroup({
      titleModel: new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      model: new FormArray([this.addModelGroup()])
    })
  }

  addModelGroup() {
    return new FormGroup({
      keyModel: new FormControl(null, Validators.required),
      typeArray: new FormArray([this.addTypes()])
    })
  }

  addTypes() {
    return new FormGroup({
      typeModal: new FormControl("type", Validators.required),
      answerType: new FormControl(null, Validators.required)
    })
  }


  addGroupModel() {
    const control = <FormArray>this.modelForm.get('model')
    control.push(this.addModelGroup())
  }

  getTypeDate(i,x) {
    console.log(this.modelForm.get("model")['controls'][i].get('typeArray')['controls'][x].controls.typeModal.value);
  }

  addGroupTypes(index) {
    const control = <FormArray>this.modelForm.get('model')['controls'][index]['controls']['typeArray']
    control.push(this.addTypes())
  }

  addKey() {
    // (<FormArray>this.modelForm.get('keyModel')).push(control)
    // const control = <FormArray>this.modelForm.controls.
    // const control = <FormArray>this.modelForm.controls.arrayModel['controls'][0].get('keyModel');
    // control.push(new FormControl(null, Validators.required))
    // this.addType();
  }
  // addType() { 
  //   const control = <FormArray>this.modelForm.controls.arrayModel['controls'][0].get('typeModel');
  //   control.push(new FormControl(null, Validators.required))

  // }


  formm() {
    console.log(this.modelForm.value);
  }



}
