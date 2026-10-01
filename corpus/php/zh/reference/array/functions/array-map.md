---
id: "zh-php-function-function-array-map"
language: "php"
lang: "zh"
category: "function"
name: "array_map"
title: "为数组的每个元素应用回调函数"
signature: "array array_map(callable|null $callback, array $array, array $arrays)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-map.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为数组的每个元素应用回调函数

## 说明

```php
array array_map(callable|null $callback, array $array, array $arrays)
```

`array_map()` 返回一个 `array`，包含将 `$array` 的相应值作为回调的参数顺序调用 `$callback` 后的结果（如果提供了更多数组，还会利用 `$arrays` 传入）。`$callback` 函数形参的数量必须匹配 `array_map()` 实参中数组的数量。多余的实参数组将会被忽略。如果提供的实参数组的数量不足，将抛出 `ArgumentCountError`。

## 参数

- **`$callback`** — 回调函数 `callable`，应用到每个数组里的每个元素。 — 多个数组操作合并时，`$callback` 可以设置为 `null`，并且会返回数组，该数组的每个元素包含输入数组中内部数组指针相同位置的元素（见下面的示例）。如果只提供了 `$array` 数组，`array_map()` 会返回输入的数组。
- **`$array`** — 数组，遍历运行 `$callback` 函数。
- **`$arrays`** — 额外的数组列表，每个都遍历运行 `$callback` 函数。

## 返回值

返回数组，包含将 `$array` 的相应值作为回调的参数调用 `$callback` 函数后的结果（如果提供了更多数组，还会利用 `$arrays` 传入）。

当仅仅传入一个数组时，返回的数组会保留传入参数的键（key）。 传入多个数组时，返回的数组键是按顺序的 integer。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$callback` 接受引用传递参数，该方法将会抛出 `E_WARNING`。 |

## 示例

**`array_map()` 示例**

```php


<?php
function cube($n)
{
    return ($n * $n * $n);
}

$a = [1, 2, 3, 4, 5];
$b = array_map('cube', $a);
print_r($b);
?>

      
```

这使得 `$b` 成为：

```text


Array
(
    [0] => 1
    [1] => 8
    [2] => 27
    [3] => 64
    [4] => 125
)

      
```

**`array_map()` 使用匿名函数**

```php


<?php
$func = function(int $value): int {
    return $value * 2;
};

print_r(array_map($func, range(1, 5)));

// 或者从 PHP 7.4.0 起：

print_r(array_map(fn($value): int => $value * 2, range(1, 5)));

?>

    
```

以上示例会输出：

```text


Array
(
    [0] => 2
    [1] => 4
    [2] => 6
    [3] => 8
    [4] => 10
)

    
```

**`array_map()`：使用更多的数组**

```php


<?php
function show_Spanish(int $n, string $m): string
{
    return "The number {$n} is called {$m} in Spanish";
}

function map_Spanish(int $n, string $m): array
{
    return [$n => $m];
}

$a = [1, 2, 3, 4, 5];
$b = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

$c = array_map('show_Spanish', $a, $b);
print_r($c);

$d = array_map('map_Spanish', $a , $b);
print_r($d);
?>

    
```

以上示例会输出：

```text


// 打印 $c
Array
(
    [0] => The number 1 is called uno in Spanish
    [1] => The number 2 is called dos in Spanish
    [2] => The number 3 is called tres in Spanish
    [3] => The number 4 is called cuatro in Spanish
    [4] => The number 5 is called cinco in Spanish
)

// 打印 $d
Array
(
    [0] => Array
        (
            [1] => uno
        )

    [1] => Array
        (
            [2] => dos
        )

    [2] => Array
        (
            [3] => tres
        )

    [3] => Array
        (
            [4] => cuatro
        )

    [4] => Array
        (
            [5] => cinco
        )

)

    
```

传入两个及以上的数组时，它们元素数量将会相同。因为回调函数会并行地处理相互对应的元素。 如果几个数组的元素数量不一致：空元素会扩展短那个数组，直到长度和最长的数组一样。

此函数有个有趣的用法：传入 `null` 作为回调函数的名称，将创建多维数组（一个数组，内部包含数组。）

**多个数组的合并操作**

```php


<?php
$a = [1, 2, 3, 4, 5];
$b = ['one', 'two', 'three', 'four', 'five'];
$c = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

$d = array_map(null, $a, $b, $c);
print_r($d);
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => Array
        (
            [0] => 1
            [1] => one
            [2] => uno
        )

    [1] => Array
        (
            [0] => 2
            [1] => two
            [2] => dos
        )

    [2] => Array
        (
            [0] => 3
            [1] => three
            [2] => tres
        )

    [3] => Array
        (
            [0] => 4
            [1] => four
            [2] => cuatro
        )

    [4] => Array
        (
            [0] => 5
            [1] => five
            [2] => cinco
        )

)

    
```

**仅有 `$array1` 时，`$callback` 设置为 `null`**

```php


<?php
$array = [1, 2, 3];
var_dump(array_map(null, $array));
?>

    
```

以上示例会输出：

```text


array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

    
```

**`array_map()` 键（key）是 string**

```php


<?php
$arr = array("stringkey" => "value");
function cb1($a) {
    return [$a];
}
function cb2($a, $b) {
    return [$a, $b];
}
var_dump(array_map('cb1', $arr));
var_dump(array_map('cb2', $arr, $arr));
var_dump(array_map(null,  $arr));
var_dump(array_map(null, $arr, $arr));
?>

    
```

以上示例会输出：

```text


array(1) {
  ["stringkey"]=>
  array(1) {
    [0]=>
    string(5) "value"
  }
}
array(1) {
  [0]=>
  array(2) {
    [0]=>
    string(5) "value"
    [1]=>
    string(5) "value"
  }
}
array(1) {
  ["stringkey"]=>
  string(5) "value"
}
array(1) {
  [0]=>
  array(2) {
    [0]=>
    string(5) "value"
    [1]=>
    string(5) "value"
  }
}

    
```

**`array_map()` - 关联数组**

虽然 `array_map()` 不能直接支持使用数组的键（key）作为输入，但可以使用 `array_keys()` 进行模拟。

```php


<?php
$arr = [
    'v1' => 'First release',
    'v2' => 'Second release',
    'v3' => 'Third release',
];

// 注意： 在 7.4.0 之前，使用较长的语法来代替匿名函数。
$callback = fn(string $k, string $v): string => "$k was the $v";

$result = array_map($callback, array_keys($arr), array_values($arr));

var_dump($result);
?>

    
```

以上示例会输出：

```text


array(3) {
  [0]=>
  string(24) "v1 was the First release"
  [1]=>
  string(25) "v2 was the Second release"
  [2]=>
  string(24) "v3 was the Third release"
}

    
```

## 参见

`array_filter()` `array_reduce()` `array_walk()`
