import Card from "./Card";

function Projects() {
  return (
    <div id="Projects">
      <div class="card-container">
        <Card
          image_source="assets/donuts.png"
          title="Graphical engine"
          description="Graphical engine for complex 3D drawings (Ba1 Computer science)"
          url="https://github.com/joachimverleysen/Graphics-Engine"
        />
        <Card
          image_source="assets/chessboard.png"
          title="Chess engine"
          description="This chess engine C++ project during my first year of Computer
              Science at the University of Antwerp.
            "
          url="https://github.com/joachimverleysen/chess-engine"
        />
        <Card
          image_source="assets/mips-game.png"
          title="Assembly game"
          description="Simple maze game, coded in MIPS assembly language"
          url="https://github.com/joachimverleysen/MIPS-game"
        />
      </div>
    </div>
  );
}

export default Projects;
