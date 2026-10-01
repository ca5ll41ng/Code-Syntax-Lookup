---
id: "zh-php-function-function-date-parse"
language: "php"
lang: "zh"
category: "function"
name: "date_parse"
title: "返回指定日期/时间的详细信息的关联数组"
signature: "array date_parse(string $datetime)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.date-parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定日期/时间的详细信息的关联数组

## 说明

```php
array date_parse(string $datetime)
```

`date_parse()` 根据与 `strtotime()` 和 `DateTimeImmutable::__construct()` 相同的规则解析指定 `$datetime` 字符串。它不返回 Unix 时间戳（使用 `strtotime()`）或者 `DateTimeImmutable` 对象（使用 `DateTimeImmutable::__construct()`），而是返回包含在指定 `$datetime` 字符串中检测到相关信息的关联数组。

如果找不到某组元素的信息，那么这些数组元素将会设置为 `false` 或缺失。如果需要从相同的 `$datetime` 字符串构建时间戳或者 `DateTimeImmutable` 对象，需要将更多字段设置为非 `false` 值。查看以下示例以了解情况。

## 参数

- **`$datetime`** — `DateTimeImmutable::__construct()` 接受的日期/时间格式。

## 返回值

返回 `array`，包含解析日期/时间的信息。

返回的数组存在以下键 `year`、`month`、`day`、`hour`、`minute`、`second`、`fraction` 和 `is_localtime`。

如果存在 `is_localtime`，则 `zone_type` 表示时区类型。类型 `1`（UTC 时差），添加 `zone`、`is_dst`；类型 `2`（时区缩写），添加 `tz_abbr`、`is_dst`；类型 `3`（时区标识符），添加 `tz_abbr`、`tz_id`。

如果 `$datetime` 字符串存在类似 `+3 days` 这样的相对时间元素，则返回的数组则包含键为 `relative` 的嵌套数组。然后此数组将包含如下键 `year`、`month`、`day`、`hour`、`minute`、`second`，如果必要还会包含 `weekday` 和 `weekdays`，具体取决于传入的字符串。

数组包含 `warning_count` 和 `warnings` 字段。第一个表示发现了多少警告。元素 `warnings` 的键表示指定 `$datetime` 发生警告的位置，值为字符串，描述警告本身。

数组也包含 `error_count` 和 `errors` 字段。第一个表示发现了多少错误。元素 `errors` 的键表示指定 `$datetime` 发生错误的位置，值为字符串，描述错误本身。

> 如果同一个位置存在多个警告/错误，那么 `warnings` 和 `errors` 数组中元素的数量可能会少于 `warning_count` 或者 `error_count`。

## 错误／异常

date/time 的格式有错误时，返回数组的 'errors' 键将包含错误信息。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 返回数组的 `zone` 键现在代表秒，而不是分钟。并且正负符号已反转，例如：之前是 `-120` 现在是 `7200`。 |

## 示例

**具有全面的 `$datetime` 字符串的 `date_parse()` 示例**

```php


<?php
var_dump(date_parse("2006-12-12 10:00:00.5"));

    
```

以上示例会输出：

```text


array(12) {
  ["year"]=>
  int(2006)
  ["month"]=>
  int(12)
  ["day"]=>
  int(12)
  ["hour"]=>
  int(10)
  ["minute"]=>
  int(0)
  ["second"]=>
  int(0)
  ["fraction"]=>
  float(0.5)
  ["warning_count"]=>
  int(0)
  ["warnings"]=>
  array(0) {
  }
  ["error_count"]=>
  int(0)
  ["errors"]=>
  array(0) {
  }
  ["is_localtime"]=>
  bool(false)
}

    
```

如果在指定 `$datetime` 字符串中出现时区元素，那才会展示。在这种情况下，总会存在 `zone_type` 和更多元素，具体取决于其值。

**带时区缩写信息的 `date_parse()`**

```php


<?php
var_dump(date_parse("June 2nd, 2022, 10:28:17 BST"));

    
```

以上示例会输出：

```text


array(16) {
  ["year"]=>
  int(2022)
  ["month"]=>
  int(6)
  ["day"]=>
  int(2)
  ["hour"]=>
  int(10)
  ["minute"]=>
  int(28)
  ["second"]=>
  int(17)
  ["fraction"]=>
  float(0)
  ["warning_count"]=>
  int(0)
  ["warnings"]=>
  array(0) {
  }
  ["error_count"]=>
  int(0)
  ["errors"]=>
  array(0) {
  }
  ["is_localtime"]=>
  bool(true)
  ["zone_type"]=>
  int(2)
  ["zone"]=>
  int(0)
  ["is_dst"]=>
  bool(true)
  ["tz_abbr"]=>
  string(3) "BST"
}

    
```

