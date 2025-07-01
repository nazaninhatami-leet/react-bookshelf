function Book({ author, title, img, children }) {
  return (
    <div className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h2>{author}
      </h2>
      {children}
    </div>
  );
}

export default Book;