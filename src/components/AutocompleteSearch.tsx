import React, { useState, useCallback, useEffect } from "react";
// import axios from "axios";

interface IProps {
  url: string;
  keywordList: string[];
}

const AutocompleteSearch = (props: any) => {
  console.log("AutocompleteSearch rendered");
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [resultList, setResultList] = useState<string[]>([]);

  const onInputChange = (e: any) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  // useEffect(() => {
  //   axios
  //     .get(`${props.url}`)
  //     .then(reponse => {
  //       console.log(reponse.data);
  //       const fetchedList = reponse.data;
  //       setKeywordList(fetchedList);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    setKeywordList(props.keywordList);
  });

  console.log("keywordList", keywordList);

  useEffect(() => {
    const newList = keywordList.filter(k => k.indexOf(keyword) > -1);
    setResultList(newList);
  }, [keyword]);

  return (
    <div className="autocomplete-search-container">
      <input type="text" value={keyword} onChange={onInputChange} />
      {resultList &&
        keyword !== "" &&
        resultList.map((result, i) => <button key={i}>{result}</button>)}
    </div>
  );
};

export default React.memo(AutocompleteSearch);
