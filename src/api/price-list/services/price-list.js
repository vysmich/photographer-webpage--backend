'use strict';

/**
 * price-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-list.price-list');
