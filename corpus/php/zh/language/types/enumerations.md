---
id: "zh-php-syntax-language-types-enumerations"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.enumerations"
title: "Enum 枚举"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.enumerations.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enum 枚举

### 枚举基础

枚举是在类、类常量基础上的约束层， 目标是提供一种能力：定义包含可能值的封闭集合类型。

 
```php

<?php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

function do_stuff(Suit $s)
{
    // ...
}

do_stuff(Suit::Spades);
?>

   
```

 

详情参阅枚举章节。

### 类型转换

将 `enum` 转换为 `object` 不会有变化。 将 `enum` 转换为 `array`， 纯粹枚举会创建单个 `name` 键的数组； 回退枚举创建带 `name` 和 `value` 键的数组。 其他类型转换都会导致错误。
