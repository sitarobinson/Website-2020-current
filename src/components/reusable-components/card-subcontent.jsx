
export default function CardSubcontent(props) {
  return (
    <section>
      <h2 className="flex-center">{props.header}</h2>
      <div>{props.textcontent}</div>
    </section>
  );
}
