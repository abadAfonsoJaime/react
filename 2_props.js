// Una clase que representa un título
class Title extends React.Component {
    render() {
        return <h1>{ this.props.title.toUpperCase() }</h1>;
        // Assuming that title receives a string value
    }
}
// class syntax require this.props

// Componente para representar un alert
const Alert = props => <div className={ `Alert Alert--${props.type}` }>{ props.text }</div>;

// Montamos todos nuestros componentes en el DOM
ReactDOM.render(
    <div>
        <Title title="Trabajando con Props" />
        <Alert type="error" text="El usuario está chalao" />
    </div>,
    document.getElementById('app')
);

const newElement = props => <p><h1>Cabecera</h1><span>{ props.text }</span></p> // Check in Babel!!
let instance = <newElement text="hola"/>;// execute in Babel!

/*
class Title extends React.Component {
    // Definimos los propTypes como una propiedad estática
    static propTypes = {
        // Definimos el tipo de title
        title: React.PropTypes.string.isRequired
    };
    render() {
        return <h1>{ this.props.title.toUpperCase() }</h1>
    }
}
let errors = <Alert type="error" text="El usuario no existe" />;
let title = <Title title="Trabajando con Props!" />;
*/

class Title2 extends React.Component {
    static get propTypes() {
        title: React.PropTypes.string.isRequired
    };
    static defaultProps = {title:"Hola"};
    render() {
        return <h1>{ this.props.title.toUpperCase() }</h1>
    }
}

class Title3 extends React.Component {
    render() { return <h1 className={ this.props.className }>{ this.props.title.toUpperCase() }</h1>}
}
// Definimos los propTypes en el prototipo
Title.propTypes = {
    title : React.PropTypes.string.isRequired,
    className : React.PropTypes.string
}

// Igual para los componentes definidos en funciones
const RedText = props => <p style={ { color: 'red' } }>{ props.text }</p>
RedText.propTypes = {
    text : React.PropTypes.string.isRequired
}

// Un ejemplo más complejo con array de objetos
const SumList = props => {
    let sum = 0;
    props.numbers.forEach(n => sum += n.number);
    return <p>La suma es igual a: { sum }</p>
}

SumList.propTypes = {
    numbers : React.propTypes.arrayOf(React.PropTypes.shape({
        number : React.PropTypes.number.isRequired
    })).isRequired
}

// Instanciamos todos los ejemplos
let numbers = [{ number: 10}, {number: 20}, {number: 30}];

// Montamos todos nuestros components en el DOM
ReactDOM.render(
    <div>
        <Title title="Title" />
        <Title2 title="Title2" />
        <Title3 title="Title3" />
        <RedText text="Red text" />
        <SumList numbers={ numbers } />
    </div>,
    document.getElementById('app')
);