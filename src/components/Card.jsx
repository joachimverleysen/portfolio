function Card({ image_source, title, description, url }) {
  return (
    <div class="card">
      <img src={image_source} alt="image" />
      <div class="card-content">
        <h3>{title}</h3>
        <p> {description}</p>
        <a href={url} class="btn">
          Read more
        </a>
      </div>
    </div>
  );
}

export default Card;
