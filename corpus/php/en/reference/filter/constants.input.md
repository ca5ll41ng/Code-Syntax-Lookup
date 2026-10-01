---
id: "en-php-guide-filter-constants-input"
language: "php"
lang: "en"
category: "guide"
name: "filter.constants.input"
title: "Input Constants"
module: "filter"
source_url: "https://www.php.net/manual/en/filter.constants.input.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Input Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

These constants are used by `filter_input()` and `filter_input_array()`.

- **`INPUT_POST` (`int`)** — POST variables.
- **`INPUT_GET` (`int`)** — GET variables.
- **`INPUT_COOKIE` (`int`)** — COOKIE variables.
- **`INPUT_ENV` (`int`)** — ENV variables.
- **`INPUT_SERVER` (`int`)** — SERVER variables.
- **`INPUT_SESSION` (`int`)** — SESSION variables. (Removed as of PHP 8.0.0; was not implemented previously)
- **`INPUT_REQUEST` (`int`)** — REQUEST variables. (Removed as of PHP 8.0.0; was not implemented previously)
