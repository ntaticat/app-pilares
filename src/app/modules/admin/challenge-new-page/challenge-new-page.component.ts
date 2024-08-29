import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ChallengesService,
  IChallenge,
} from '../../../data/services/challenges.service';

@Component({
  selector: 'app-challenge-new-page',
  templateUrl: './challenge-new-page.component.html',
  styleUrl: './challenge-new-page.component.css',
})
export class ChallengeNewPageComponent {
  challenge: IChallenge = {
    id: 0,
    title: '',
    content: '',
  };

  isEdit: boolean = false;

  editorConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline'], // toggled buttons
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ align: [] }],
        ['link', 'image', 'video'], // Insert options
        ['clean'], // remove formatting button
      ],
    },
    handlers: {
      image: this.imageHandler.bind(this),
      // video: this.videoHandler.bind(this),
    },
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengesService: ChallengesService
  ) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   // this.isEdit = true;
    //   this.challengesService
    //     .getChallengeById(Number(id))
    //     .subscribe((data: IChallenge) => {
    //       this.challenge = data;
    //     });
    // }
  }

  onSubmit() {
    console.log(this.challenge);
    this.challengesService.createChallenge(this.challenge).subscribe(() => {
      this.router.navigate(['admin', 'challenges']);
    });
  }

  imageHandler() {
    // const input = document.createElement('input');
    // input.setAttribute('type', 'file');
    // input.setAttribute('accept', 'image/*');
    // input.click();
    // input.onchange = async () => {
    //   const file = input.files ? input.files[0] : null;
    //   if (file) {
    //     const formData = new FormData();
    //     formData.append('image', file);
    //     // Realizar la carga de la imagen al servidor y obtener la URL
    //     const response = await this.uploadImage(formData);
    //     if (response && response.url) {
    //       const range = this.quill.getSelection();
    //       this.quill.insertEmbed(range.index, 'image', response.url);
    //     }
    //   }
    // };
  }

  // Método para manejar la carga de la imagen
  async uploadImage(formData: FormData): Promise<any> {
    // Lógica para cargar la imagen a tu servidor y obtener la URL
    // Por ejemplo, una petición HTTP:
    // return this.http.post('http://tu-api.com/upload', formData).toPromise();
  }
}
