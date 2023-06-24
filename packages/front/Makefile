.PHONY: help install build clean uninstall

help:
	@cat $(firstword $(MAKEFILE_LIST))

install: \
	node_modules

build: \
	dist

uninstall:
	rm -rf node_modules

clean:
	rm -rf dist

node_modules:
	npm install

dist:
	npx webpack --mode=production

# "start": "react-scripts start",
# "build": "webpack --mode=production --node-env=production",
# "test": "react-scripts test",
# "eject": "react-scripts eject",
# "build:dev": "webpack --mode=development",
# "build:prod": "webpack --mode=production --node-env=production",
# "watch": "webpack --watch",
# "serve": "webpack serve"