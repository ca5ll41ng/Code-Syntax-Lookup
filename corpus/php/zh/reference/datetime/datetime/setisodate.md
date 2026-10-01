---
id: "zh-php-function-datetime-setisodate"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::setISODate"
aliases: ["date_isodate_set"]
title: "设置 ISO 日期"
signature: "public DateTime DateTime::setISODate(int $year, int $week, int $dayOfWeek = 1)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.setisodate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 ISO 日期

## 说明

面向对象风格

```php
public DateTime DateTime::setISODate(int $year, int $week, int $dayOfWeek = 1)
```

过程化风格

```php
DateTime date_isodate_set(DateTime $object, int $year, int $week, int $dayOfWeek = 1)
```

根据 ISO 8601 规范设置日期，使用周和日的偏移量，而不是使用指定日期。

跟 `DateTimeImmutable::setISODate()` 一样，但适用于 `DateTime`。

过程化版本将 `DateTime` 对象作为第一个参数。

## 参数

- **`$object`** — 仅过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。此函数会修改这个对象。
- **`$year`** — 年份。
- **`$week`** — 周。
- **`$dayOfWeek`** — 从周的第一天计算，日在一周内的偏移量。

## 返回值

返回方法链修改后的 `DateTime` 对象。

## 参见

 `DateTimeImmutable::setISODate()`
