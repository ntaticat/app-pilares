import { Component } from '@angular/core';
import { ICollectible } from '../../menu/collectibles-page/collectibles-page.component';

@Component({
  selector: 'app-collectible-new-page',
  templateUrl: './collectible-new-page.component.html',
  styleUrl: './collectible-new-page.component.css',
})
export class CollectibleNewPageComponent {
  newCollectible: ICollectible = {
    name: '',
    imageUrl: '',
    unlocked: false,
  };

  constructor() {}

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Aquí puedes agregar la lógica para cargar la imagen al servidor o convertirla en base64
      const reader = new FileReader();
      reader.onload = () => {
        this.newCollectible.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    // Lógica para enviar el nuevo coleccionable al backend o servicio
    console.log('Nuevo coleccionable registrado:', this.newCollectible);
    // Puedes limpiar el formulario después del registro exitoso
    this.newCollectible = { name: '', imageUrl: '', unlocked: false };
  }
}
