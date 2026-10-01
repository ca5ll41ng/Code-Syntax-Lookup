---
id: "zh-php-function-reflectionenumbackedcase-getbackingvalue"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionEnumBackedCase::getBackingValue"
title: "获取枚举条目回退的标量值"
signature: "public int|string ReflectionEnumBackedCase::getBackingValue()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionenumbackedcase.getbackingvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取枚举条目回退的标量值

## 说明

```php
public int|string ReflectionEnumBackedCase::getBackingValue()
```

获取枚举条目回退的标量值。

## 参数

此函数没有参数。

## 返回值

枚举条目对应的标量值。

## 示例

**`ReflectionEnum::getBackingValue()` 示例**

```php


<?php
enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}

$rEnum = new ReflectionEnum(Suit::class);

$rCase = $rEnum->getCase('Spades');

var_dump($rCase->getBackingValue());
?>

    
```

以上示例会输出：

```text


string(1) "S"

    
```

## 参见

枚举
