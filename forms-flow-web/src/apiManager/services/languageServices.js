import { setSelectLanguages } from "../../actions/languageSetAction";

export const fetchSelectLanguages = () => {
  return (dispatch) => {
    return fetch(`${process.env.PUBLIC_URL}/languageConfig/languageData.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setSelectLanguages(data));
      });
  };
};
