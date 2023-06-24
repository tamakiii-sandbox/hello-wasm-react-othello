.PHONY: help install build serve clean uninstall

help:
	@cat $(firstword $(MAKEFILE_LIST))

install: \
	node_modules

build:
	npx webpack --mode=development

serve:
	npx --no webpack --mode=development serve

clean:
	rm -rf dist
	rm -rf pkg

uninstall:
	rm -rf node_modules

node_modules:
	npm install --include=dev

# "start": "react-scripts start",
# "build": "webpack --mode=production --node-env=production",
# "test": "react-scripts test",
# "eject": "react-scripts eject",
# "build:dev": "webpack --mode=development",
# "build:prod": "webpack --mode=production --node-env=production",
# "watch": "webpack --watch",
# "serve": "webpack serve"