# Chat App

A real-time chat application that allows users to send and receive messages instantly. Built for seamless communication, this app supports multiple chat rooms (channels), user authentication, and a modern, responsive interface.

## Features

- Real-time messaging with WebSockets
- User authentication (sign up, log in, log out)
- Multiple chat rooms/channels
- Responsive UI for mobile/desktop
- Message timestamps
- User online/offline status

## Tech Stack

- **Frontend:** React (or your frontend framework)
- **Backend:** Node.js + Express (or your backend stack)
- **Real-time:** Socket.IO (or WebSocket implementation)
- **Database:** SQL Server

## Getting Started

### Prerequisites

- Node.js & npm
- SQL Server (running locally or accessible remotely)
- [Optional] Docker

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in required settings (port, SQL Server connection string, etc).

4. **Set up SQL Server:**
   - Ensure SQL Server is running and accessible.
   - Create a database for the chat app.
   - Run the provided migration scripts (if any) to set up tables.

5. **Start the server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Start the client:**
   - If in a monorepo, navigate to the `client` directory and run:
     ```bash
     npm start
     # or
     yarn start
     ```

7. **Visit the App:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Register for a new account or log in.
- Join or create chat rooms.
- Start chatting in real-time!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

*Happy chatting!*
