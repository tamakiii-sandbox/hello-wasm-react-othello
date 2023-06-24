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
	npm install --dev