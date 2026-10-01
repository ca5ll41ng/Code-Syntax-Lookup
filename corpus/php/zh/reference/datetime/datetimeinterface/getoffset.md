---
id: "zh-php-function-datetime-getoffset"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeInterface::getOffset"
aliases: ["DateTimeImmutable::getOffset","DateTime::getOffset","date_offset_get"]
title: "返回时差"
signature: "public int DateTimeInterface::getOffset()"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.getoffset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回时差

## 说明

面向对象风格

```php
public int DateTimeInterface::getOffset()
```

```php
public int DateTimeImmutable::getOffset()
```

```php
public int DateTime::getOffset()
```

过程化风格

```php
int date_offset_get(DateTimeInterface $object)
```

返回时差。

## 参数

- **`$object`** — 仅为过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。

## 返回值

成功时返回与 UTC 之间的时差（以秒为单位）。

## 示例

**`DateTime::getOffset()` 示例**

面向对象风格

```php


<?php
$winter = new DateTimeImmutable('2010-12-21', new DateTimeZone('America/New_York'));
$summer = new DateTimeImmutable('2008-06-21', new DateTimeZone('America/New_York'));

echo $winter->getOffset() . "\n";
echo $summer->getOffset() . "\n";

   
```

以上示例会输出：

```text


-18000
-14400

   
```

过程化风格

```php


<?php
$winter = date_create('2010-12-21', timezone_open('America/New_York'));
$summer = date_create('2008-06-21', timezone_open('America/New_York'));

echo date_offset_get($winter) . "\n";
echo date_offset_get($summer) . "\n";

   
```

以上示例会输出：

```text


-18000
-14400

   
```

注意：-18000 = -5 小时，-14400 = -4 小时。
