---
id: "zh-php-function-function-jdmonthname"
language: "php"
lang: "zh"
category: "function"
name: "jdmonthname"
title: "返回月份名称"
signature: "string jdmonthname(int $julian_day, int $mode)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.jdmonthname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回月份名称

## 说明

```php
string jdmonthname(int $julian_day, int $mode)
```

返回 string 类型的月份名称，`$mode` 告诉此函数要将儒略历转化为哪个历法以及哪个类型的月份名称。

| 模式 | 含义 | 值 |
| --- | --- | --- |
| `CAL_MONTH_GREGORIAN_SHORT` | 公历 - 缩写 | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec |
| `CAL_MONTH_GREGORIAN_LONG` | 公历 | January, February, March, April, May, June, July, August, September, October, November, December |
| `CAL_MONTH_JULIAN_SHORT` | 儒略历 - 缩写 | Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec |
| `CAL_MONTH_JULIAN_LONG` | 儒略历 | January, February, March, April, May, June, July, August, September, October, November, December |
| `CAL_MONTH_JEWISH` | 犹太历 | Tishri, Heshvan, Kislev, Tevet, Shevat, Adar, Adar I, Adar II, Nisan, Iyyar, Sivan, Tammuz, Av, Elul |
| `CAL_MONTH_FRENCH` | 法国历 | Vendemiaire, Brumaire, Frimaire, Nivose, Pluviose, Ventose, Germinal, Floreal, Prairial, Messidor, Thermidor, Fructidor, Extra |

## 参数

- **`$julian_day`** — 用来计算的儒略日
- **`$mode`** — 历法模式（见上表）。

## 返回值

指定的儒略日和 `$mode` 的月份的名称。
