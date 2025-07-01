function Book({ author, title, img, children, id }) {
  return (
    <div className="book">
      <span className="index">{`# ${id}`}</span>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h2>{author}
      </h2>
      {children}
    </div>
  );
}

export default Book;