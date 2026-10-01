---
id: "zh-php-function-function-date-sunrise"
language: "php"
lang: "zh"
category: "function"
name: "date_sunrise"
title: "返回给定的日期与地点的日出时间"
signature: "#[\\Deprecated] string|int|float|false date_sunrise(int $timestamp, int $returnFormat = SUNFUNCS_RET_STRING, float|null $latitude = null, float|null $longitude = null, float|null $zenith = null, float|null $utcOffset = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.date-sunrise.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回给定的日期与地点的日出时间

## 说明

```php
#[\Deprecated] string|int|float|false date_sunrise(int $timestamp, int $returnFormat = SUNFUNCS_RET_STRING, float|null $latitude = null, float|null $longitude = null, float|null $zenith = null, float|null $utcOffset = null)
```

`date_sunrise()` 返回给定的日期（以 `$timestamp` 指定）与地点的日出时间。

## 参数

- **`$timestamp`** — 取 `$timestamp`所在日期的日出时间。
- **`$returnFormat`** — | 常量 | 说明 | 取值举例 | | --- | --- | --- | | SUNFUNCS_RET_STRING | 以 `string` 格式返回结果 | 16:46 | | SUNFUNCS_RET_DOUBLE | 以 `float` 格式返回结果 | 16.78243132 | | SUNFUNCS_RET_TIMESTAMP | 以 `int` 格式（时间戳）返回结果 | 1095034606 |
- **`$latitude`** — 默认是指北纬。因此如果要指定南纬，必须传递一个负值。 参见 date.default_latitude
- **`$longitude`** — 默认是指东经。因此如果要指定西经，必须传递一个负值。 参见 date.default_longitude
- **`$zenith`** — `$zenith` is the angle between the center of the sun and a line perpendicular to earth's surface. It defaults to date.sunrise_zenith | Angle | Description | | --- | --- | | 90°50' | Sunrise: the point where the sun becomes visible. | | 96° | Civil twilight: conventionally used to signify the start of dawn. | | 102° | Nautical twilight: the point at which the horizon starts being visible at sea. | | 108° | Astronomical twilight: the point at which the sun starts being the source of any illumination. |
- **`$utcOffset`** — 单位是小时。 The `$utcOffset` is ignored, if `$returnFormat` is `SUNFUNCS_RET_TIMESTAMP`.

## 返回值

按指定格式 `$returnFormat` 返回的日出时间， 或者在失败时返回 `false`。 One potential reason for failure is that the sun does not rise at all, which happens inside the polar circles for part of the year.

## 错误／异常

在每次调用日期/时间函数时，如果时区无效则会引发 `E_NOTICE` 错误。参见 `date_default_timezone_set()`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 此函数已弃用，请改用 `date_sun_info()`。 |
| 8.0.0 | `$latitude`、`$longitude`、`$zenith` 和 `$utcOffset` 现在可为 null。 |

## 示例

**`date_sunrise()` 示例**

```php


<?php

/* 计算葡萄牙里斯本的日出时间
Latitude:  北纬 38.4 度
Longitude: 西经 9 度
Zenith ~= 90
offset: +1 GMT
*/

echo date("D M d Y"). ', sunrise time : ' .date_sunrise(time(), SUNFUNCS_RET_STRING, 38.4, -9, 90, 1);

    
```

以上示例的输出类似于：

```text


Deprecated: Constant SUNFUNCS_RET_STRING is deprecated in script on line 10
Deprecated: Function date_sunrise() is deprecated since 8.1, use date_sun_info() instead in script on line 10
Mon Dec 20 2004, sunrise time : 08:54

    
```

**No sunrise**

```php


<?php
$solstice = strtotime('2017-12-21');
var_dump(date_sunrise($solstice, SUNFUNCS_RET_STRING, 69.245833, -53.537222));

    
```

以上示例会输出：

```text


Deprecated: Constant SUNFUNCS_RET_STRING is deprecated in script on line 3
Deprecated: Function date_sunrise() is deprecated since 8.1, use date_sun_info() instead in script on line 3
bool(false)

    
```

## 参见

`date_sun_info()`
