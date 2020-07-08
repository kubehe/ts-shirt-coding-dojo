import { v4 as uuid } from "uuid";
import {
  Product,
  Color,
  Size,
  Currency,
  Price,
  Cart,
  Variant,
  LineItem
} from "./types";

export const generateProductList = (): Product[] => {
  return [
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
        {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
              {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
        {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
              {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
        {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
              {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
        {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
              {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #",
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.pink,
            size: Size.S,
            price: { amount: 99.5, currency: Currency.GBP }
          }
        ]
      },
  ]

};