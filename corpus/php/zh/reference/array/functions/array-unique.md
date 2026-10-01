---
id: "zh-php-function-function-array-unique"
language: "php"
lang: "zh"
category: "function"
name: "array_unique"
title: "移除数组中重复的值"
signature: "array array_unique(array $array, int $flags = SORT_STRING)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-unique.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 移除数组中重复的值

## 说明

```php
array array_unique(array $array, int $flags = SORT_STRING)
```

`array_unique()` 接受 `$array` 作为输入并返回没有重复值的新数组。

注意键名保留不变。如果在指定了 `$flags` 时存在多个相等的元素，会保留第一个相等的元素的键（key）和值（value）。

> 当且仅当 `(string) $elem1 === (string) $elem2` 时两个单元被认为相同。例如，字符串表达一样时，会使用首个元素。

## 参数

- **`$array`** — 输入的数组。
- **`$flags`** — 第二个可选参数`$flags` 可用于修改比较行为： — 比较类型标记： - `SORT_REGULAR` - 按照通常方法比较（不修改类型） - `SORT_NUMERIC` - 按照数字形式比较 - `SORT_STRING` - 按照字符串形式比较 - `SORT_LOCALE_STRING` - 根据当前的本地化设置，按照字符串比较。

## 返回值

返回过滤后的数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 如果 `$flags` 是 `SORT_STRING`， 之前会复制 `$array` 并移除非唯一数组（之后并不打包数组）， 现在是通过添加唯一元素来生成新数组。这可能会导致不同的数字索引。 |

## 示例

**`array_unique()` 示例**

```php


<?php

$input = ["a" => "green", "red", "b" => "green", "blue", "red"];
$result = array_unique($input);
print_r($result);

?>

    
```

以上示例会输出：

```php


Array
(
    [a] => green
    [0] => red
    [1] => blue
)

    
```

**`array_unique()` 和类型**

```php


<?php

$input = [4, "4", "3", 4, 3, "3"];
$result = array_unique($input);
var_dump($result);

?>

    
```

以上示例会输出：

```php


array(2) {
  [0] => int(4)
  [2] => string(1) "3"
}

    
```

## 注释

> 注意，`array_unique()` 不能应用于多维数组。

## 参见

`array_count_values()`
