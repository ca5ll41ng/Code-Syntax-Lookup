---
id: "zh-php-function-backedenum-tryfrom"
language: "php"
lang: "zh"
category: "function"
name: "BackedEnum::tryFrom"
title: "映射标量为 enum 实例或 null"
signature: "public static static|null BackedEnum::tryFrom(int|string $value)"
module: "language"
source_url: "https://www.php.net/manual/zh/backedenum.tryfrom.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 映射标量为 enum 实例或 null

## 说明

```php
public static static|null BackedEnum::tryFrom(int|string $value)
```

`tryFrom()` 方法将 `string` 和 `int` 翻译成对应存在的 enum 条目。 如果没有找到匹配的条目，返回 null。

## 参数

- **`$value`** — 要映射到枚举条目的标量值。

## 返回值

该枚举的一个条目实例，未找到时返回 `null`。

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

$h = Suit::tryFrom('H');

var_dump($h);

$b = Suit::tryFrom('B') ?? Suit::Spades;

var_dump($b);
?>

   
```

以上示例会输出：

```text


enum(Suit::Hearts)
enum(Suit::Spades)

   
```

## 参见

`UnitEnum::cases()` `BackedEnum::from()`
