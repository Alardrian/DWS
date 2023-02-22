from flask import Flask,jsonify,request


app = Flask("app")

def generar_respuesta_json(resultado,operacion):

    data = {
        "Operacion" : operacion,
        "Resultado" : str(resultado)
    }
    return jsonify(data)

@app.route('/')
def hello_world():
    return 'Hola mundo'

@app.route("/triangulo/<string:base>/<string:altura>/")
def triangulo(base, altura):

    area = (int(base)*int(altura))/ 2

    return generar_respuesta_json(area,"calcular_area_triangulo")

 #TODO Añadir la funcionalidad de calcular el factorial de un número al API

@app.route("/factorial/<int:numero>/")
def factorial(numero):
    x = calcular_factorial(numero)
    return generar_respuesta_json(x,"calcular_factorial")

def calcular_factorial(numero):
    if (numero == 0):
        return 1
    elif (numero > 0):
        result = 1
        while (numero > 0):
            result = result * numero
            numero = numero - 1
        return result
    


if __name__ == "__main__":
    app.run()