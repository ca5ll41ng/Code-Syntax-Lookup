---
id: "zh-php-function-datetime-settimezone"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::setTimezone"
aliases: ["date_timezone_set"]
title: "设置 DateTime 对象的时区"
signature: "public DateTime DateTime::setTimezone(DateTimeZone $timezone)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.settimezone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 DateTime 对象的时区

## 说明

面向对象风格

```php
public DateTime DateTime::setTimezone(DateTimeZone $timezone)
```

过程化风格

```php
DateTime date_timezone_set(DateTime $object, DateTimeZone $timezone)
```

为 `DateTime` `object` 设置新时区。

跟 `DateTimeImmutable::setTimezone()` 一样，但适用于 `DateTime`。

过程化版本将 `DateTime` 对象作为第一个参数。

## 参数

- **`$object`** — 仅过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。此函数会修改这个对象。
- **`$timezone`** — 代表所需时区的 `DateTimeZone` 对象。

## 返回值

返回链式调用的 `DateTime` 对象。调用此方法时，底层的时间点不会更改。

## 示例

**`DateTime::setTimeZone()` 示例**

面向对象风格

```php


<?php
$date = new DateTime('2000-01-01', new DateTimeZone('Pacific/Nauru'));
echo $date->format('Y-m-d H:i:sP') . "\n";

$date->setTimezone(new DateTimeZone('Pacific/Chatham'));
echo $date->format('Y-m-d H:i:sP') . "\n";

   
```

以上示例会输出：

```text


2000-01-01 00:00:00+12:00
2000-01-01 01:45:00+13:45

   
```

过程化风格

```php


<?php
$date = date_create('2000-01-01', timezone_open('Pacific/Nauru'));
echo date_format($date, 'Y-m-d H:i:sP') . "\n";

date_timezone_set($date, timezone_open('Pacific/Chatham'));
echo date_format($date, 'Y-m-d H:i:sP') . "\n";

   
```

以上示例会输出：

```text


2000-01-01 00:00:00+12:00
2000-01-01 01:45:00+13:45

   
```

## 参见

 `DateTimeImmutable::setTimezone()` `DateTime::getTimezone()` `DateTimeZone::__construct()`
