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