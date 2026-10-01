---
id: "en-php-guide-expect-constants"
language: "php"
lang: "en"
category: "guide"
name: "expect.constants"
title: "Predefined Constants"
module: "expect"
source_url: "https://www.php.net/manual/en/expect.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`EXP_GLOB` (`int`)** — Indicates that the pattern is a glob-style string pattern.
- **`EXP_EXACT` (`int`)** — Indicates that the pattern is an exact string.
- **`EXP_REGEXP` (`int`)** — Indicates that the pattern is a regexp-style string pattern.
- **`EXP_EOF` (`int`)** — Value, returned by `expect_expectl()`, when EOF is reached.
- **`EXP_TIMEOUT` (`int`)** — Value, returned by `expect_expectl()` upon timeout of seconds, specified in value of expect.timeout
- **`EXP_FULLBUFFER` (`int`)** — Value, returned by `expect_expectl()` if no pattern have been matched.
