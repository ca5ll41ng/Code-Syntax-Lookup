---
id: "zh-php-function-reflectionenum-getcase"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionEnum::getCase"
title: "返回指定的枚举条目"
signature: "public ReflectionEnumUnitCase ReflectionEnum::getCase(string $name)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionenum.getcase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定的枚举条目

## 说明

```php
public ReflectionEnumUnitCase ReflectionEnum::getCase(string $name)
```

根据名称返回指定枚举条目的反射对象。 如果请求的条目未定义，将抛出 `ReflectionException`。

## 参数

- **`$name`** — 要获取的条目名称。

## 返回值

`ReflectionEnumUnitCase` 或 `ReflectionEnumBackedCase` 的实例，具体视情况而定。

## 示例

**`ReflectionEnum::getCase()` 示例**

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

$rCase = $rEnum->getCase('Clubs');

var_dump($rCase->getValue());
?>

    
```

以上示例会输出：

```text


enum(Suit::Clubs)

    
```

## 参见

枚举 `ReflectionEnum::getCases()` `ReflectionEnum::hasCase()` `ReflectionEnum::isBacked()`
