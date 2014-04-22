test:
		./node_modules/.bin/mocha --harmony -R spec -t 5000 test/specs.js

.PHONY: test
