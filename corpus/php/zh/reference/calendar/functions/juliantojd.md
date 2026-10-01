---
id: "zh-php-function-function-juliantojd"
language: "php"
lang: "zh"
category: "function"
name: "juliantojd"
title: "儒略日期转为儒略日数"
signature: "int juliantojd(int $month, int $day, int $year)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.juliantojd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 儒略日期转为儒略日数

## 说明

```php
int juliantojd(int $month, int $day, int $year)
```

儒略历的有效年份为公元前 4713 年到公元 9999 年。

尽管这个函数也可以处理追溯到公元前 4713 年以前的日期，但这样做可能没有意义。此历法是在公元前 46 年创建，但是到了公元 8 年细节才稳定，也有可能是 4 晚期。此外，每年的开始也因为文化的不同，不是所有人都接受 January 为第一个月份。

> 记住，当今世界最广泛使用的历法系统是公历，函数 `gregoriantojd()` 可用于转换此类日期为儒略日数。

## 参数

- **`$month`** — 月的范围是 1 (January) 到 12 ( December) 之间的数字。
- **`$day`** — 天的范围是 1 到 31 之间的数字
- **`$year`** — 年的范围是 -4713 到 9999 之间的数字

## 返回值

指定儒略日期所对应的 int 类型的儒略日。

## 参见

`jdtojulian()` `cal_to_jd()`
