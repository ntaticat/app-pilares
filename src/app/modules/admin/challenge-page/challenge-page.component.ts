import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface IChallenge {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrl: './challenge-page.component.css',
})
export class ChallengePageComponent implements OnInit {
  challenge: IChallenge = {
    id: '',
    title: '',
    description: '',
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.isEdit = true;
    //   this.knowledgeService
    //     .getKnowledgeById(id)
    //     .subscribe((data: Knowledge) => {
    //       this.knowledge = data;
    //     });
    // }
  }

  onSubmit() {
    // if (this.isEdit) {
    //   this.knowledgeService
    //     .updateKnowledge(this.knowledge.id, this.knowledge)
    //     .subscribe(() => {
    //       this.router.navigate(['/admin/knowledge-list']);
    //     });
    // } else {
    //   this.knowledgeService.createKnowledge(this.knowledge).subscribe(() => {
    //     this.router.navigate(['/admin/knowledge-list']);
    //   });
    // }
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
