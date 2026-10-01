---
id: "zh-php-function-function-compact"
language: "php"
lang: "zh"
category: "function"
name: "compact"
title: "建立一个数组，包括变量名和它们的值"
signature: "array compact(array|string $var_name, array|string $var_names)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.compact.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立一个数组，包括变量名和它们的值

## 说明

```php
array compact(array|string $var_name, array|string $var_names)
```

创建一个包含变量与其值的数组。

对每个参数，`compact()` 在当前的符号表中查找该变量名并将它添加到输出的数组中， 变量名成为键名而变量的内容成为该键的值。简单说，它做的事和 `extract()` 正好相反。返回将所有变量添加进去后的数组。

> 在 PHP 7.3 之前版本，未设置的字符串会被静默忽略。

## 参数

- **`$var_name`** — `compact()` 接受可变的参数数量。每个参数不是包含变量名的字符串，就是变量名组成的数组。数组中可以包含由其他变量名组成的数组，`compact()` 会递归处理。

## 返回值

返回输出的数组，包含了添加的所有变量。

## 错误／异常

如果字符串指向的变量未定义，`compact()` 会产生 `E_WARNING` 级别的错误。

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果指定字符串引用了未设置的变量，现在会发出 `E_WARNING` 级别的错误。 |
| 7.3.0 | 现在，如果字符串指向的变量未定义，`compact()` 会产生 `E_NOTICE` 级错误。在此之前，这样的字符串会默默地跳过。 |

 }}} 

## 示例

**`compact()` 示例**

```php


<?php

$city  = "San Francisco";
$state = "CA";
$event = "SIGGRAPH";

$location_vars = array("city", "state");

$result = compact("event", $location_vars);
print_r($result);

?>

    
```

以上示例会输出：

```php


Array
(
    [event] => SIGGRAPH
    [city] => San Francisco
    [state] => CA
)

    
```

## 注释

> Gotcha
>
> 因为可变变量也许不能在函数内部用于 PHP 的超全局数组，此时不能将超全局数组传递入 `compact()` 中。

## 参见

`extract()`
