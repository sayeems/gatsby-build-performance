/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require("path");
require("dotenv").config({
  path: path.resolve(process.cwd(), ".env.local"),
});

// Use URL from .env if it exists, otherwise fall back on the
// Pantheon CMS endpoint
const url =
  process.env.WPGQL_PATH ||
  `https://${process.env.PANTHEON_CMS_ENDPOINT}/graphql`;
const api = process.env.WP_BE || `https://${process.env.PANTHEON_CMS_ENDPOINT}`;

const HTTPS = process.env.HTTPS || true;

const consumer = process.env.WOO_CONSUMER || "none";
const secret = process.env.WOO_SECRET || "none";

module.exports = {
  siteMetadata: {
    title: `build-performance`,
    siteUrl: `http://localhost:8000`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url,
        schema: {
          requestConcurrency: 10,
          perPage: 20,
          timeout: 600000,
        },
      },
    },
    // {
    //   resolve: "@pasdo501/gatsby-source-woocommerce",
    //   options: {
    //     api, //BE url
    //     verbose: false, // -v
    //     https: HTTPS,
    //     api_keys: {
    //       consumer_key: consumer,
    //       consumer_secret: secret,
    //     },
    //     fields: ["products", "products/attributes"],
    //     query_string_auth: false,
    //     api_version: "wc/v3",
    //     per_page: 100,
    //     // wpAPIPrefix: 'wp-json',
    //     // port: 5000,
    //     // encoding: "utf8"
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
};
