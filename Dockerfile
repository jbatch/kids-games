# ── Stage 1: build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# ── Stage 2: serve ───────────────────────────────────────────────────────────
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Simple nginx config — single-page routing not needed for static multi-page
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
