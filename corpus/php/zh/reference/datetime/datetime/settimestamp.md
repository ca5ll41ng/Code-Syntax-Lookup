---
id: "zh-php-function-datetime-settimestamp"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::setTimestamp"
aliases: ["date_timestamp_set"]
title: "以 Unix 时间戳的方式设置日期和时间"
signature: "public DateTime DateTime::setTimestamp(int $timestamp)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.settimestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以 Unix 时间戳的方式设置日期和时间

## 说明

面向对象风格

```php
public DateTime DateTime::setTimestamp(int $timestamp)
```

过程化风格

```php
DateTime date_timestamp_set(DateTime $object, int $timestamp)
```

以 Unix 时间戳的方式设置日期和时间。

跟 `DateTimeImmutable::setTimestamp()` 一样，但适用于 `DateTime`。

过程化版本将 `DateTime` 对象作为第一个参数。

## 参数

- **`$object`** — 仅过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。此函数会修改这个对象。
- **`$timestamp`** — 代表日期的 Unix 时间戳。`DateTimeImmutable::modify()` 使用 `@` 格式可以设置范围超过 `integer` 的时间戳。

## 返回值

返回方法链修改后的 `DateTime` 对象。

## 参见

 `DateTimeImmutable::setTimestamp()`
