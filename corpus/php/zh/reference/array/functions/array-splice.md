---
id: "zh-php-function-function-array-splice"
language: "php"
lang: "zh"
category: "function"
name: "array_splice"
title: "去掉数组中的某一部分并用其它值取代"
signature: "array array_splice(array $array, int $offset, int|null $length = null, mixed $replacement = [])"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-splice.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 去掉数组中的某一部分并用其它值取代

## 说明

```php
array array_splice(array $array, int $offset, int|null $length = null, mixed $replacement = [])
```

把 `$array` 数组中由 `$offset` 和 `$length` 指定的单元去掉，如果提供了 `$replacement` 参数，则用其中的单元取代。

> `$array` 中的数字键名不被保留。

> 如果 `$replacement` 不是数组，会被 类型转换 成数组 (例如： (array) $replacement)。 当传入的 `$replacement` 是个对象或者 `null`，会导致未知的行为出现。

## 参数

- **`$array`** — 输入的数组。
- **`$offset`** — 如果 `$offset` 为正，则从 `$array` 数组中该值指定的偏移量开始移除。 — 如果 `$offset` 为负，则从 `$array` 末尾倒数该值指定的偏移量开始移除。
- **`$length`** — 如果省略 `$length`，则移除数组中从 `$offset` 到结尾的所有部分。 — 如果指定了 `$length` 并且为正值，则移除这么多单元。 — 如果指定了 `$length` 并且为负值，则移除部分停止于数组末尾该数量的单元。 — 如果设置了 `$length` 为零，不会移除单元。
  > 当给出了 `$replacement` 时要移除从 `$offset` 到数组末尾所有单元时，用 `count($input)` 作为 `$length`。


- **`$replacement`** — 如果给出了 `$replacement` 数组，则被移除的单元被此数组中的单元替代。 — 如果 `$offset` 和 `$length` 的组合结果是不会移除任何值，则 `$replacement` 数组中的单元将被插入到 `$offset` 指定的位置。
  > 不保留替换数组 `$replacement` 中的键名。

 — 如果用来替换 `$replacement` 只有一个单元，那么不需要给它加上 `array()` 或方括号，除非该单元本身就是一个数组、一个对象或者 `null`。

## 返回值

返回一个包含有被移除单元的数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$length` 现在可为空（nullable）。 |

## 示例

**`array_splice()` 示例**

```php


<?php
$input = array("red", "green", "blue", "yellow");
array_splice($input, 2);
var_dump($input);

$input = array("red", "green", "blue", "yellow");
array_splice($input, 1, -1);
var_dump($input);

$input = array("red", "green", "blue", "yellow");
array_splice($input, 1, count($input), "orange");
var_dump($input);

$input = array("red", "green", "blue", "yellow");
array_splice($input, -1, 1, array("black", "maroon"));
var_dump($input);
?>

    
```

以上示例会输出：

```text


array(2) {
  [0]=>
  string(3) "red"
  [1]=>
  string(5) "green"
}
array(2) {
  [0]=>
  string(3) "red"
  [1]=>
  string(6) "yellow"
}
array(2) {
  [0]=>
  string(3) "red"
  [1]=>
  string(6) "orange"
}
array(5) {
  [0]=>
  string(3) "red"
  [1]=>
  string(5) "green"
  [2]=>
  string(4) "blue"
  [3]=>
  string(5) "black"
  [4]=>
  string(6) "maroon"
}

    
```

**几个以不同表达式实现相同效果的 `array_splice()` 示例**

以下表达式是相同的：

```php


<?php

// 添加两个新元素到 $input
array_push($input, $x, $y);
array_splice($input, count($input), 0, array($x, $y));

// 移除 $input 中的最后一个元素
array_pop($input);
array_splice($input, -1);

// 移除 $input 中第一个元素
array_shift($input);
array_splice($input, 0, 1);

// 在 $input 的开头插入一个元素
array_unshift($input, $x, $y);
array_splice($input, 0, 0, array($x, $y));

// 在 $input 的索引 $x 处替换值
$input[$x] = $y; // 对于键名和偏移量等值的数组
array_splice($input, $x, 1, $y);
?>

    
```

## 参见

`array_merge()` `array_slice()` `unset()`
