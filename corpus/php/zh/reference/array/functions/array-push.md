---
id: "zh-php-function-function-array-push"
language: "php"
lang: "zh"
category: "function"
name: "array_push"
title: "将一个或多个单元压入数组的末尾（入栈）"
signature: "int array_push(array $array, mixed $value1, [mixed $... = ...])"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将一个或多个单元压入数组的末尾（入栈）

## 说明

```php
int array_push(array $array, mixed $value1, [mixed $... = ...])
```

`array_push()` 将 `$array` 当成一个栈，并将传入的变量压入 `$array` 的末尾。`$array` 的长度将根据入栈变量的数目增加。和如下效果相同：

```php


<?php
$array[] = $var;
?>

   
```

并对每个传入的值重复以上动作。

> 如果用 `array_push()` 来给数组增加一个单元，还不如用 `$array[] =`，因为这样没有调用函数的额外负担。

> 如果第一个参数不是数组，`array_push()` 将发出一条警告。这和 `$var[]` 的行为不同，在 PHP 7.1.0 之前的版本中，后者将会新建一个数组。

## 参数

- **`$array`** — 输入的数组。
- **`$value1`** — 要压入 `$array` 末尾的第一个值。

## 返回值

返回处理之后数组的元素个数。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 可以只用一个参数来调用此函数，之前版本中至少需要两个参数。 |

## 示例

**`array_push()` 例子**

```php


<?php
$stack = array("orange", "banana");
array_push($stack, "apple", "raspberry");
print_r($stack);
?>

    
```

以上示例会输出：

```php


Array
(
    [0] => orange
    [1] => banana
    [2] => apple
    [3] => raspberry
)

    
```

## 参见

`array_pop()` `array_shift()` `array_unshift()`
