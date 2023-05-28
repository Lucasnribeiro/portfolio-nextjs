'use strict';

/**
 * external-url router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::external-url.external-url');
