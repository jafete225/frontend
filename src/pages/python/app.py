from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('http://localhost:5174/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data.get('message')

    # Respostas do chatbot
    if user_message == "1":
        response = "Você escolheu: Atendimento Online."
    elif user_message == "2":
        response = "Você escolheu: Reclamação."
    elif user_message == "3":
        response = "Você escolheu: Sugestão."
    elif user_message == "4":
        response = "Você escolheu: Parabenizar."
    elif user_message == "5":
        response = "Você escolheu: Falar com os Administradores."
    else:
        response = ("Olá, eu sou o chatbot que vai te ajudar com atendimento hospitalar. "
                    "Escolha uma das opções abaixo:\n"
                    "1 - Atendimento Online\n"
                    "2 - Reclamação\n"
                    "3 - Sugestão\n"
                    "4 - Parabenizar\n"
                    "5 - Falar com os Administradores")

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
