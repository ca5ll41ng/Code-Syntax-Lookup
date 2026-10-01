---
id: "zh-php-function-function-array-reverse"
language: "php"
lang: "zh"
category: "function"
name: "array_reverse"
title: "返回单元顺序相反的数组"
signature: "array array_reverse(array $array, bool $preserve_keys = false)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-reverse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回单元顺序相反的数组

## 说明

```php
array array_reverse(array $array, bool $preserve_keys = false)
```

`array_reverse()` 接受数组 `$array` 作为输入并返回一个单元为相反顺序的新数组。

## 参数

- **`$array`** — 输入的数组。
- **`$preserve_keys`** — 如果设置为 `true` 会保留数字的键。 非数字的键则不受这个设置的影响，总是会被保留。

## 返回值

返回反转后的数组。

## 示例

**`array_reverse()` 例子**

```php


<?php
$input  = array("php", 4.0, array("green", "red"));
$reversed = array_reverse($input);
$preserved = array_reverse($input, true);

print_r($input);
print_r($reversed);
print_r($preserved);
?>

    
```

以上示例会输出：

```php


Array
(
    [0] => php
    [1] => 4
    [2] => Array
        (
            [0] => green
            [1] => red
        )

)
Array
(
    [0] => Array
        (
            [0] => green
            [1] => red
        )

    [1] => 4
    [2] => php
)
Array
(
    [2] => Array
        (
            [0] => green
            [1] => red
        )

    [1] => 4
    [0] => php
)

    
```

## 参见

`array_flip()`
