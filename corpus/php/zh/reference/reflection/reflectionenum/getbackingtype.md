---
id: "zh-php-function-reflectionenum-getbackingtype"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionEnum::getBackingType"
title: "获取枚举回退的类型"
signature: "public ReflectionNamedType|null ReflectionEnum::getBackingType()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionenum.getbackingtype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取枚举回退的类型

## 说明

```php
public ReflectionNamedType|null ReflectionEnum::getBackingType()
```

如果一个枚举是回退枚举，该方法会根据枚举回退的类型， 返回 `ReflectionType` 的实例。 如果不是个回退枚举，会返回 `null`。

## 参数

此函数没有参数。

## 返回值

`ReflectionNamedType` 的实例。 如果 Enum 没有回退的类型时，返回 `null`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 返回类型现在声明为 `?ReflectionNamedType`。之前声明为 `?ReflectionType`。 |

## 示例

**`ReflectionEnum::getBackingType()` 示例**

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

$rBackingType = $rEnum->getBackingType();

var_dump((string) $rBackingType);
?>

    
```

以上示例会输出：

```text


string(6) "string"

    
```

## 参见

枚举 `ReflectionEnum::isBacked()`
