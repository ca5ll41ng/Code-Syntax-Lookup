---
id: "en-php-guide-class-php-user-filter"
language: "php"
lang: "en"
category: "guide"
name: "class.php-user-filter"
title: "The php_user_filter class"
module: "stream"
source_url: "https://www.php.net/manual/en/class.php-user-filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The php_user_filter class

php_user_filter

   Introduction  Children of this class are passed to `stream_filter_register()`. Note that the __construct method is not called; instead, `php_user_filter::onCreate()` should be used for initialization.      Class Synopsis    `php_user_filter`    `public` `string` `filtername` ""   `public` `mixed` `params` ""   `public` `resource|null` `stream` null         Properties 
- **`filtername`** — Name of the filter registered by `stream_filter_append()`.
- **`params`**
- **`stream`**
