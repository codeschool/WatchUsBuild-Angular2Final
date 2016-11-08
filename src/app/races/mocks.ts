import { Race } from './race';

export const RACES: Race[] = [{
  "id": 1,
  "name": "Daytona Thunderdome",
  "date": new Date('2512-01-04T14:00:00'),
  "about": "Race through the ruins of an ancient Florida battle arena.",
  "entryFee": 3200,
  "isRacing": false,
  "image": "/images/daytona_thunderdome.jpg",
  "imageDescription": "Race track with laser lanes"
}, {
  "id": 2,
  "name": "San Francisco Ruins",
  "date": new Date('2512-07-03T20:00:00'),
  "about": "Drift down the streets of a city almost sunk under the ocean.",
  "entryFee": 4700,
  "isRacing": false,
  "image": "/images/san_francisco_ruins.jpg",
  "imageDescription": "Golden Gate Bridge with lasers"
}, {
  "id": 3,
  "name": "New York City Skyline",
  "date": new Date('2512-07-12T21:00:00'),
  "about": "Fly between buildings in the electronic sky.",
  "entryFee": 4300,
  "isRacing": true,
  "image": "/images/new_york_city_skyline.jpg",
  "imageDescription": "Bridge overlooking New York City"
}];
