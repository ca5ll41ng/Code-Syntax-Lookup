---
id: "zh-php-function-datetime-gettimestamp"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeInterface::getTimestamp"
aliases: ["DateTimeImmutable::getTimestamp","DateTime::getTimestamp","date_timestamp_get"]
title: "获取 Unix 时间戳"
signature: "public int DateTimeInterface::getTimestamp()"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.gettimestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 Unix 时间戳

## 说明

面向对象风格

```php
public int DateTimeInterface::getTimestamp()
```

```php
public int DateTimeImmutable::getTimestamp()
```

```php
public int DateTime::getTimestamp()
```

过程化风格

```php
int date_timestamp_get(DateTimeInterface $object)
```

获取 Unix 时间戳。

## 参数

此函数没有参数。

## 返回值

返回表示日期的 Unix 时间戳。

## 错误／异常

如果时间戳不能表示为 `integer`，将抛出 DateRangeError。在 PHP 8.3.0 之前，将抛出 ValueError。并且在 PHP 8.0.0 之前，在这种情况下返回 `false`。不过，可以使用 `U` 格式和 `DateTimeInterface::format()` 作为 `string` 检索时间戳。

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 超出范围的异常现在是 DateRangeError。 |
| 8.0.0 | 这些函数在失败时不再返回 `false`。 |

 }}} 

## 示例

**`DateTime::getTimestamp()` 示例**

面向对象风格

```php


<?php
$date = new DateTimeImmutable();
echo $date->getTimestamp();

   
```

以上示例的输出类似于：

```text


1272509157

   
```

过程化风格

```php


<?php
$date = date_create();
echo date_timestamp_get($date);

   
```

以上示例的输出类似于：

```text


1272509157

   
```

如果需要以毫秒或微秒精度检索时间戳，则可以使用 `DateTimeInterface::format()` 函数。

**以毫秒和微秒精度检索时间戳**

面向对象风格

```php


<?php
$date = new DateTimeImmutable();
$milli = (int) $date->format('Uv'); // Timestamp in milliseconds
$micro = (int) $date->format('Uu'); // Timestamp in microseconds

echo $milli, "\n", $micro, "\n";

   
```

以上示例的输出类似于：

```text


1674057635586
1674057635586918

   
```

## 参见

 `DateTime::setTimestamp()` `DateTimeImmutable::setTimestamp()` `DateTimeInterface::format()`
