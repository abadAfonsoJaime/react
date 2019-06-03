// Fichero HTML
<div id="app">
  Primera carga: aquí va la aplicación
</div>

// Nuestro primer componente
const firstComponent = <h1>React rocks!</h1>;

// También podemos definir los componentes como una función
const secondComponent = () => <h2>React es cheto</h2>;

// O como una clase
class ThirdComponent extends React.Component {
  // Renderizamos un título
  render() {
    return <h3>React Rocks!</h3>;
  }
}
// Montamos todos nuestros componentes en el DOM
ReactDOM.render(
    <div>
        { firstComponent },
        { secondComponent() },
        <ThirdComponent />
    </div>,
    document.getElementById('app')
);



let car = {
    name : 'coche',
    attribute : 'rojo'
};

const buildString = obj => `Mi ${obj.name} es ${obj.attribute}`;

const element = <p>
    Object: { car.name } => { buildString(car) }.
</p>;
// Each objects inside the element is an argument for the createElement() function

/**** BABEL COMPILATION ****/
var element = React.createElement(
    "p", // tag to be rendered
    null,
    "Object: ",
    car.name, // child
    " => ",
    buildString(car),
    "."
);

// Componente
let contentLayout = <div>
    <h1>Cabecera</h1>
    <p>Párrafo</p>
</div>;
// let invalidComponent = <h1>Cabecera</h1><p>Párrafo</p>

// Montamos todos nuestros componentes en el DOM
ReactDOM.render(
    contentLayout,
    document.getElementById('app')
);


// ITERATIONS
const TransportList = () => {
    let elements = ['car', 'plane', 'train'];

    return <ul>
        { elements.map( el => <li key={el}>{ el }</li>) }
    </ul>
}

/**** BABEL COMPILATION ****/
const TransportList = () => {
    let elements = ['car', 'plane', 'train'];
    return React.createElement(
        "ul",
        null,
        elements.map(
            el => React.createElement(
                "li",
                { key: el },
                el
            )
        )
    );
};

// Montamos todos nuestros componentes en el DOM
ReactDOM.render(
    <div>
        <TransportList />
    </div>,
    document.getElementById('app')
);