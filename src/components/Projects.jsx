function Projects() {
  return (
    <div id="Projects">
      <div class="card-container">
        <div class="card">
          <img src="assets/donuts.png" alt="torus drawing" />
          <div class="card-content">
            <h3>Graphical engine</h3>
            <p>
              {" "}
              Graphical engine for complex 3D drawings (Ba1 Computer science)
            </p>
            <a
              href="https://github.com/joachimverleysen/Graphics-Engine"
              class="btn"
            >
              Read more
            </a>
          </div>
        </div>
        <div class="card">
          <img src="assets/chessboard.png" alt="Chessboard" />
          <div class="card-content">
            <h3>Chess engine</h3>
            <p>
              {" "}
              This chess engine C++ project during my first year of Computer
              Science at the University of Antwerp.
            </p>
            <a
              href="https://github.com/joachimverleysen/chess-engine"
              class="btn"
            >
              Read more
            </a>
          </div>
        </div>
        <div class="card">
          <img src="./assets/mips-game.png" alt="Mips game" />

          <div class="card-content">
            <h3>Asssembly game</h3>
            <p> Simple maze game, coded in MIPS assembly language</p>
            <a href="https://github.com/joachimverleysen/MIPS-game" class="btn">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
