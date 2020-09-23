import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-image-view',
  templateUrl: './product-image-view.component.html',
  styleUrls: ['./product-image-view.component.scss']
})
export class ProductImageViewComponent implements OnInit {
  images: any[];
  responsiveOptions: any[];
  displayBasic = false;

  constructor() { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        showThumbnails:false
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        showThumbnails:false
      }
    ];
    this.images = [
      "https://cdn.vox-cdn.com/thumbor/zN9XNxOlcxhbGaf2iK7LhjsFQhE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/8939679/twarren_porschebookone.jpg",
      "https://blogs.ibo.org/files/2019/08/Online-library-or-E-learning-concept.-Open-laptop-and-book-compilation.-Stock-Image-1200x800.jpg",
      "https://cnet4.cbsistatic.com/img/r2GImuQ5xojvxrHBipO7egIZdsU=/1200x675/2019/08/07/616e4c31-952b-4fd2-9c65-f087d26665e5/013-samsung-galaxy-note-book-s.jpg"
    ]
  }

}
