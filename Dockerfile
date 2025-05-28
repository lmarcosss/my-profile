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

# Copia apenas os arquivos essenciais do build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Reinstala apenas as dependências de produção
RUN npm ci

EXPOSE 4173

CMD ["npm", "run", "preview"]
