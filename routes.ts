/**
 * routes.js
 *
 * This module defines the public routes for the application.
 *
 * The public routes are the paths that can be accessed without authentication.
 *
 * This is useful for defining open areas of your web application, such as the home page, login page, etc.
 */

/**
 * An array of public routes
 *
 * These routes are accessible without any authentication.
 *
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An array of routes that require authentication
 *
 * These routes are only accessible if the user is authenticated.
 *
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register', '/auth/error'];

/**
 * The prefix for API authentication routes
 *
 * Routes that start with this prefix are considered API authentication routes.
 *
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logging in
 *
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
