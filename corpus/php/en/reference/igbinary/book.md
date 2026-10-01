---
id: "en-php-guide-book-igbinary"
language: "php"
lang: "en"
category: "guide"
name: "book.igbinary"
title: "Igbinary"
module: "igbinary"
source_url: "https://www.php.net/manual/en/book.igbinary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Igbinary

Igbinary

 Introduction  Igbinary is a drop in replacement for the standard PHP serializer. Instead of the time and space consuming textual representation used by PHP's `serialize()`, igbinary stores PHP data structures in a compact binary form. Memory savings are significant when using memcached, APCu, or similar memory based storages for serialized data. The typical reduction in storage requirements are around 50%. The exact percentage depends on the data.
