install: #
	npm ci

brain-games: #запускает игру brain-games
	node bin/brain-games.js

brain-calc: #запускает игру brain-calc
	node bin/brain-calc.js

brain-even: #запускает игру brain-even
	node bin/brain-even.js

brain-gcd: #запускает игру brain-gcd
	node bin/brain-gcd.js

brain-prime: #запускает игру brain-prime
	node bin/brain-prime.js

brain-progression: #запускает игру brain-progression:
	node bin/brain-progression.js

publish: #
	npm publish --dry-run

lint: #линтер
	npx eslint .