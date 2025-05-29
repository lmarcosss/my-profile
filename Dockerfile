# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (melhor uso de cache)
COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

# Faz o build da aplicação
RUN npm run build

# Etapa 2: Execução com imagem leve
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Instala somente o Vite CLI necessário para o preview
RUN npm install vite --omit=dev

EXPOSE 4173

CMD ["npx", "vite", "preview", "--port", "4173", "--host"]
