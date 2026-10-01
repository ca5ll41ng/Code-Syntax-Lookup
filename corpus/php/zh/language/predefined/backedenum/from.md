---
id: "zh-php-function-backedenum-from"
language: "php"
lang: "zh"
category: "function"
name: "BackedEnum::from"
title: "映射标量为 enum 实例"
signature: "public static static BackedEnum::from(int|string $value)"
module: "language"
source_url: "https://www.php.net/manual/zh/backedenum.from.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 映射标量为 enum 实例

## 说明

```php
public static static BackedEnum::from(int|string $value)
```

`from()` 方法将 `string` 和 `int` 翻译成对应存在的 enum 条目。 如果没有匹配的条目，会抛出 `ValueError`。

## 参数

- **`$value`** — 要映射到枚举条目的标量值。

## 返回值

该枚举的一个条目实例。

## 示例

**基本用法**

以下的例子演示了如何返回 enum 条目。

```php


<?php
enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}

$h = Suit::from('H');

var_dump($h);

$b = Suit::from('B');
?>

   
```

以上示例会输出：

```text


enum(Suit::Hearts)

Fatal error: Uncaught ValueError: "B" is not a valid backing value for enum "Suit" in /file.php:15

   
```

## 参见

`UnitEnum::cases()` `BackedEnum::tryFrom()`
