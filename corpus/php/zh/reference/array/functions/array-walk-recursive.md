---
id: "zh-php-function-function-array-walk-recursive"
language: "php"
lang: "zh"
category: "function"
name: "array_walk_recursive"
title: "对数组中的每个成员递归地应用用户函数"
signature: "true array_walk_recursive(array|object $array, callable $callback, mixed $arg = null)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-walk-recursive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对数组中的每个成员递归地应用用户函数

## 说明

```php
true array_walk_recursive(array|object $array, callable $callback, mixed $arg = null)
```

将用户自定义函数 `$callback` 应用到 `$array` 数组中的每个单元。本函数会递归到更深层的数组中去。

## 参数

- **`$array`** — 输入的数组。
- **`$callback`** — 典型情况下 `$callback` 接受两个参数。`$array` 参数的值作为第一个，键名作为第二个。
  > 如果 `$callback` 需要直接作用于数组中的值，则给 `$callback` 的第一个参数指定为引用。这样任何对这些单元的改变也将会改变原始数组本身。


- **`$arg`** — 如果提供了可选参数 `$arg`，将被作为第三个参数传递给 `$callback`。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |

## 示例

**`array_walk_recursive()` 例子**

```php


<?php
$sweet = array('a' => 'apple', 'b' => 'banana');
$fruits = array('sweet' => $sweet, 'sour' => 'lemon');

function test_print($item, $key)
{
    echo "$key holds $item\n";
}

array_walk_recursive($fruits, 'test_print');
?>

    
```

以上示例会输出：

```php


a holds apple
b holds banana
sour holds lemon

    
```

注意上例中的键 '`sweet`' 并没有显示出来。任何其值为 `array` 的键都不会被传递到回调函数中去。

## 参见

`array_walk()`
