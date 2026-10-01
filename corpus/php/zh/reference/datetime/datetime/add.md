---
id: "zh-php-function-datetime-add"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::add"
aliases: ["date_add"]
title: "修改 DateTime 对象，增加天、月、年、小时、分钟以及秒的数量。"
signature: "public DateTime DateTime::add(DateInterval $interval)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 修改 DateTime 对象，增加天、月、年、小时、分钟以及秒的数量。

## 说明

面向对象风格

```php
public DateTime DateTime::add(DateInterval $interval)
```

过程化风格

```php
DateTime date_add(DateTime $object, DateInterval $interval)
```

将指定的 `DateInterval` 对象到 `DateTime` 对象。

跟 `DateTimeImmutable::add()`一样，但适用于 `DateTime`。

过程化版本将 `DateTime` 对象作为它的第一个参数。

## 参数

- **`$object`** — 仅过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。此函数会修改这个对象。
- **`$interval`** — `DateInterval` 对象。

## 返回值

返回方法链修改后的 `DateTime` 对象。

## 参见

 `DateTimeImmutable::add()`
