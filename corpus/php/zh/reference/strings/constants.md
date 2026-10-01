---
id: "zh-php-guide-string-constants"
language: "php"
lang: "zh"
category: "guide"
name: "string.constants"
title: "预定义常量"
module: "strings"
source_url: "https://www.php.net/manual/zh/string.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`CRYPT_SALT_LENGTH` (`int`)**
- **`CRYPT_STD_DES` (`int`)** — 表示 `crypt()` 是否支持基于 DES 的标准散列。始终是 `1`。
- **`CRYPT_EXT_DES` (`int`)** — 表示 `crypt()` 是否支持基于 DES 的扩展散列。始终是 `1`。
- **`CRYPT_MD5` (`int`)** — 表示 `crypt()` 是否支持 MD5 散列。始终是 `1`。
- **`CRYPT_BLOWFISH` (`int`)** — 表示 `crypt()` 是否支持 Blowfish 散列。始终是 `1`。
- **`CRYPT_SHA256` (`int`)** — 表示 `crypt()` 是否支持 SHA-256 散列。始终是 `1`。
- **`CRYPT_SHA512` (`int`)** — 表示 `crypt()` 是否支持 SHA-512 散列。始终是 `1`。
- **`HTML_SPECIALCHARS` ((`int`))**
- **`HTML_ENTITIES` ((`int`))**
- **`ENT_COMPAT` ((`int`))**
- **`ENT_QUOTES` ((`int`))**
- **`ENT_NOQUOTES` ((`int`))**
- **`ENT_IGNORE` ((`int`))**
- **`ENT_SUBSTITUTE` ((`int`))**
- **`ENT_DISALLOWED` ((`int`))**
- **`ENT_HTML401` ((`int`))**
- **`ENT_XML1` ((`int`))**
- **`ENT_XHTML` ((`int`))**
- **`ENT_HTML5` ((`int`))**
- **`CHAR_MAX` ((`int`))**
- **`LC_CTYPE` ((`int`))** — 字符分类和转换受区域设置的影响。
- **`LC_NUMERIC` ((`int`))** — 小数分隔符受区域设置的影响。
- **`LC_TIME` ((`int`))** — 日期和时间格式受区域设置的影响。
- **`LC_COLLATE` ((`int`))** — 字符串比较受到区域设置的影响。
- **`LC_MONETARY` ((`int`))** — 货币格式受区域设置的影响。
- **`LC_ALL` ((`int`))** — 影响所有其他 `LC_{*}` 常量所影响的所有函数。
- **`LC_MESSAGES` ((`int`))** — 系统响应受区域设置影响。如果 PHP 使用 libintl 编译，则可用。
- **`STR_PAD_LEFT` ((`int`))**
- **`STR_PAD_RIGHT` ((`int`))**
- **`STR_PAD_BOTH` ((`int`))**

