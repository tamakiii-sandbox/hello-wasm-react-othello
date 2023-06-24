.PHONY: help build test clean

help:
	@cat $(firstword $(MAKEFILE_LIST))

build: \
	target/debug \
	target/release

test:
	cargo test

target/debug:
	cargo build

target/release:
	wasm-pack build --target web

clean:
	rm -rf target/debug
	rm -rf target/release
