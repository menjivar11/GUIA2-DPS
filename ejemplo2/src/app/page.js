import styles from "./page.module.css";
const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Y sus mejores jugadores</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h2 className={styles.nameclub}>{equipo.nombre}</h2>
          <ul >
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <br></br>
                <img src={jugador.imagen} alt={jugador.nombre} />
                <p>Altura: {jugador.Altura}m <br></br> Peso:
                  {jugador.Peso}Kg</p>
                  <br></br>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        { "id": 1, "nombre": "Jude Bellingham", "Altura": "1.86", "Peso": "75", "imagen": "https://img.a.transfermarkt.technology/portrait/header/581678-1693987944.jpg?lm=1"},
        { "id": 2, "nombre": "Vinícius Júnior","Altura":"1.76","Peso":"74","imagen": "https://img.a.transfermarkt.technology/portrait/header/371998-1664869583.jpg?lm=1"},
  { "id": 3, "nombre": "Luka Modrić", "Altura": "1.72", "Peso": "70", "imagen": "https://img.a.transfermarkt.technology/portrait/header/27992-1687776160.jpg?lm=1"}
  ]
    },
    {
      "id": 2,
      "nombre": "Bayern Munich",
      "plantilla": [
        { "id": 1, "nombre": "Harry Kane","Altura":"1.88","Peso":"74", "imagen": "https://img.a.transfermarkt.technology/portrait/header/132098-1700211169.jpg?lm=1"},
        { "id": 2, "nombre": "Manuel Neuer","Altura":"1.93 ","Peso":"81", "imagen": "https://img.a.transfermarkt.technology/portrait/header/17259-1702419450.jpg?lm=1"},
        { "id": 3, "nombre": "Thomas Müller", "Altura": "1.85", "Peso": "74", "imagen": "https://img.a.transfermarkt.technology/portrait/header/58358-1683890647.jpg?lm=1"}
  ]
    },
    {
      "id": 3,
      "nombre": "AC Milan",
      "plantilla": [
        { "id": 1, "nombre": "Rafael Leão","Altura":"1.88","Peso":"85", "imagen": "https://img.a.transfermarkt.technology/portrait/header/357164-1661352687.jpg?lm=1"},
        { "id": 2, "nombre": "Olivier Giroud","Altura":"1.93","Peso":"78", "imagen": "https://img.a.transfermarkt.technology/portrait/header/82442-1661514565.jpg?lm=1"},
        { "id": 3, "nombre": "Theo Hernández", "Altura": "1.85", "Peso": "75", "imagen": "https://img.a.transfermarkt.technology/portrait/header/339808-1663574533.jpg?lm=1"}
  ]
    },
    {
      "id": 4,
      "nombre": "Barcelona",
      "plantilla": [
        { "id": 1, "nombre": "Robert Lewandowski","Altura":"1.85","Peso":"74", "imagen": "https://img.a.transfermarkt.technology/portrait/header/38253-1701118759.jpg?lm=1"},
        { "id": 2, "nombre": "Lamine Yamal","Altura":"1.80","Peso":"72", "imagen": "https://img.a.transfermarkt.technology/portrait/header/937958-1700816625.png?lm=1"},
        { "id": 3, "nombre": "Gavi", "Altura": "1.73", "Peso": "78", "imagen": "https://img.a.transfermarkt.technology/portrait/header/646740-1682685701.jpg?lm=1"}
  ]
    }

  ];
  return (
    <main className={styles.main}>
      <div>
        <h1>Los Mejores Equipos de Europa</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
