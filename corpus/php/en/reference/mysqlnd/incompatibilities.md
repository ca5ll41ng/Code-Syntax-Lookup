---
id: "en-php-guide-mysqlnd-incompatibilities"
language: "php"
lang: "en"
category: "guide"
name: "mysqlnd.incompatibilities"
title: "Incompatibilities"
module: "mysqlnd"
source_url: "https://www.php.net/manual/en/mysqlnd.incompatibilities.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Incompatibilities

MySQL Native Driver is in most cases compatible with MySQL Client Library (`libmysql`). This section documents incompatibilities between these libraries.

- Values of `bit` data type are returned as binary strings (e.g. "\0" or "\x1F") with `libmysql` and as decimal strings (e.g. "0" or "31") with `mysqlnd`. If you want the code to be compatible with both libraries then always return bit fields as numbers from MySQL with a query like this: `SELECT bit + 0 FROM table`.
