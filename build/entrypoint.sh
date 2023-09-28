#!/usr/bin/env bash

# Install again if vuepress not available
if command -v vuepress >/dev/null 2>&1; then
	yarn install
fi

yarn dev
