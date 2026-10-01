---
id: "zh-php-function-datetime-setdate"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::setDate"
aliases: ["date_date_set"]
title: "设置日期"
signature: "public DateTime DateTime::setDate(int $year, int $month, int $day)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.setdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置日期

## 说明

面向对象风格

```php
public DateTime DateTime::setDate(int $year, int $month, int $day)
```

过程化风格

```php
DateTime date_date_set(DateTime $object, int $year, int $month, int $day)
```

将 DateTime 对象的当前日期重置为其它日期。

跟 `DateTimeImmutable::setDate()` 一样，但适用于 `DateTime`，且更改现有对象。

过程化版本将 `DateTime` 对象作为第一个参数。

## 参数

- **`$object`** — 仅过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。此函数会修改这个对象。
- **`$year`** — 年份。
- **`$month`** — 月份。
- **`$day`** — 日。

## 返回值

返回方法链修改后的 `DateTime` 对象。

## 参见

 `DateTimeImmutable::setDate()`
