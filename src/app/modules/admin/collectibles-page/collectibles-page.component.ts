import { Component } from '@angular/core';
import { ICollectible } from '../../menu/collectibles-page/collectibles-page.component';

@Component({
  selector: 'app-collectibles-page',
  templateUrl: './collectibles-page.component.html',
  styleUrl: './collectibles-page.component.css',
})
export class CollectiblesPageComponent {
  collectibles: ICollectible[] = [
    {
      id: 1,
      name: 'Coleccionable 1',
      imageUrl: 'https://img.artpal.com/610392/5-23-9-20-8-50-20m.jpg',
      unlocked: true,
    },
    {
      id: 2,
      name: 'Coleccionable 2',
      imageUrl:
        'https://pics.craiyon.com/2023-08-04/218b0ec951474bf9b3a5eed5323edf84.webp',
      unlocked: true,
    },
    {
      id: 3,
      name: 'Coleccionable 3',
      imageUrl:
        'https://lh7-us.googleusercontent.com/2Xsq5BZ7_GICIZjwzrctPPKXrKGvSl0FymprOWMzvlV90KZHgpXOdmsdCXdjEo6NDLM1TWCM1_xc0gzJ6Rs6vmCOWY1-sWBH5muPQPpjPXOqdwUtJRFptG_c6gQt1-cEFeQcveSH-8dXj19tL25g38Q',
      unlocked: false,
    },
    {
      id: 4,
      name: 'Coleccionable 4',
      imageUrl:
        'https://www.creativefabrica.com/wp-content/uploads/2020/08/25/Cute-Penguin-Illustration-Graphics-5116637-1.png',
      unlocked: false,
    },
    {
      id: 5,
      name: 'Coleccionable 5',
      imageUrl:
        'https://aiartshop.com/cdn/shop/files/cute-baby-penguin-celebrating-christmas-ai-artwork-807.webp?v=1707025731',
      unlocked: true,
    },
    // Añadir más coleccionables según sea necesario
  ];
  filteredCollectibles: ICollectible[] = [];
  searchTerm: string = '';

  constructor() {}

  ngOnInit(): void {
    this.filteredCollectibles = this.collectibles; // Inicializar con todos los coleccionables
  }

  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredCollectibles = this.collectibles;
    } else {
      this.filteredCollectibles = this.collectibles.filter((collectible) =>
        collectible.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  deleteCollectible(id: number): void {
    // Implementar lógica para eliminar el coleccionable
    console.log('Coleccionable eliminado con ID:', id);
    this.collectibles = this.collectibles.filter((c) => c.id !== id);
    this.onSearch(); // Actualizar la lista después de eliminar
  }
}
