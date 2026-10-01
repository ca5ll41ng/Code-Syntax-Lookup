---
id: "en-php-guide-phar-creating"
language: "php"
lang: "en"
category: "guide"
name: "phar.creating"
title: "Creating Phar Archives"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.creating.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creating Phar Archives

## Creating Phar Archives: Introduction

To be written fully in the near future. Before reading this, be sure to read How to use Phar Archives.

A great place to start is by reading about `Phar::buildFromIterator()`, and the specifics of the file format choices available for archives. A healthy understanding of what a stub is and does is crucial to phar archive creation, and so `Phar::setStub()` and `Phar::createDefaultStub()` are good places to start as well. If you are distributing a web-based application, it is crucial to know about `Phar::webPhar()` and related method `Phar::mungServer()`. Any application that accesses its own files should also consider using `Phar::interceptFileFuncs()`.
