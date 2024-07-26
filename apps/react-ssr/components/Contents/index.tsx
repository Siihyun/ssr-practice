import { ContentStyle } from "./Contents.css";

interface Props {
  contents: any[];
}

export const Contents = ({ contents }: Props) => {
  return (
    <ul className={ContentStyle}>
      {contents.map((content) => (
        <li key={content.first_name}>{content.first_name}</li>
      ))}
    </ul>
  );
};
