---
id: "zh-php-function-reflectionenum-hascase"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionEnum::hasCase"
title: "在枚举上检测条目"
signature: "public bool ReflectionEnum::hasCase(string $name)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionenum.hascase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在枚举上检测条目

## 说明

```php
public bool ReflectionEnum::hasCase(string $name)
```

检测在枚举是是否定义指定的条目。

## 参数

- **`$name`** — 要检测的条目。

## 返回值

条目已定义时返回 `true`，没有时返回 `false`。

## 示例

**`ReflectionEnum::hasCase()` 示例**

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

var_dump($rEnum->hasCase('Hearts'));
var_dump($rEnum->hasCase('Horseshoes'));
?>

    
```

以上示例会输出：

```text


bool(true)
bool(false)

    
```

## 参见

枚举 `ReflectionEnum::getCase()` `ReflectionEnum::getCases()`
