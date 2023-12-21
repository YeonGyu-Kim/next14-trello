type BoardProps = {
  title: string;
  id: string;
};

export default function Board({ title, id }: BoardProps) {
  return <div>Boart title: {title}</div>;
}
