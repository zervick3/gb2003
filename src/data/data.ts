import type { Mobile, Turtle } from './types';

export async function getMobilesData(): Promise<Mobile[]> {
  const data = await import('../data/json/mobiles.json');
  const mobiles = data.default as Mobile[];
  return mobiles.map(mobile => ({
    ...mobile,
    name: mobile.slug
  }));
}

export async function getTurtlesData(): Promise<Turtle[]> {
  const data = await import('../data/json/turtledata.json');
  const turtles = data.default as Turtle[];
  return turtles.map(turtle => ({
    ...turtle,
    name: turtle.slug
  }));
}