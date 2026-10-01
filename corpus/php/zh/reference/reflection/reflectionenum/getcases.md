---
id: "zh-php-function-reflectionenum-getcases"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionEnum::getCases"
title: "返回枚举中的所有条目的清单"
signature: "public array ReflectionEnum::getCases()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionenum.getcases.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回枚举中的所有条目的清单

## 说明

```php
public array ReflectionEnum::getCases()
```

每个枚举都能包括零或多个条目。该方法能获取所有定义的条目， 顺序为语法中的顺序（也就是源码中出现的顺序）。

## 参数

此函数没有参数。

## 返回值

数组，包含了 Enum 的反射对象，包含每一个枚举条目。 对于 Unit Enum，它们都会是 `ReflectionEnumUnitCase` 的实例。 对于回退枚举，它们都会是 `ReflectionEnumBackedCase` 的实例。

## 示例

**`ReflectionEnum::getCases()` 示例**

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

$cases = $rEnum->getCases();

foreach ($cases as $rCase) {
    var_dump($rCase->getValue());
}
?>

    
```

以上示例会输出：

```text


enum(Suit::Hearts)
enum(Suit::Diamonds)
enum(Suit::Clubs)
enum(Suit::Spades)

    
```

## 参见

枚举 `ReflectionEnum::getCase()` `ReflectionEnum::isBacked()`
