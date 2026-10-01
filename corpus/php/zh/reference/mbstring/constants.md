---
id: "zh-php-guide-mbstring-constants"
language: "php"
lang: "zh"
category: "guide"
name: "mbstring.constants"
title: "预定义常量"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/mbstring.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`MB_OVERLOAD_MAIL` (`int`)** — 自 PHP 8.0.0 起已删除。
- **`MB_OVERLOAD_STRING` (`int`)** — 自 PHP 8.0.0 起已删除。
- **`MB_OVERLOAD_REGEX` (`int`)** — 自 PHP 8.0.0 起已删除。
- **`MB_CASE_UPPER` (`int`)** — Performs a full upper-case folding. This may change the length of the string. This is the mode used by mb_strtoupper().
- **`MB_CASE_LOWER` (`int`)** — Performs a full lower-case folding. This may change the length of the string. This is the mode used by mb_strtolower().
- **`MB_CASE_TITLE` (`int`)** — Performs a full title-case conversion based on the Cased and CaseIgnorable derived Unicode properties. In particular this improves handling of quotes and apostrophes. This may change the length of the string.
- **`MB_CASE_FOLD` (`int`)** — Performs a full case fold conversion which removes case distinctions present in the string. This is used for caseless matching. This may change the length of the string. Available since PHP 7.3.
- **`MB_CASE_LOWER_SIMPLE` (`int`)** — Performs a simple lower-case fold conversion. This does not change the length of the string. Available as of PHP 7.3.
- **`MB_CASE_UPPER_SIMPLE` (`int`)** — Performs simple upper-case fold conversion. This does not change the length of the string. Available as of PHP 7.3.
- **`MB_CASE_TITLE_SIMPLE` (`int`)** — Performs simple title-case fold conversion. This does not change the length of the string. Available as of PHP 7.3.
- **`MB_CASE_FOLD_SIMPLE` (`int`)** — Performs a simple case fold conversion which removes case distinctions present in the string. This is used for caseless matching. This does not change the length of the string. Used by case-insensitive operations internally by the MBString extension. Available as of PHP 7.3.
- **`MB_ONIGURUMA_VERSION` (`string`)** — Oniguruma 版本，例如 `6.9.4`。自 PHP 7.4 起可用。
