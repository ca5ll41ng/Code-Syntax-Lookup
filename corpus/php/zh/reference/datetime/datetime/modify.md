---
id: "zh-php-function-datetime-modify"
language: "php"
lang: "zh"
category: "function"
name: "DateTime::modify"
aliases: ["date_modify"]
title: "修改日期时间对象的值"
signature: "public DateTime DateTime::modify(string $modifier)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.modify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 修改日期时间对象的值

## 说明

面向对象风格

```php
public DateTime DateTime::modify(string $modifier)
```

过程化风格

```php
DateTime|false date_modify(DateTime $object, string $modifier)
```

通过 `DateTimeImmutable::__construct()` 能够接受的格式，对 Datetime 对象的时间戳进行修改（自增或者自减）。

## 参数

- **`$object`** — 仅过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。此函数会修改这个对象。
- **`$modifier`** — 日期/时间字符串。正确格式的说明详见 日期与时间格式。

## 返回值

成功时返回 `DateTime`。过程化风格在失败时返回 `false`。

## 错误／异常

仅限于面向对象的 API：如果传递了无效的日期/时间字符串，将抛出 DateMalformedStringException。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 如果传递了无效的字符串，`DateTime::modify()` 现在将抛出 DateMalformedStringException 。之前返回 `false` 并且发出警告。`date_modify()` 尚未更改。 |

## 示例

**`DateTime::modify()` 示例**

面向对象风格

```php


<?php
$date = new DateTime('2006-12-12');
$date->modify('+1 day');
echo $date->format('Y-m-d');

   
```

以上示例会输出：

```text


2006-12-13

   
```

过程化风格

```php


<?php
$date = date_create('2006-12-12');
date_modify($date, '+1 day');
echo date_format($date, 'Y-m-d');

   
```

以上示例会输出：

```text


2006-12-13

   
```

**增加或者减少月份的时候需要当心**

```php


<?php
$date = new DateTime('2000-12-31');

$date->modify('+1 month');
echo $date->format('Y-m-d') . "\n";

$date->modify('+1 month');
echo $date->format('Y-m-d') . "\n";

   
```

以上示例会输出：

```text


2001-01-31
2001-03-03

   
```

**支持所有日期和时间格式**

```php


<?php
$date = new DateTime('2020-12-31');

$date->modify('July 1st, 2023');
echo $date->format('Y-m-d H:i') . "\n";

$date->modify('Monday next week');
echo $date->format('Y-m-d H:i') . "\n";

$date->modify('17:30');
echo $date->format('Y-m-d H:i') . "\n";

   
```

以上示例会输出：

```text


2023-07-01 00:00
2023-07-03 00:00
2023-07-03 17:30

   
```

## 参见

 `strtotime()` `DateTimeImmutable::modify()` `DateTime::add()` `DateTime::sub()` `DateTime::setDate()` `DateTime::setISODate()` `DateTime::setTime()` `DateTime::setTimestamp()`
