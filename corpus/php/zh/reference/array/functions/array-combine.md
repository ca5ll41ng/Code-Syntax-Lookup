---
id: "zh-php-function-function-array-combine"
language: "php"
lang: "zh"
category: "function"
name: "array_combine"
title: "创建一个数组，用一个数组的值作为其键名，另一个数组的值作为其值"
signature: "array array_combine(array $keys, array $values)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-combine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个数组，用一个数组的值作为其键名，另一个数组的值作为其值

## 说明

```php
array array_combine(array $keys, array $values)
```

返回 `array`，用来自 `$keys` 数组的值作为键名，来自 `$values` 数组的值作为相应的值。

## 参数

- **`$keys`** — 将被作为新数组的键。非法的值将会被转换为字符串类型（`string`）。
- **`$values`** — 将被作为 `Array` 的值。

## 返回值

返回合并后的 `array`。

## 错误／异常

自 PHP 8.0.0 起，如果 `$keys` 和 `$values` 的元素数量不同，将会抛出 `ValueError`。在 PHP 8.0.0 之前，会引发 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果每个数组的元素数量不相等，现在 `array_combine()` 将会抛出 `ValueError`，之前此方法返回 `false`。 |

## 示例

**`array_combine()` 简单的示例**

```php


<?php
$a = array('green', 'red', 'yellow');
$b = array('avocado', 'apple', 'banana');
$c = array_combine($a, $b);

print_r($c);
?>

    
```

以上示例会输出：

```text


Array
(
    [green] => avocado
    [red] => apple
    [yellow] => banana
)

    
```

## 参见

`array_merge()` `array_walk()` `array_values()` `array_map()`
