'use strict';

/**
 * external-url service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::external-url.external-url');
