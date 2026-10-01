---
id: "zh-php-function-function-array-key-exists"
language: "php"
lang: "zh"
category: "function"
name: "array_key_exists"
title: "检查数组里是否有指定的键名或索引"
signature: "bool array_key_exists(string|int|float|bool|resource|null $key, array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-key-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查数组里是否有指定的键名或索引

## 说明

```php
bool array_key_exists(string|int|float|bool|resource|null $key, array $array)
```

数组里有键 `$key` 时，`array_key_exists()` 返回 `true`。 `$key` 可以是任何能作为数组索引的值。

## 参数

- **`$key`** — 要检查的键。
- **`$array`** — 一个数组，包含待检查的键。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> `array_key_exists()` 仅仅搜索第一维的键。 多维数组里嵌套的键不会被搜索到。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 在 `$key` 参数中使用 `null` 已被弃用，请改用空字符串。 |
| 8.0.0 | `$key` 参数现在接受 `bool`、`float`、`int`、`null`、`resource` 和 `string` 作为参数。 |
| 8.0.0 | 不再支持将 `object` 传递给 `$array` 参数。 |
| 7.4.0 | 已弃用将 `object` 传递给 `$array` 参数。建议使用 `property_exists()`。 |

## 示例

**`array_key_exists()` 示例**

```php


<?php
$searchArray = ['first' => 1, 'second' => 4];
var_dump(array_key_exists('first', $searchArray));
?>

    
```

以上示例会输出：

```text


bool(true)

    
```

**`array_key_exists()` 与 `isset()` 的对比**

`isset()` 对于数组中为 `null` 的值不会返回 `true`，而 `array_key_exists()` 会。

```php


<?php
$searchArray = ['first' => null, 'second' => 4];

var_dump(isset($searchArray['first']));
var_dump(array_key_exists('first', $searchArray));
?>

   
```

以上示例会输出：

```text


bool(false)
bool(true)

   
```

## 参见

`isset()` `array_keys()` `in_array()` `property_exists()`
