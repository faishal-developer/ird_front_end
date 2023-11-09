import { apiEndPoints } from "@/apiService/apiservice";

export const sortByCategories = (posts: any, subCategories: any) => {
  let result: any = {};
  subCategories.forEach((el: any) => {
    result[el.title] = [];
    posts.forEach((item: any) => {
      if (item.subcat_id === el._id) {
        result[el.title].push(item);
      }
    });
  });
  return result;
};

export const fetchData = async (endPoints: string) => {
  const result = await fetch(apiEndPoints.baseUrl + endPoints);
  console.log(apiEndPoints.baseUrl + endPoints, " tallla");
  return await result.json();
};

export const fetchSubCategories = async (endPoints: string, body: any) => {
  const result = await fetch(apiEndPoints.baseUrl + endPoints, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await result.json();
};
