import React, { useEffect, useState } from "react";

function Fetch(url) {
  const [comment, setComment] = useState();
  const [load, setLoad] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setComment(json));
  }, []);
  const [site, setSite] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setSite(json));
  }, []);
  const [talk, setTalk] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setTalk(json));
  }, []);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setTalk(json), setLoad(false));
    }, 2500);
  });
  return { comment, site, talk, load };
}

export default Fetch;
