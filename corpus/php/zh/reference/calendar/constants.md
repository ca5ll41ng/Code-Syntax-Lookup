---
id: "zh-php-guide-calendar-constants"
language: "php"
lang: "zh"
category: "guide"
name: "calendar.constants"
title: "预定义常量"
module: "calendar"
source_url: "https://www.php.net/manual/zh/calendar.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`CAL_EASTER_DEFAULT` (`int`)** — `easter_days()`：根据儒略历计算 1753 年之前的复活节，并根据公历计算之后的复活节。
- **`CAL_EASTER_ROMAN` (`int`)** — `easter_days()`：根据儒略历计算 1583 年之前的复活节，并根据公历计算之后的复活节。
- **`CAL_EASTER_ALWAYS_GREGORIAN` (`int`)** — `easter_days()`：根据公历计算复活节。
- **`CAL_EASTER_ALWAYS_JULIAN` (`int`)** — `easter_days()`：根据儒略历计算复活节。
- **`CAL_GREGORIAN` (`int`)** — `cal_days_in_month()`、`cal_from_jd()`、`cal_info()` 和 `cal_to_jd()`：使用前公历。
- **`CAL_JULIAN` (`int`)** — `cal_days_in_month()`、`cal_from_jd()`、`cal_info()` 和 `cal_to_jd()`：使用儒略历。
- **`CAL_JEWISH` (`int`)** — `cal_days_in_month()`、`cal_from_jd()`、`cal_info()` 和 `cal_to_jd()`：使用犹太历。
- **`CAL_FRENCH` (`int`)** — `cal_days_in_month()`、`cal_from_jd()`、`cal_info()` 和 `cal_to_jd()`：使用法国共和历。
- **`CAL_NUM_CALS` (`int`)** — 可用历法的数量。
- **`CAL_JEWISH_ADD_ALAFIM_GERESH` (`int`)** — `jdtojewish()`：在年份中添加 geresh 符号（类似单引号）作为千位分隔符。
- **`CAL_JEWISH_ADD_ALAFIM` (`int`)** — `jdtojewish()`：在年份中添加单词 alafim 作为千位分隔符。
- **`CAL_JEWISH_ADD_GERESHAYIM` (`int`)** — For `jdtojewish()`: add a gershayim symbol (which resembles a double-quote mark) before the final letter of the day and year numbers.
- **`CAL_DOW_DAYNO` (`int`)** — `jddayofweek()`：用 `int` 表示星期几，`0` 表示星期日，`6` 表示星期六。
- **`CAL_DOW_SHORT` (`int`)** — `jddayofweek()`：星期几的英文名称缩写。
- **`CAL_DOW_LONG` (`int`)** — `jddayofweek()`：星期几的英文名称。
- **`CAL_MONTH_GREGORIAN_SHORT` (`int`)** — `jdmonthname()`：公历月份名称缩写。
- **`CAL_MONTH_GREGORIAN_LONG` (`int`)** — `jdmonthname()`：公历月份名称。
- **`CAL_MONTH_JULIAN_SHORT` (`int`)** — `jdmonthname()`：儒略历月份名称缩写。
- **`CAL_MONTH_JULIAN_LONG` (`int`)** — `jdmonthname()`：儒略历月份名称。
- **`CAL_MONTH_JEWISH` (`int`)** — `jdmonthname()`：犹太历月份名称。
- **`CAL_MONTH_FRENCH` (`int`)** — `jdmonthname()`：法国共和历月份名称。
