class InchConverter {
	// BASE de la conversión
	static BASE = 2.54

	// Toma el valor en centímetros y lo convierte a pulgadas
	static convertCmToInch = value => {
		return value / InchConverter.BASE;
	}
	// Toma el valor en pulgadas y lo convierte a centímetros
	static convertInchToCm = value => {
		return InchConverter.BASE * value;
	}
}

// Exportamos la clase
export default InchConverter;