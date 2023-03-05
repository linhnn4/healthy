import { client } from './axios';

const fetchColumn = () => client.get(`columns`);
const fetchAchievement = () => client.get(`achievement/1`);
const fetchBodyGraph = () => client.get(`body-graph`);
const fetchMeals = () => client.get(`meals`);
const fetchExercies = () => client.get(`exercises`);
const fetchDiaries = () => client.get(`diaries`);
const login = () => client.get(`users/1`);

const healthyService = {
  fetchColumn,
  login,
  fetchAchievement,
  fetchBodyGraph,
  fetchMeals,
  fetchExercies,
  fetchDiaries,
};

export default healthyService;
