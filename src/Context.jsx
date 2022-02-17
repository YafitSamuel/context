import React from "react";

const comments = [
  {
    Name: "yafit",
    Text: "BGFJ",
    Views: 6,
  },
  { Name: "samuel", Text: "tttt", Views: 2 },

  {
    Name: "sara",
    Text: "tgd",
    Views: 23,
  },
  {
    Name: "tamrat",
    Text: "BGFdsfJ",
    Views: 46,
  },
];

export const CommentsContext = React.createContext(comments);

function CommentsProvider(props) {
  console.log(props);
  return (
    <CommentsContext.Provider value={comments}>
      {props.children}
    </CommentsContext.Provider>
  );
}

export default CommentsProvider;
