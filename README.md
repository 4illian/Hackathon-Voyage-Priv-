# Hackathon Voyage Privé

## 📸 Screenshots
<!-- Add your screenshots here -->
![Application Screenshot](front/public/screen-home.png)
![Application Screenshot](front/public/screen-score.png)
![Application Screenshot](front/public/screen-calendar.png)
![Application Screenshot](front/public/screen-details.png)

## 🚀 About the Project
This project is a web application developed for the Voyage Privé Hackathon. It allows users to [main feature description].

## 🏗️ Architecture
The application is built with the following technologies:
- **Frontend**: React.js
- **Containerization**: Docker
- **Web Server**: Nginx

### Project Structure
```
.
├── front/               # React Application
│   ├── src/            # React Source Code
│   ├── public/         # Static Files
│   ├── Dockerfile      # Docker Configuration
│   └── nginx.conf      # Nginx Configuration
└── Makefile           # Automation Scripts
```

## 🛠️ Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Docker (optional)
- Make

### Installation
1. Clone the repository:
```bash
git clone [REPO_URL]
cd Hackathon-Voyage-Priv-
```

2. Install dependencies:
```bash
make install
```

### Running the Application

#### Development Mode
```bash
make dev
```
The application will be available at: http://localhost:3000

#### Production Mode
```bash
make build
make start
```
The application will be available at: http://localhost:80

## 📝 Documentation
[To be completed with application-specific documentation]

## 🤝 Contributing
[Instructions for contributing to the project]

## 📄 License
[License information] 