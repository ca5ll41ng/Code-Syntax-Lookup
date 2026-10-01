---
id: "en-php-guide-random-constants"
language: "php"
lang: "en"
category: "guide"
name: "random.constants"
title: "Predefined Constants"
module: "random"
source_url: "https://www.php.net/manual/en/random.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are always available as part of the PHP core.

- **`MT_RAND_MT19937` (`int`)** — Indicates that the correct [Mt19937]() (Mersenne Twister) implementation will be used by the algorithm, when creating a `Random\Engine\Mt19937` instance using `Random\Engine\Mt19937::__construct()` or seeding the global Mersenne Twister with `mt_srand()`.
- **`MT_RAND_PHP` (`int`)** — Indicates that an incorrect Mersenne Twister implementation will be used by the algorithm, when creating a `Random\Engine\Mt19937` instance using `Random\Engine\Mt19937::__construct()` or seeding the global Mersenne Twister with `mt_srand()`. — The incorrect implementation is available for backwards compatibility with `mt_srand()` prior to PHP 7.1.0.
  > This feature has been *DEPRECATED* as of PHP 8.3.0. Relying on this feature is highly discouraged.
