---
id: "zh-php-function-datetimezone-getoffset"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeZone::getOffset"
aliases: ["timezone_offset_get"]
title: "返回相对于 GMT 的时差"
signature: "public int DateTimeZone::getOffset(DateTimeInterface $datetime)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetimezone.getoffset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回相对于 GMT 的时差

## 说明

面向对象风格

```php
public int DateTimeZone::getOffset(DateTimeInterface $datetime)
```

过程化风格

```php
int timezone_offset_get(DateTimeZone $object, DateTimeInterface $datetime)
```

该函数返回参数 `$datetime` 中指定的日期/时间相对于 GMT 的时差。GMT 时差是通过 DateTimeZone 对象的时区信息计算出来的。

## 参数

- **`$object`** — 仅过程化风格：由 `timezone_open()` 返回的 `DateTimeZone` 对象。
- **`$datetime`** — 用来计算时差的 DateTime，其包含日期/时间。

## 返回值

成功时返回精确到秒的时差， 或者在失败时返回 `false`。

## 示例

**`DateTimeZone::getOffset()` 示例**

```php


<?php
// 创建两个时区对象，分别是台北（台湾）和东京（日本）
$dateTimeZoneTaipei = new DateTimeZone("Asia/Taipei");
$dateTimeZoneJapan = new DateTimeZone("Asia/Tokyo");

// 创建两个包含相同 Unix 时间戳的 DateTime 对象。区别是对应的时区不同。
$dateTimeTaipei = new DateTime("now", $dateTimeZoneTaipei);
$dateTimeJapan = new DateTime("now", $dateTimeZoneJapan);

// 计算包含日期/时间的 $dateTimeTaipei 对象与时区规则定义为东京的 $dateTimeZoneJapan 对象的 GMT 时差
$timeOffset = $dateTimeZoneJapan->getOffset($dateTimeTaipei);

// 应该展示 int(32400)（Sat Sep 8 01:00:00 1951 JST 之后的日期）。
var_dump($timeOffset);

    
```

以上示例会输出：

```text


int(32400)

    
```
