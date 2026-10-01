---
id: "zh-php-function-function-gettimeofday"
language: "php"
lang: "zh"
category: "function"
name: "gettimeofday"
title: "取得当前时间"
signature: "array|float gettimeofday(bool $as_float = false)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/function.gettimeofday.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得当前时间

## 说明

```php
array|float gettimeofday(bool $as_float = false)
```

本函数是 gettimeofday(2) 的接口。返回一个关联数组，包含有系统调用返回的数据。

## 参数

- **`$as_float`** — 当其设为 `true` 时，会返回浮点数而不是数组。

## 返回值

默认返回 `array`。如果设置了 `$as_float` 则会返回 `float`。

数组中的键为：

- "sec" - 自 Unix 纪元起的秒数
- "usec" - 微秒数
- "minuteswest" - 格林威治向西的分钟数
- "dsttime" - 夏令时修正的类型

## 示例

**`gettimeofday()` 示例**

```php


<?php
print_r(gettimeofday());

echo gettimeofday(true);

    
```

以上示例的输出类似于：

```text


Array
(
    [sec] => 1073504408
    [usec] => 238215
    [minuteswest] => 0
    [dsttime] => 1
)
1073504408.23910

    
```
