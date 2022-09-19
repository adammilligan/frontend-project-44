install: #
	npm ci

brain-games: #запускает игру
	node bin/brain-games.js

publish: #
	npm publish --dry-run

make lint: #линтер
	npx eslint