import { url } from '../utils/url.js';
import render from './render.js';

const fetchScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  render(result);
};

export default fetchScores;