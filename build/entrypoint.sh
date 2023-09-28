#!/usr/bin/env bash

yarn vuepress -v >/dev/null 2>&1;
vuepress_missing=$?

# Install again if vuepress not available
if [ $vuepress_missing -ne 0 ]; then
	yarn install
fi

yarn dev
