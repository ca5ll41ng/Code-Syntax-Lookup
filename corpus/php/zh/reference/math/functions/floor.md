---
id: "zh-php-function-function-floor"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "floor"
title: "舍去法取整"
signature: "float floor(int|float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.floor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 舍去法取整

## 说明

```php
float floor(int|float $num)
```

如有必要，通过对 `$num` 向下取整（作为浮点数）。

## 参数

- **`$num`** — 要取整的数字

## 返回值

对 `$num` 向下取整。`floor()` 返回的类型仍然是 `float`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$num` 不再接受支持数字转换的内部对象。 |

## 示例

**`floor()` 示例**

```php


<?php
echo floor(4.3), PHP_EOL;   // 4
echo floor(9.999), PHP_EOL; // 9
echo floor(-3.14), PHP_EOL; // -4
?>

    
```

## 参见

`ceil()` `round()`
