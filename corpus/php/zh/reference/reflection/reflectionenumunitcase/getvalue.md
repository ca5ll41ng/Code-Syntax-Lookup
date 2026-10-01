---
id: "zh-php-function-reflectionenumunitcase-getvalue"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionEnumUnitCase::getValue"
title: "获取反射对象描述的枚举条目对象"
signature: "public UnitEnum ReflectionEnumUnitCase::getValue()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionenumunitcase.getvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取反射对象描述的枚举条目对象

## 说明

```php
public UnitEnum ReflectionEnumUnitCase::getValue()
```

获取该反射对象描述的枚举条目对象。

## 参数

此函数没有参数。

## 返回值

反射对象描述的枚举条目对象。

## 示例

**`ReflectionEnum::getValue()` 示例**

```php


<?php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

$rEnum = new ReflectionEnum(Suit::class);

$rCase = $rEnum->getCase('Diamonds');

var_dump($rCase->getValue());
?>

    
```

以上示例会输出：

```text


enum(Suit::Diamonds)

    
```

## 参见

枚举
