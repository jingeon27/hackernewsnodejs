import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const GetPost = () => {
  return useQuery(["posts"], async () => {
    const { data } = await axios.get("https://api.hnpwa.com/v0/news/1.json");
    return data;
  });
};
