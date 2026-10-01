---
id: "zh-php-function-function-ceil"
language: "php"
lang: "zh"
category: "function"
name: "ceil"
title: "进一法取整"
signature: "float ceil(int|float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.ceil.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 进一法取整

## 说明

```php
float ceil(int|float $num)
```

如果有必要，通过对 `$num` 向上取整返回下一个最高的整数。

## 参数

- **`$num`** — 要进一法取整的值

## 返回值

返回不小于 `$num` 的下一个整数。`ceil()` 返回的类型仍然是 `float`，因为 `float` 值的范围通常比 `int` 要大。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$num` 不再接受支持数字转换的内部对象。 |

## 示例

**`ceil()` 示例**

```php


<?php
echo ceil(4.3), PHP_EOL;    // 5
echo ceil(9.999), PHP_EOL;  // 10
echo ceil(-3.14), PHP_EOL;  // -3
?>

    
```

## 参见

`floor()` `round()`
