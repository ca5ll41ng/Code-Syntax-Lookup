---
id: "zh-php-function-reflectionenum-isbacked"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionEnum::isBacked"
title: "检测 Enum 是否为回退（Backed）Enum"
signature: "public bool ReflectionEnum::isBacked()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionenum.isbacked.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测 Enum 是否为回退（Backed）Enum

## 说明

```php
public bool ReflectionEnum::isBacked()
```

回退 Enum 是具有本地 `string` 和 `int` 回退标量值。 并非所有枚举都是回退的。

## 参数

此函数没有参数。

## 返回值

如果枚举具有回退标量，返回 `true`，否则返回 `false`。

## 示例

**`ReflectionEnum::isBacked()` 示例**

```php


<?php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

enum BackedSuit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}

var_dump((new ReflectionEnum(Suit::class))->isBacked());
var_dump((new ReflectionEnum(BackedSuit::class))->isBacked());
?>

    
```

以上示例会输出：

```text


bool(false)
bool(true)

    
```

## 参见

枚举 `ReflectionEnum::getBackingType()`
