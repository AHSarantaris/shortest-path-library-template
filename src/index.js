/**
 * @module index
 * @description Entry point for the shortest-path-exercise npm package.
 *
 * Exports the core building blocks for implementing a pathfinding library
 * for computer games:
 * - {@link module:BinaryMatrixGraph BinaryMatrixGraph} — a grid graph backed
 *   by a 2D binary matrix.
 * - {@link module:shortestPathBFS shortestPathBFS} — breadth-first search for
 *   the shortest path in an unweighted graph.
 *
 * Example usage:
 * ```js
 *   import { BinaryMatrixGraph, shortestPathBFS } from 'shortest-path-exercise';
 *
 *   
 *   const grid = [
 *       [0, 1, 0], 
 *       [0, 0, 0],
 *       [1, 0, 0]
 *   ];
 *   const graph = new BinaryMatrixGraph(grid, 3, 3);
 *   const path = shortestPathBFS([0, 0], [2, 2], graph);
 * ```
 */

export { BinaryMatrixGraph } from './BinaryMatrixGraph.js';
export { shortestPathBFS } from './shortestPathBFS.js';
