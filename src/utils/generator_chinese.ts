import { CONNECTOR, GEOLOCATION, PARENTHESIS, WORDS } from "../static";

export const chinese_name_generator = (
  parenthesis: boolean,
  connector: boolean,
  geolocation: boolean
) => {
  const parenthesis_idx = Math.floor(Math.random() * PARENTHESIS.length);
  const firstChar = Math.floor(Math.random() * WORDS.length);
  let secondChar = Math.floor(Math.random() * WORDS.length);
  while (firstChar === secondChar) {
    secondChar = Math.floor(Math.random() * WORDS.length);
  }
  return `${parenthesis ? PARENTHESIS[parenthesis_idx][0] : ""}${
    geolocation
      ? GEOLOCATION[Math.floor(Math.random() * GEOLOCATION.length)]
      : WORDS[firstChar]
  }${connector && CONNECTOR[Math.floor(Math.random() * CONNECTOR.length)]}${
    WORDS[secondChar]
  }${parenthesis ? PARENTHESIS[parenthesis_idx][1] : ""}`;
};
