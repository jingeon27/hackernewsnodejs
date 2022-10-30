import axios from "axios";
import cheerio from "cheerio";

const getHTML = async (keyword: any) => {
  try {
    return await axios.get(
      "https://www.inflearn.com/courses?s=" + encodeURI(keyword)
    );
  } catch (err) {
    console.log(err);
  }
};
export default getHTML;
