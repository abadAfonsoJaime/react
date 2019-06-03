// Las clases disponibles son info, error y success
const Alert = props => <div className={ `Alert Alert--${props.type}` }>{ props.text }</div>

Alert.propTypes = {
    type : React.PropTypes.oneOf(['info', 'succes', 'error'])//????
}

Alert.defaultProps = {
    type: 'info'
}

// Montamos todos nuestros componentes en el DOM
// Podemos probar a cambiar el tipo de Alert por info o success
React.DOM.render(
    <div>
        <Alert text="Info es el valor por defecto" />
        <Alert type="error" text="En este caso especificamos que sea error" />
    </div>,
    document.getElementById('app')
);