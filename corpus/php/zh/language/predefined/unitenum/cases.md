---
id: "zh-php-function-unitenum-cases"
language: "php"
lang: "zh"
category: "function"
name: "UnitEnum::cases"
title: "生成枚举的条目清单"
signature: "public static array UnitEnum::cases()"
module: "language"
source_url: "https://www.php.net/manual/zh/unitenum.cases.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成枚举的条目清单

## 说明

```php
public static array UnitEnum::cases()
```

该方法返回打包后的 array，以声明的顺序，包含了枚举的所有条目。

## 参数

此函数没有参数。

## 返回值

以语法中声明的顺序，返回该枚举中定义的所有条目数组。

## 示例

**基本用法**

下例演示了如何返回枚举条目。

```php


<?php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

var_dump(Suit::cases());
?>

   
```

以上示例会输出：

```text


array(4) {
    [0]=>
    enum(Suit::Hearts)
    [1]=>
    enum(Suit::Diamonds)
    [2]=>
    enum(Suit::Clubs)
    [3]=>
    enum(Suit::Spades)
}

   
```
