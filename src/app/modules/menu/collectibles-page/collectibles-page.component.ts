import { Component } from '@angular/core';

export interface ICollectible {
  id?: number;
  name: string;
  imageUrl: string;
  unlocked: boolean;
}

@Component({
  selector: 'app-collectibles-page',
  templateUrl: './collectibles-page.component.html',
  styleUrl: './collectibles-page.component.css',
})
export class CollectiblesPageComponent {
  collectibles: ICollectible[] = [
    {
      name: 'Coleccionable 1',
      imageUrl: 'https://img.artpal.com/610392/5-23-9-20-8-50-20m.jpg',
      unlocked: true,
    },
    {
      name: 'Coleccionable 2',
      imageUrl:
        'https://pics.craiyon.com/2023-08-04/218b0ec951474bf9b3a5eed5323edf84.webp',
      unlocked: true,
    },
    {
      name: 'Coleccionable 3',
      imageUrl:
        'https://lh7-us.googleusercontent.com/2Xsq5BZ7_GICIZjwzrctPPKXrKGvSl0FymprOWMzvlV90KZHgpXOdmsdCXdjEo6NDLM1TWCM1_xc0gzJ6Rs6vmCOWY1-sWBH5muPQPpjPXOqdwUtJRFptG_c6gQt1-cEFeQcveSH-8dXj19tL25g38Q',
      unlocked: false,
    },
    {
      name: 'Coleccionable 4',
      imageUrl:
        'https://www.creativefabrica.com/wp-content/uploads/2020/08/25/Cute-Penguin-Illustration-Graphics-5116637-1.png',
      unlocked: false,
    },
    {
      name: 'Coleccionable 5',
      imageUrl:
        'https://aiartshop.com/cdn/shop/files/cute-baby-penguin-celebrating-christmas-ai-artwork-807.webp?v=1707025731',
      unlocked: true,
    },
    // Añadir más coleccionables según sea necesario
  ];

  constructor() {}

  ngOnInit(): void {}
}