**带时区标识符信息的 `date_parse()`**

```php


<?php
var_dump(date_parse("June 2nd, 2022, 10:28:17 Europe/London"));

    
```

以上示例会输出：

```text


array(14) {
  ["year"]=>
  int(2022)
  ["month"]=>
  int(6)
  ["day"]=>
  int(2)
  ["hour"]=>
  int(10)
  ["minute"]=>
  int(28)
  ["second"]=>
  int(17)
  ["fraction"]=>
  float(0)
  ["warning_count"]=>
  int(0)
  ["warnings"]=>
  array(0) {
  }
  ["error_count"]=>
  int(0)
  ["errors"]=>
  array(0) {
  }
  ["is_localtime"]=>
  bool(true)
  ["zone_type"]=>
  int(3)
  ["tz_id"]=>
  string(13) "Europe/London"
}

    
```

如果解析的 `$datetime` 字符串越小，那么可用的信息就越少。再本示例中，所有时间部分都返回为 `false`。

**带最小字符串的 `date_parse()`**

```php


<?php
var_dump(date_parse("June 2nd, 2022"));

    
```

以上示例会输出：

```text


array(12) {
  ["year"]=>
  int(2022)
  ["month"]=>
  int(6)
  ["day"]=>
  int(2)
  ["hour"]=>
  bool(false)
  ["minute"]=>
  bool(false)
  ["second"]=>
  bool(false)
  ["fraction"]=>
  bool(false)
  ["warning_count"]=>
  int(0)
  ["warnings"]=>
  array(0) {
  }
  ["error_count"]=>
  int(0)
  ["errors"]=>
  array(0) {
  }
  ["is_localtime"]=>
  bool(false)
}

    
```

相对格式不会影响从绝对格式格式化的值，但会被解析为“relative”元素。

**带相对格式的 `date_parse()`**

```php


<?php
var_dump(date_parse("2006-12-12 10:00:00.5 +1 week +1 hour"));

    
```

以上示例会输出：

```text


array(13) {
  ["year"]=>
  int(2006)
  ["month"]=>
  int(12)
  ["day"]=>
  int(12)
  ["hour"]=>
  int(10)
  ["minute"]=>
  int(0)
  ["second"]=>
  int(0)
  ["fraction"]=>
  float(0.5)
  ["warning_count"]=>
  int(0)
  ["warnings"]=>
  array(0) {
  }
  ["error_count"]=>
  int(0)
  ["errors"]=>
  array(0) {
  }
  ["is_localtime"]=>
  bool(false)
  ["relative"]=>
  array(6) {
    ["year"]=>
    int(0)
    ["month"]=>
    int(0)
    ["day"]=>
    int(7)
    ["hour"]=>
    int(1)
    ["minute"]=>
    int(0)
    ["second"]=>
    int(0)
  }
}

    
```

在某些时候，比如 `Thursday` 将会设置字符串的时间部分设置为 `0`。如果 `Thursday` 传递给 `DateTimeImmutable::__construct()` 也会导致小时，分钟，秒和小数部分设置为 `0`。下面的示例中，year 元素将设置为 `false`。

**带副作用的 `date_parse()`**

```php


<?php
var_dump(date_parse("Thursday, June 2nd"));

    
```

以上示例会输出：

```text


array(13) {
  ["year"]=>
  bool(false)
  ["month"]=>
  int(6)
  ["day"]=>
  int(2)
  ["hour"]=>
  int(0)
  ["minute"]=>
  int(0)
  ["second"]=>
  int(0)
  ["fraction"]=>
  float(0)
  ["warning_count"]=>
  int(0)
  ["warnings"]=>
  array(0) {
  }
  ["error_count"]=>
  int(0)
  ["errors"]=>
  array(0) {
  }
  ["is_localtime"]=>
  bool(false)
  ["relative"]=>
  array(7) {
    ["year"]=>
    int(0)
    ["month"]=>
    int(0)
    ["day"]=>
    int(0)
    ["hour"]=>
    int(0)
    ["minute"]=>
    int(0)
    ["second"]=>
    int(0)
    ["weekday"]=>
    int(4)
  }
}

    
```

## 参见

`date_parse_from_format()`，以解析具有特定格式的`$datetime` `checkdate()`，以便于公历日期验证 `getdate()`
