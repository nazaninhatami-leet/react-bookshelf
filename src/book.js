function Book({ author, title, img, children, id }) {
  return (
    <div className="book">
      <span className="index">{`# ${id}`}</span>
      <img src={img} alt={title} />
      <h1 className="title">{title}</h1>
      <h2 className="author">{author}</h2>
      {children}
    </div>
  );
}

export default Book;