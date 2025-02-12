# Usa a versão mais recente do Node.js 20 como base
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para um cache mais eficiente
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm install --frozen-lockfile

# Copia o restante dos arquivos do projeto para dentro do container
COPY . .

# Faz o build da aplicação Vite
RUN npm run build

# Expõe a porta padrão do Vite Preview (ou ajuste para a porta correta do seu projeto)
EXPOSE 4173

# Comando para rodar a aplicação em produção
CMD ["npm", "run", "preview"]
