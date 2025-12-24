import { Component } from "@angular/core";
import { IProduct } from "./IProduct";

@Component({
  selector: "app-product-list",
  imports: [],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent {
  products: IProduct[] = [
    {
      id: 1,
      title: "Men's Casual T-Shirt",
      price: 199,
      description: "Clothing",
      images: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      ],
      onSale: false,
    },
    {
      id: 2,
      title: "Women's Oversized Hoodie",
      price: 399,
      description: "Clothing",
      images: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      ],
      onSale: true,
    },
    {
      id: 3,
      title: "Men's Slim Fit Jeans",
      price: 550,
      description: "Clothing",
      images: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
      ],
      onSale: false,
    },
    {
      id: 4,
      title: "Women's Denim Jacket",
      price: 650,
      description: "Clothing",
      images: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
      ],
      onSale: true,
    },
    {
      id: 5,
      title: "Men’s Sports Shoes",
      price: 550,
      description: "Shoes",
      images: [
        "https://images.unsplash.com/photo-1514996937319-344454492b37",
        "https://images.unsplash.com/photo-1530845641455-3d412f6cca45",
      ],
      onSale: true,
    },
    {
      id: 6,
      title: "Women's Running Sneakers",
      price: 499,
      description: "Shoes",
      images: [
        "https://images.unsplash.com/photo-1514996937319-344454492b37",
        "https://images.unsplash.com/photo-1528701800489-20be3c2a8c32",
      ],
      onSale: false,
    },
    {
      id: 7,
      title: "Men's Casual T-Shirt",
      price: 199,
      description: "Clothing",
      images: [
        "https://images.unsplash.com/photo-1514996937319-344454492b37",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      ],
      onSale: false,
    },
    {
      id: 8,
      title: "Women's Oversized Hoodie",
      price: 399,
      description: "Clothing",
      images: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      ],
      onSale: false,
    },
    {
      id: 9,
      title: "Men's Slim Fit Jeans",
      price: 550,
      description: "Clothing",
      images: [
        "https://images.unsplash.com/photo-1514996937319-344454492b37",
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
      ],
      onSale: false,
    },
    {
      id: 10,
      title: "Women's Denim Jacket",
      price: 650,
      description: "Clothing",
      images: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
      ],
      onSale: false,
    },
    {
      id: 11,
      title: "Men’s Sports Shoes",
      price: 550,
      description: "Shoes",
      images: [
        "https://images.unsplash.com/photo-1514996937319-344454492b37",
        "https://images.unsplash.com/photo-1530845641455-3d412f6cca45",
      ],
      onSale: false,
    },
    {
      id: 12,
      title: "Women's Running Sneakers",
      price: 499,
      description: "Shoes",
      images: [
        "https://images.unsplash.com/photo-1514996937319-344454492b37",
        "https://images.unsplash.com/photo-1528701800489-20be3c2a8c32",
      ],
      onSale: false,
    },
  ];

  currentProduct: IProduct = {} as IProduct;

  // Or Call this onClik View to Save Product here (Another way)
  showDetails(product: IProduct): void {
    this.currentProduct = product;
  }
}
