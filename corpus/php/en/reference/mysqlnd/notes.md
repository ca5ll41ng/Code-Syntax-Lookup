---
id: "en-php-guide-mysqlnd-notes"
language: "php"
lang: "en"
category: "guide"
name: "mysqlnd.notes"
title: "Notes"
module: "mysqlnd"
source_url: "https://www.php.net/manual/en/mysqlnd.notes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notes

This section provides a collection of miscellaneous notes on MySQL Native Driver usage.

- Using `mysqlnd` means using PHP streams for underlying connectivity. For `mysqlnd`, the PHP streams documentation (`book.stream`) should be consulted on such details as timeout settings, not the documentation for the MySQL Client Library.
