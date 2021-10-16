import axios from 'axios';

export const getBreeds = () => axios.get("https://api.thedogapi.com/v1/breeds");