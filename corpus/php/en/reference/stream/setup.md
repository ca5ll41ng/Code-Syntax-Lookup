---
id: "en-php-guide-stream-setup"
language: "php"
lang: "en"
category: "guide"
name: "stream.setup"
title: "Getting Started"
module: "stream"
source_url: "https://www.php.net/manual/en/stream.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Stream Classes

User designed wrappers can be registered via `stream_wrapper_register()`, using the class definition shown on that manual page.

Class `php_user_filter` is predefined and is an abstract baseclass for use with user defined filters. See the manual page for `stream_filter_register()` for details on implementing user defined filters.
