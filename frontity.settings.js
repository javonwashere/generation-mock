import { truncate } from "fs";

const settings = {
  "name": "gen-mock",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Generation Mock",
      "description": "Generation Mock"
    },
    "adminUrl": "https://wp.generationmock.com/wp-admin/"
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            // [
            //   "LISTINGS",
            //   "/category/property-listings"
            // ],
            // [
            //   "BLOG",
            //   "/category/blog"
            // ],
            // [
            //   "Home",
            //   "/"
            // ],
            // [
            //   "Nature",
            //   "/category/nature/"
            // ],
            // [
            //   "Travel",
            //   "/category/travel/"
            // ],
            // [
            //   "Japan",
            //   "/tag/japan/"
            // ],
            // [
            //   "About Us",
            //   "/about-us/"
            // ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wp.generationmock.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
