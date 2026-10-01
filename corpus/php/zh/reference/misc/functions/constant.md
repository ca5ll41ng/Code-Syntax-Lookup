---
id: "zh-php-function-function-constant"
language: "php"
lang: "zh"
category: "function"
name: "constant"
title: "返回一个常量的值"
signature: "mixed constant(string $name)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.constant.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个常量的值

## 说明

```php
mixed constant(string $name)
```

返回 `$name` 对应的常量的值。

当你不知道常量名，却需要获取常量的值时，`constant()` 就很有用了。也就是说，常量名储存在一个变量里，或者由函数返回时。

该函数也适用类常量和 enum cases。

## 参数

- **`$name`** — 常量名。

## 返回值

返回常量的值。

## 错误／异常

如果常量未定义，会抛出 `Error` 异常。 在 PHP 8.0.0 之前，会产生 `E_WARNING` 级别的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果常量未定义，`constant()` 现在会抛出 `Error` 异常。以前会产生一个 `E_WARNING` 级别的错误并返回 `null`。 |

## 示例

**`constant()` 与常量一起使用**

```php


<?php

define("MAXSIZE", 100);

echo MAXSIZE;
echo constant("MAXSIZE"); // 和上行一样


interface bar {
    const test = 'foobar!';
}

class foo {
    const test = 'foobar!';
}

$const = 'test';

var_dump(constant('bar::'. $const)); // string(7) "foobar!"
var_dump(constant('foo::'. $const)); // string(7) "foobar!"

?>

    
```

**`constant()` 和 Enum Cases 一起使用（自 PHP 8.1.0 起）**

```php


<?php

enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

$case = 'Hearts';

var_dump(constant('Suit::'. $case)); // enum(Suit::Hearts)

?>

    
```

## 参见

`define()` `defined()` `get_defined_constants()` 关于 常量 的章节
