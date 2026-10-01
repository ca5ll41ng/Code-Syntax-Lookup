---
id: "en-php-guide-sodium-setup"
language: "php"
lang: "en"
category: "guide"
name: "sodium.setup"
title: "Getting Started"
module: "sodium"
source_url: "https://www.php.net/manual/en/sodium.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

This extension requires [libsodium]() ≥ 1.0.8.

## Installation

As of PHP 7.2.0 this extension is bundled with PHP. For older PHP versions this extension is available via PECL.

## Linux Systems

In order to use this extension you must compile PHP with sodium support by using the --with-sodium[=DIR] configure option.

## Windows

In order to use this extension you have to add `extension=php_sodium.dll` to php.ini.

## Installation via PECL

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [libsodium](libsodium)
