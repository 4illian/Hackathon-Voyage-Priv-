.PHONY: install dev build start stop clean help check-docker

# Variables
FRONT_DIR = front

# Check if Docker is installed and running
check-docker:
	@if ! command -v docker >/dev/null 2>&1; then \
		echo "❌ Docker is not installed. Please install Docker first."; \
		exit 1; \
	fi
	@if ! docker info >/dev/null 2>&1; then \
		echo "❌ Docker is not running. Please start Docker first."; \
		exit 1; \
	fi

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	cd $(FRONT_DIR) && npm install

# Run in development mode
dev:
	@echo "🚀 Starting development mode..."
	cd $(FRONT_DIR) && npm start

# Build the application
build:
	@echo "🏗️ Building the application..."
	cd $(FRONT_DIR) && npm run build

# Run in production mode with Docker
start: check-docker
	@echo "🌐 Starting production mode..."
	@if [ ! -f docker-compose.yml ]; then \
		echo "❌ docker-compose.yml not found. Please make sure you're in the correct directory."; \
		exit 1; \
	fi
	docker-compose up -d
	@echo "✅ Application is running at http://localhost:80"

# Stop the application
stop: check-docker
	@echo "🛑 Stopping the application..."
	@if [ -f docker-compose.yml ]; then \
		docker-compose down; \
	else \
		echo "⚠️ No docker-compose.yml found. Nothing to stop."; \
	fi

# Cleanup
clean:
	@echo "🧹 Cleaning up..."
	cd $(FRONT_DIR) && rm -rf node_modules
	cd $(FRONT_DIR) && rm -rf build
	@if [ -f docker-compose.yml ]; then \
		docker-compose down --volumes --remove-orphans 2>/dev/null || true; \
	fi

# Help
help:
	@echo "📚 Available commands:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start the application in development mode"
	@echo "  make build    - Build the application for production"
	@echo "  make start    - Start the application in production mode"
	@echo "  make stop     - Stop the application"
	@echo "  make clean    - Clean generated files"
	@echo "  make help     - Show this help" 