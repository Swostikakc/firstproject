// src/assets/assets.js
import placeholderimage from './placeholderimage.png'
import logo from './logo.png'
import favicon from './favicon.png'
import addicon from './addicon.png'
import instagramicon from './instagramicon.png'
import searchicon from './searchicon.png'
import menuicon from './menuicon.png'
import closeicon from './closeicon.png'
import heroimage from './heroimage.png'
import calendericon from './calendericon.png'
import bookingicon from './bookingicon.png'
import locationicon from './locationicon.png'
import staricon from './staricon.png'
import aboutimg from './aboutimg.png'


// veneus images
import silverplate from './silverplate.png'
import whitehouse from './whitehouse.png'
import bhamarkot from './bhamarkot.png'
import durbarthok from './durbarthok.png'
import shuvam from './shuvam.png'
import namaste from './namaste.png'
import busybee from './busybee.png'
import bindhabasini from './bindhabasini.png'
import himalayan from './himalayan.png'
import galaxy from './galaxy.png'
import kantipur from './kantipur.png'
import baral from './baral.png'
import centralvilla from './centralvilla.png'


//events img
import weddingevent from './weddingevent.png'
import socialevent from './socialevent.png'
import exhibitionevent from './exhibitionevent.png'
import liveevent from './liveevent.png'
import corporateevent from './corporateevent.png'
import otherevent from "./otherevent.png";

import aisha from './aisha.png'
import pooja from './pooja.png'
import sandeep from './sandeep.png'
import ramesh from './ramesh.png'


export const assets = {
  logo,
  favicon,
  addicon,
  instagramicon,
  searchicon,
  menuicon,
  closeicon,
  heroimage,
  calendericon,
  bookingicon,
  locationicon,
  staricon,
  placeholderimage,
  // Event images
  silverplate,
  whitehouse,
  bhamarkot,
  durbarthok,
  shuvam,
  namaste,
  busybee,
  bindhabasini,
  himalayan,
  galaxy,
  kantipur,
  baral,
  centralvilla,


  // Event type images
  weddingevent,
  socialevent,
  exhibitionevent,
  liveevent,
  corporateevent,
  otherevent,

  pooja,
  ramesh,
  sandeep,
  aisha,
  aboutimg,
}

export const locations = [
  "Lakeside",
  "Chauthe",
  "Newroad",
  "Rambazar",
  "Budibazar",
  "Lekhnath",
  "Srijana Chowk",
  "Bastola Thar"
]
export const eventsDummyData = [
  {
    _id: '1',
    name: 'Silver Plate Party Palace',
    location: 'Bastola Thar - 9, Pokhara',
    images: [silverplate],
    price: 65000,
    coordinates: { lat: 28.21600, lng: 83.99100 } // source: official contact page (approx exact). 
  },
  {
    _id: '2',
    name: 'White House Party Palace',
    location: 'Srijana Chowk, Pokhara-8',
    images: [whitehouse],
    price: 55000,
    coordinates: { lat: 28.21450, lng: 83.99250 } // source: official contact / business listings (neighborhood coords)
  },
  {
    _id: '3',
    name: 'Bhamarkot Party Palace',
    location: 'Ram Bazaar / Milan Tol, Pokhara-10',
    images: [bhamarkot],
    price: 58000,
    coordinates: { lat: 28.20000, lng: 84.00139 } // source: RoyEvent / Trek.zone listing (given as 28°12'0"N, 84°0'5"E).
  },
  {
    _id: '4',
    name: 'Durbarthok Banquet / Party Palace',
    location: 'Durbarthok / Darbarthok Marg (Newroad / Chipledhunga), Pokhara',
    images: [durbarthok],
    price: 52000,
    coordinates: { lat: 28.21380, lng: 83.98950 } // source: Durbarthok venue listings / Instagram referencing Durbarthok Marg (approx)
  },
  {
    _id: '5',
    name: 'Shuvam (Shubham) Party Palace',
    location: 'Lekhnath-7 (Talchowk / Begnas area), Pokhara',
    images: [shuvam],
    price: 50000,
    coordinates: { lat: 28.16318, lng: 84.05937 } // source: MapCarta / local listing (Lekhnath area) — exact for Shubham entry there
  },
  {
    _id: '6',
    name: 'Namaste Party Palace',
    location: 'Sundari Bazar / Budibazar area, Pokhara',
    images: [namaste],
    price: 48000,
    coordinates: { lat: 28.20980, lng: 83.98890 } // source: social/listing pages referencing Sundari Bazar / Budibazar area (approx)
  },
  {
    _id: '7',
    name: 'Busy Bee Resort (Event Hall)',
    location: 'Street 15, Lakeside Rd, Pokhara',
    images: [busybee],
    price: 70000,
    coordinates: { lat: 28.20500, lng: 83.98100 } // source: official Busy Bee Resort site / booking pages (sourced)
  },
  {
    _id: '8',
    name: 'Bindabasini Party Palace',
    location: 'Bindabasini (Lakeside area), Pokhara',
    images: [bindhabasini],
    price: 56000,
    coordinates: { lat: 28.21300, lng: 83.98350 } // source: BiheBazaar / Facebook business listing (neighborhood coord, verify on map)
  },
  {
    _id: '9',
    name: 'Himalayan Party Hall',
    location: 'Lakeside / South Lakeside area, Pokhara',
    images: [himalayan],
    price: 75000,
    coordinates: { lat: 28.20650, lng: 83.98270 } // source: local listings / hotel/hall indexes (approx)
  },
  {
    _id: '10',
    name: 'Galaxy Party Palace (Galaxy Banquet)',
    location: 'Birauta-17 / Birauta area, Pokhara',
    images: [galaxy],
    price: 60000,
    coordinates: { lat: 28.18861, lng: 83.96944 } // source: WikiMapia / local place listing (given coords ~ 28°11'19"N 83°58'10"E)
  },
  {
    _id: '11',
    name: 'Pokhara Kantipur Party Palace',
    location: 'Buddha Chowk / central Pokhara',
    images: [kantipur],
    price: 58000,
    coordinates: { lat: 28.20444, lng: 83.99500 } // source: BiheBazaar / local listing (Buddha Chowk neighborhood; approximate)
  },
  {
    _id: '12',
    name: 'Baral Party Palace & Catering',
    location: 'Birauta / Pumdikot area (Lekhnath), Pokhara',
    images: [baral],
    price: 52000,
    coordinates: { lat: 28.18750, lng: 83.97000 } // source: MapCarta / business listings (approx Birauta / Pumdikot)
  },
  {
    _id: '13',
    name: 'Central Villa (Event Hall)',
    location: 'Central Villa, Pokhara (city center area)',
    images: [centralvilla],
    price: 64000,
    coordinates: { lat: 28.21350, lng: 83.98500 } // source: Central Villa social pages / local listings (approx)
  }
];
