---
id: "zh-php-function-datetime-gettimezone"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeInterface::getTimezone"
aliases: ["DateTimeImmutable::getTimezone","DateTime::getTimezone","date_timezone_get"]
title: "返回相对于指定 DateTime 的时区"
signature: "public DateTimeZone|false DateTimeInterface::getTimezone()"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.gettimezone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回相对于指定 DateTime 的时区

## 说明

面向对象风格

```php
public DateTimeZone|false DateTimeInterface::getTimezone()
```

```php
public DateTimeZone|false DateTimeImmutable::getTimezone()
```

```php
public DateTimeZone|false DateTime::getTimezone()
```

过程化风格

```php
DateTimeZone|false date_timezone_get(DateTimeInterface $object)
```

返回相对于指定 DateTime 的时区。

## 参数

- **`$object`** — 仅为过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。

## 返回值

成功时返回 `DateTimeZone` 对象 或者在失败时返回 `false`。

## 示例

**`DateTime::getTimezone()` 示例**

面向对象风格

```php


<?php
$date = new DateTimeImmutable("now", new DateTimeZone('Europe/London'));
$tz = $date->getTimezone();
echo $tz->getName();

   
```

以上示例会输出：

```text


Europe/London

   
```

过程化风格

```php


<?php
$date = date_create("now", timezone_open('Europe/London'));
$tz = date_timezone_get($date);
echo timezone_name_get($tz);

   
```

以上示例会输出：

```text


Europe/London

   
```

## 参见

 `DateTime::setTimezone()`
