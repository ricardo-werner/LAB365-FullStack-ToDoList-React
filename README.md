# LAB365-FullStack-ToDoList-React

Exercício Semana 08 - Criação de uma página To Do List com React

Status - Concluído

# Todo List App

Este projeto é um **Desafio do curso de FullStack do LAB365** com o objetivo de praticar conceitos fundamentais de:

- ReactJS
- Fetch API
- JSON Server (fake API REST)
- Controle de estado e atualização de interfaces
- Simulação de backend para front-end
- Uso de concurrently e nodemon para facilitar o fluxo de desenvolvimento

---

## Tecnologias Utilizadas

- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [JSON Server](https://github.com/typicode/json-server)
- [Concurrently](https://www.npmjs.com/package/concurrently)
- [Nodemon](https://www.npmjs.com/package/nodemon)

---

## Instalacão e Execução Local

Clone o repositório:

```bash
git clone https://github.com/ricardo-werner/LAB365-FullStack-ToDoList-React.git
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto e o servidor JSON juntos, com cores personalizadas para melhor visualização:

```bash
npm run dev:all
```

Este comando é alimentado por `concurrently`, que roda:

- O Vite (Frontend) 🌍
- O JSON Server com `nodemon` (Backend Fake) 📂

**Scripts configurados:**

```json
"scripts": {
   "server": "nodemon --watch data/db.json --exec \"json-server --watch data/db.json --port 5000\"",
    "dev:all": "concurrently -n \"SERVER,FRONTEND\" -c \"cyan,green\" \"npm run server\" \"npm run dev\""
}
```
## Visualize o resultado na página web:

   <p align="center">
     <img width="480" src="./src/assets/to_readme/telaWeb.PNG" alt="Resultado na Web">
   </p>
---

## 📂 Estrutura de Arquivos

```
/
|- data/
|  |- db.json (banco de dados simulado)
|- src/
|  |- App.css
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|- .gitignore
|- index.html
|- packge-lock.json
|- package.json
|- README.md
```

---

## 💪 Aprendizados e Conclusão

- Integração frontend-backend simulada com sucesso.
- Manipulação de rotas REST (`PUT`, `POST`, `DELETE`).
- Melhor organização do fluxo de desenvolvimento usando **Concurrently**.
- Refatorando e evoluindo com boas práticas de código.
- Entendimento da importância de scripts claros para ambientes de desenvolvimento.

Este desafio mostrou que tanto o front quanto o "fake back" precisam estar bem configurados para uma boa experiência de desenvolvimento!

---

## 🛠️ Fluxo de Funcionamento da Aplicação

```
- 👤 Usuário adiciona/deleta tarefa.
- ⚡ React dispara `fetch`.
- 📂 JSON Server manipula o `db.json`.
- 💾 Dados atualizados.
- 📺 Interface atualizada!

```

## 🔹 Como utilizar

1. Acesse o navegador em `http://localhost:5173`
2. Utilize o aplicativo para adicionar ou excluir tarefas.
3. O banco `db.json` será atualizado automaticamente!

![todosm](https://user-images.githubusercontent.com/105825127/228952684-0ee4b2d5-2e12-46ef-be50-8e59657b0d6b.jpg)


**Criado com foco em aprendizado, evolução contínua e boas práticas.** ✨

### 🙋‍♂️ Autor

Ricardo Werner<br>
Dev em Desenvolvimento