- **`ABDAY_1` (`int`)** — 一周中第一天的名称缩写。
- **`ABDAY_2` (`int`)** — 一周中第二天的名称缩写。
- **`ABDAY_3` (`int`)** — 一周中第三天的名称缩写。
- **`ABDAY_4` (`int`)** — 一周中第四天的名称缩写。
- **`ABDAY_5` (`int`)** — 一周中第五天的名称缩写。
- **`ABDAY_6` (`int`)** — 一周中第六天的名称缩写。
- **`ABDAY_7` (`int`)** — 一周中第七天的名称缩写。
- **`DAY_1` (`int`)** — 一周中第一天的名称。
- **`DAY_2` (`int`)** — 一周中第二天的名称。
- **`DAY_3` (`int`)** — 一周中第三天的名称。
- **`DAY_4` (`int`)** — 一周中第四天的名称。
- **`DAY_5` (`int`)** — 一周中第五天的名称。
- **`DAY_6` (`int`)** — 一周中第六天的名称。
- **`DAY_7` (`int`)** — 一周中第七天的名称。
- **`ABMON_1` (`int`)** — 一年中第一个月的名称缩写。
- **`ABMON_2` (`int`)** — 一年中第二个月的名称缩写。
- **`ABMON_3` (`int`)** — 一年中第三个月的名称缩写。
- **`ABMON_4` (`int`)** — 一年中第四个月的名称缩写。
- **`ABMON_5` (`int`)** — 一年中第五个月的名称缩写。
- **`ABMON_6` (`int`)** — 一年中第六个月的名称缩写。
- **`ABMON_7` (`int`)** — 一年中第七个月的名称缩写。
- **`ABMON_8` (`int`)** — 一年中第八个月的名称缩写。
- **`ABMON_9` (`int`)** — 一年中第九个月的名称缩写。
- **`ABMON_10` (`int`)** — 一年中第十个月的名称缩写。
- **`ABMON_11` (`int`)** — 一年中第十一个月的名称缩写。
- **`ABMON_12` (`int`)** — 一年中第十二个月的名称缩写。
- **`MON_1` (`int`)** — 一年中第一个月的名称。
- **`MON_2` (`int`)** — 一年中第二个月的名称。
- **`MON_3` (`int`)** — 一年中第三个月的名称。
- **`MON_4` (`int`)** — 一年中第四个月的名称。
- **`MON_5` (`int`)** — 一年中第五个月的名称。
- **`MON_6` (`int`)** — 一年中第六个月的名称。
- **`MON_7` (`int`)** — 一年中第七个月的名称。
- **`MON_8` (`int`)** — 一年中第八个月的名称。
- **`MON_9` (`int`)** — 一年中第九个月的名称。
- **`MON_10` (`int`)** — 一年中第十个月的名称。
- **`MON_11` (`int`)** — 一年中第十一个月的名称。
- **`MON_12` (`int`)** — 一年中第十二个月的名称。
- **`AM_STR` (`int`)** — 表示上午的字符串。
- **`PM_STR` (`int`)** — 表示下午的字符串
- **`D_T_FMT` (`int`)** — 用于 `strftime()` 的格式字符串，表示时间和日期。
- **`D_FMT` (`int`)** — 用于 `strftime()` 的格式字符串，表示日期。
- **`T_FMT` (`int`)** — 用于 `strftime()` 的格式字符串，表示时间。
- **`T_FMT_AMPM` (`int`)** — 用于 `strftime()` 的格式字符串，以 12 小时格式表示带上/下午的时间。
- **`ERA` (`int`)** — Alternate era.
- **`ERA_YEAR` (`int`)** — Year in alternate era format.
- **`ERA_D_T_FMT` (`int`)** — Date and time in alternate era format (string can be used in `strftime()`).
- **`ERA_D_FMT` (`int`)** — Date in alternate era format (string can be used in `strftime()`).
- **`ERA_T_FMT` (`int`)** — Time in alternate era format (string can be used in `strftime()`).
- **`ALT_DIGITS` (`int`)** — Alternative symbols for digits.

- **`INT_CURR_SYMBOL` (`int`)** — International currency symbol.
- **`CURRENCY_SYMBOL` (`int`)** — Local currency symbol.
- **`CRNCYSTR` (`int`)** — Same value as `CURRENCY_SYMBOL`.
- **`MON_DECIMAL_POINT` (`int`)** — Decimal point character.
- **`MON_THOUSANDS_SEP` (`int`)** — Thousands separator (groups of three digits).
- **`MON_GROUPING` (`int`)** — Like `"grouping"` element.
- **`POSITIVE_SIGN` (`int`)** — Sign for positive values.
- **`NEGATIVE_SIGN` (`int`)** — Sign for negative values.
- **`INT_FRAC_DIGITS` (`int`)** — International fractional digits.
- **`FRAC_DIGITS` (`int`)** — Local fractional digits.
- **`P_CS_PRECEDES` (`int`)** — Returns 1 if `CURRENCY_SYMBOL` precedes a positive value.
- **`P_SEP_BY_SPACE` (`int`)** — Returns 1 if a space separates `CURRENCY_SYMBOL` from a positive value.
- **`N_CS_PRECEDES` (`int`)** — Returns 1 if `CURRENCY_SYMBOL` precedes a negative value.
- **`N_SEP_BY_SPACE` (`int`)** — Returns 1 if a space separates `CURRENCY_SYMBOL` from a negative value.
- **`P_SIGN_POSN` (`int`)** — - Returns 0 if parentheses surround the quantity and `CURRENCY_SYMBOL`. - Returns 1 if the sign string precedes the quantity and `CURRENCY_SYMBOL`. - Returns 2 if the sign string follows the quantity and `CURRENCY_SYMBOL`. - Returns 3 if the sign string immediately precedes the `CURRENCY_SYMBOL`. - Returns 4 if the sign string immediately follows the `CURRENCY_SYMBOL`.
- **`N_SIGN_POSN` (`int`)**

- **`DECIMAL_POINT` (`int`)** — Decimal point character.
- **`RADIXCHAR` (`int`)** — Same value as `DECIMAL_POINT`.
- **`THOUSANDS_SEP` (`int`)** — Separator character for thousands (groups of three digits).
- **`THOUSEP` (`int`)** — Same value as `THOUSANDS_SEP`.
- **`GROUPING` (`int`)**

- **`YESEXPR` (`int`)** — Regex string for matching `"yes"` input.
- **`NOEXPR` (`int`)** — Regex string for matching `"no"` input.
- **`YESSTR` (`int`)** — Output string for `"yes"`.
- **`NOSTR` (`int`)** — Output string for `"no"`.

- **`CODESET` (`int`)** — Return a string with the name of the character encoding.
