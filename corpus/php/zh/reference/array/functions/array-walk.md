---
id: "zh-php-function-function-array-walk"
language: "php"
lang: "zh"
category: "function"
name: "array_walk"
title: "使用用户自定义函数对数组中的每个元素做回调处理"
signature: "true array_walk(array|object $array, callable $callback, mixed $arg = null)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-walk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用用户自定义函数对数组中的每个元素做回调处理

## 说明

```php
true array_walk(array|object $array, callable $callback, mixed $arg = null)
```

将用户自定义函数 `$callback` 应用到 `$array` 数组中的每个单元。

`array_walk()` 不会受到 `$array` 内部数组指针的影响。`array_walk()` 会遍历整个数组而不管指针的位置。

## 参数

- **`$array`** — 输入的数组。
- **`$callback`** — 典型情况下 `$callback` 接受两个参数。`$array` 参数的值作为第一个，键名作为第二个。
  > 如果 `$callback` 需要直接作用于数组中的值，则给 `$callback` 的第一个参数指定为引用。这样任何对这些单元的改变也将会改变原始数组本身。


  > 许多内部函数（例如 `strtolower()`）在传入超出预期数量的参数时会抛出异常，并且无法直接作为 `$callback` 使用。

 — 只有 `$array` 的值才可以被改变，用户不应在回调函数中改变该数组本身的结构。例如增加/删除单元，unset 单元等等。如果 `array_walk()` 作用的数组改变了，则此函数的的行为未经定义，且不可预期。
- **`$arg`** — 如果提供了可选参数 `$arg`，将被作为第三个参数传递给 `$callback`。

## 返回值

总是返回 `true`。

## 错误／异常

从 PHP 7.1.0 起，如果 `$callback` 函数需要的参数（数组成员的值和键）超过2个或者 也传递了 `$arg` 参数需要的参数超过3个时，会抛出 `ArgumentCountError`。 在此之前，每次 `array_walk()` 调用 `$callback` 的时候都会生成 E_WARNING 级别的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |
| 8.0.0 | 如果 `$callback` 期待通过引用传递第二个和第三个参数， 此函数现在将抛出 `E_WARNING`。 |

## 示例

**`array_walk()` 示例**

```php


<?php
$fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");

function test_alter(&$item1, $key, $prefix)
{
    $item1 = "$prefix: $item1";
}

function test_print($item2, $key)
{
    echo "$key. $item2\n";
}

echo "Before ...:\n";
array_walk($fruits, 'test_print');

array_walk($fruits, 'test_alter', 'fruit');
echo "... and after:\n";

array_walk($fruits, 'test_print');
?>

    
```

以上示例会输出：

```php


Before ...:
d. lemon
a. orange
b. banana
c. apple
... and after:
d. fruit: lemon
a. fruit: orange
b. fruit: banana
c. fruit: apple

    
```

**使用匿名函数的 `array_walk()` 示例**

```php


<?php
$elements = ['a', 'b', 'c'];
array_walk($elements, function ($value, $key) {
  echo "{$key} => {$value}\n";
});
?>

    
```

以上示例会输出：

```php


0 => a
1 => b
2 => c

    
```

## 参见

`array_walk_recursive()` `iterator_apply()` `list()` `each()` `call_user_func_array()` `array_map()`
