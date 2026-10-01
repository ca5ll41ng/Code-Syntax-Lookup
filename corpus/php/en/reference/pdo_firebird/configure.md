---
id: "en-php-guide-ref-pdo-firebird-installation"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-firebird.installation"
title: "Installation"
module: "pdo_firebird"
source_url: "https://www.php.net/manual/en/ref.pdo-firebird.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

Use --with-pdo-firebird[=DIR] to install the PDO Firebird extension, where the optional `[=DIR]` is the Firebird base install directory.

```text


$ ./configure --with-pdo-firebird

  
```

As of PHP 8.4.0, this extension uses Firebird C++ APIs and therefore requires a C++ compiler, and must be built against fbclient 3.0 or higher.
