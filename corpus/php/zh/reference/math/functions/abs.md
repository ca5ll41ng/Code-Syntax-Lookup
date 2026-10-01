---
id: "zh-php-function-function-abs"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "abs"
title: "绝对值"
signature: "int|float abs(int|float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.abs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绝对值

## 说明

```php
int|float abs(int|float $num)
```

返回参数 `$num` 的绝对值。

## 参数

- **`$num`** — 要处理的数字值

## 返回值

`$num` 的绝对值。 如果参数 `$num` 是 `float`，则返回的类型也是 `float`，否则返回 `int`（因为 `float` 通常比 `int` 有更大的取值范围）。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$num` 不再接受支持数字转换的内部对象。 |

## 示例

**`abs()` 示例**

```php


<?php
var_dump(abs(-4.2));
var_dump(abs(5));
var_dump(abs(-5));
?>

    
```

以上示例会输出：

```text


float(4.2)
int(5)
int(5)

    
```

## 参见

`gmp_abs()` `gmp_sign()`
