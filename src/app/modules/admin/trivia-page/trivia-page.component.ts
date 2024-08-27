import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trivia-page',
  templateUrl: './trivia-page.component.html',
  styleUrl: './trivia-page.component.css',
})
export class TriviaPageComponent {
  triviaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.triviaForm = this.fb.group({
      questionText: ['', Validators.required],
      options: this.fb.array([this.createOption()]),
    });
  }

  ngOnInit(): void {}

  get options(): FormArray {
    return this.triviaForm.get('options') as FormArray;
  }

  createOption(): FormGroup {
    return this.fb.group({
      text: ['', Validators.required],
      isCorrect: [false],
    });
  }

  addOption(): void {
    this.options.push(this.createOption());
  }

  removeOption(index: number): void {
    if (this.options.length > 1) {
      this.options.removeAt(index);
    }
  }

  submitQuestion(): void {
    if (this.triviaForm.valid) {
      // this.triviaService.createQuestion(this.triviaForm.value).subscribe(response => {
      //   console.log('Pregunta creada', response);
      //   this.triviaForm.reset();
      //   this.options.clear();
      //   this.addOption(); // Asegúrate de que haya al menos una opción
      // });
      console.log('Pregunta creada');
    }
  }
}
