FROM node:latest
WORKDIR /home/node/webapp
RUN corepack enable
COPY .npmrc package.json pnpm-lock.yaml prisma ./
RUN pnpm install --frozen-lockfile
COPY prisma ./
RUN pnpm run prismagen
COPY . ./

EXPOSE 3000
CMD ["pnpm", "run","dev"]