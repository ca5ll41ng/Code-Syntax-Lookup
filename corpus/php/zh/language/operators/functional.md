---
id: "zh-php-syntax-language-operators-functional"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.functional"
title: "函数式运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.functional.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 函数式运算符

函数式

PHP 8.5 及更高版本支持可直接作用于可调用对象的操作符。`|>` 操作符（或称为“管道”），在右侧接受单个参数的可调用对象，并将左侧的值传递给它，最终返回该可调用对象的结果。右侧的可调用对象可以是任何有效的 PHP 可调用对象：`Closure`、一等可调用对象、实现了 __invoke() 方法的对象等。

这意味着以下两行在逻辑上是等价的。

**使用 `|>`**

```php


<?php
$result = "Hello World" |> strlen(...);
echo $result, PHP_EOL;

$result = strlen("Hello World");
echo $result, PHP_EOL;
?>

   
```

以上示例会输出：

```text


11
11

   
```

对于单次调用，并不特别有用。当多个调用链式组合时，其作用才得以体现。也就是说，以下两段代码在逻辑上是等价的：

**链式 |> 调用**

```php


<?php
$result = "PHP Rocks"
    |> htmlentities(...)
    |> str_split(...)
    |> (fn($x) => array_map(strtoupper(...), $x))
    |> (fn($x) => array_filter($x, fn($v) => $v != 'O'))
;
print_r($result);

$temp = "PHP Rocks";
$temp = htmlentities($temp);
$temp = str_split($temp);
$temp = array_map(strtoupper(...), $temp);
$temp = array_filter($temp, fn($v) => $v != 'O');
$result = $temp;
print_r($result);
?>

   
```

以上示例会输出：

```text


Array
(
    [0] => P
    [1] => H
    [2] => P
    [3] =>
    [4] => R
    [6] => C
    [7] => K
    [8] => S
)
Array
(
    [0] => P
    [1] => H
    [2] => P
    [3] =>
    [4] => R
    [6] => C
    [7] => K
    [8] => S
)

   
```

管道的左侧可以是任何值或表达式。右侧可以是任何接受单个参数的有效 PHP 可调用对象，或是任何能够解析为这种可调用对象的表达式。不允许超过一个必需参数的函数，此类情况将如同普通调用时参数不足一样导致失败。不允许通过引用传递变量的函数。如果右侧无法解析为有效的可调用对象，则会抛出 Error。

> 需要注意，为了避免语法歧义，箭头函数在与管道操作符一起使用时必须用括号包裹，如上述示例所示。未遵循此要求将导致核心错误。

### 参见

`Closure`
