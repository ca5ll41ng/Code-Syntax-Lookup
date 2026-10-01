---
id: "zh-php-function-datetimezone-getlocation"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeZone::getLocation"
aliases: ["timezone_location_get"]
title: "返回与时区相关的定位信息"
signature: "public array|false DateTimeZone::getLocation()"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetimezone.getlocation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回与时区相关的定位信息

## 说明

面向对象风格

```php
public array|false DateTimeZone::getLocation()
```

过程化风格

```php
array|false timezone_location_get(DateTimeZone $object)
```

返回时区的位置信息，包含国家代码，经纬度和注释。

## 参数

- **`$object`** — 仅过程化风格：由 `timezone_open()` 返回的 `DateTimeZone` 对象。

## 返回值

包含时区的位置信息的数组 或者在失败时返回 `false`。

## 示例

**`DateTimeZone::getLocation()` 函数的示例**

```php


<?php
$tz = new DateTimeZone("Asia/Jakarta");
print_r($tz->getLocation());
print_r(timezone_location_get($tz));

    
```

以上示例会输出：

```text


Array
(
    [country_code] => ID
    [latitude] => -6.16667
    [longitude] => 106.8
    [comments] => Java, Sumatra
)
Array
(
    [country_code] => ID
    [latitude] => -6.16667
    [longitude] => 106.8
    [comments] => Java, Sumatra
)

    
```

`country_code` 元素包含每个条目的 ISO 3166-1 alpha-2 国家代码。`latitude` 和 `longitude` 元素包含从时区标识符中对应城市的坐标，`comments` 包含（当其值不为 `false` 时）该时区在指定国家适用区域的提示信息。此信息适合向最终用户展示。

## 参见

 `DateTimeZone::listIdentifiers()`，以获得所有支持的时区标识符的完整或部分列表
