FROM node:20-alpine

WORKDIR /app

# Install deps first (better layer caching)
COPY package.json ./
RUN npm install --omit=dev

# Copy source
COPY . .

ENV NODE_ENV=production
ENV PORT=3000

# Needed only for webhook-mode. Long polling doesn't require inbound ports.
EXPOSE 3000

CMD ["node", "bot.js"]
