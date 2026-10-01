---
id: "zh-php-function-function-array"
language: "php"
lang: "zh"
category: "function"
name: "array"
title: "新建一个数组"
signature: "array array(mixed $values)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 新建一个数组

## 说明

```php
array array(mixed $values)
```

创建数组。关于数组是什么的信息请阅读数组类型，还包含有关替代括号语法（`[]`）的详细信息。

## 参数

- **`$values`** — 语法“index => values”，用逗号分开，定义了索引和值。索引可以是字符串或数字。如果省略了索引，会自动产生从 0 开始的整数索引。如果索引是整数，则下一个产生的索引将是目前最大的整数索引 + 1。注意如果定义了两个完全一样的索引，则后面一个会覆盖前一个。 — 在最后一个定义的数组项目之后加一个逗号虽然不常见，却是合法的语法。

## 返回值

返回根据参数建立的数组。参数可以用 `=>` 运算符给出索引。关于数组是什么的信息请阅读数组一节。

## 示例

下面的例子演示了怎样建立一个二维数组，怎样给相应的数组指定键名，以及怎样在普通数组中略过和继续数字索引。

**`array()` 示例**

```php


<?php
$fruits = array (
    "fruits"  => array("a" => "orange", "b" => "banana", "c" => "apple"),
    "numbers" => array(1, 2, 3, 4, 5, 6),
    "holes"   => array("first", 5 => "second", "third")
);
print_r($fruits);
?>

    
```

**`array()` 的自动索引**

```php


<?php
$array = array(1, 1, 1, 1,  1, 8 => 1, 4 => 1, 19, 3 => 13);
print_r($array);
?>

    
```

以上示例会输出：

```php


Array
(
    [0] => 1
    [1] => 1
    [2] => 1
    [3] => 13
    [4] => 1
    [8] => 1
    [9] => 19
)

    
```

注意索引 3 被定义了两次，保留了最后的值 13。索引 4 在 索引 8 之后定义，下一个自动生成的索引（值为 19 那个）为 9，因为最大的索引是 8。

本例建立了从 1 开始的数组。

**从 1 开始索引的 `array()`**

```php


<?php
$firstQuarter = array(1 => 'January', 'February', 'March');
print_r($firstQuarter);
?>

    
```

以上示例会输出：

```text


Array
(
    [1] => January
    [2] => February
    [3] => March
)

    
```

在 Perl 中，可以访问在双引号内的数组的值。但在 PHP 中需要将数组用花括号括起来。

**访问双引号内的数组**

```php


<?php
$foo = array('bar' => 'baz');
echo "Hello {$foo['bar']}!"; // Hello baz!
?>

    
```

## 注释

> `array()` 是一个语言结构，用于字面上表示数组，不是常规的函数。

## 参见

`array_pad()` `list()` `count()` `range()`  array 类型
