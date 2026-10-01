---
id: "zh-php-function-function-array-slice"
language: "php"
lang: "zh"
category: "function"
name: "array_slice"
title: "从数组中取出一段"
signature: "array array_slice(array $array, int $offset, int|null $length = null, bool $preserve_keys = false)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-slice.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从数组中取出一段

## 说明

```php
array array_slice(array $array, int $offset, int|null $length = null, bool $preserve_keys = false)
```

`array_slice()` 返回根据 `$offset` 和 `$length` 参数所指定的 `$array` 数组中的一段序列。

## 参数

- **`$array`** — 输入的数组。
- **`$offset`** — 如果 `$offset` 非负，则序列将从 `$array` 中的此偏移量开始。 — 如果 `$offset` 为负，则序列将从 `$array` 中距离末端这么远的地方开始。
  > 参数 `$offset` 标识的是数组中的位置，而不是键。


- **`$length`** — 如果给出了 `$length` 并且为正，则序列中将具有这么多的单元。 — 如果 array 比 `$length` 要短，只会保留有效的数组单元。 — 如果给出了 `$length` 并且为负，则序列将终止在距离数组末端这么远的地方。 — 如果省略，则序列将从 `$offset` 开始一直到 `$array` 的末端。
- **`$preserve_keys`**
  > 注意 `array_slice()` 默认会重新排序并重置数组的数字索引。你可以通过将 `$preserve_keys` 设为 `true` 来改变此行为。 无论本参数如何设置，都会保留字符串的键。



## 返回值

返回其中一段。 如果 offset 参数大于 array 尺寸，就会返回空的 array。

## 示例

**`array_slice()` 例子**

```php


<?php
$input = array("a", "b", "c", "d", "e");

$output = array_slice($input, 2);      // 返回 "c"， "d" 和 "e"
$output = array_slice($input, -2, 1);  // 返回 "d"
$output = array_slice($input, 0, 3);   // 返回 "a"， "b" 和 "c"

// 注意数组中 key 的不同
print_r(array_slice($input, 2, -1));
print_r(array_slice($input, 2, -1, true));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => c
    [1] => d
)
Array
(
    [2] => c
    [3] => d
)

    
```

**`array_slice()` 于索引从 1 开始的 array**

```php


<?php
$input = array(1 => "a", "b", "c", "d", "e");
print_r(array_slice($input, 1, 2));
?>

    
```

以上示例会输出：

```text


Array
(
    [0] => b
    [1] => c
)

    
```

**`array_slice()` 与混合类型键的 array**

```php


<?php
$ar = array('a'=>'apple', 'b'=>'banana', '42'=>'pear', 'd'=>'orange');
print_r(array_slice($ar, 0, 3));
print_r(array_slice($ar, 0, 3, true));
?>

    
```

以上示例会输出：

```text


Array
(
    [a] => apple
    [b] => banana
    [0] => pear
)
Array
(
    [a] => apple
    [b] => banana
    [42] => pear
)

    
```

## 参见

`array_splice()` `unset()` `array_chunk()`
