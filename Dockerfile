# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia arquivos de dependência
COPY package.json package-lock.json* ./

# Instala dependências com cache e segurança
RUN npm ci

# Copia todo o restante da aplicação
COPY . .

# Gera o build da aplicação Vite
RUN npm run build

# Etapa 2: Execução
FROM node:20-alpine AS runner

WORKDIR /app

# Só precisa do build e do Vite CLI para servir
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 4173

# Usa vite preview com host público
CMD ["npx", "vite", "preview", "--port", "4173", "--host"]
