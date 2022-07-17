import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  searchTerm: string = '';
  wearable_types: string[] = [
    'Hats',
    'Tops',
    'Bottoms',
    'Shoes',
    'Accessories',
  ];

  constructor() { }
        'data:image/jpeg;base64,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',
      tag: 'Shoes',
    },
    {
      base64String:
        'data:image/jpeg;base64,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',
      tag: 'Shoes',
    },
  ];

  filtered_wearables: { base64String: string; tag: string }[] = this.wearables;

  constructor() {}

  ngOnInit(): void {}

  search(query: string) {
    this.searchTerm=query;
    
    switch (query) {
      case 'Hats':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Hat'
        );
        console.log(this.filtered_wearables)
        break;
      case 'Shoes':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Shoes'
        );
        break;
      case 'Tops':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Top'
        );
        break;
      case 'Bottoms':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Bottom'
        );
        break;
      case 'Accessories':
        this.filtered_wearables = this.wearables.filter((wearable) =>
          wearable.tag === 'Accessory'
        );
        break;
    }
  }
}
