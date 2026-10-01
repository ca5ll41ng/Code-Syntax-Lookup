---
id: "zh-php-function-function-rand"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "rand"
title: "产生一个随机整数"
signature: "int rand()"
module: "random"
source_url: "https://www.php.net/manual/zh/function.rand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 产生一个随机整数

## 说明

```php
int rand()
```

```php
int rand(int $min, int $max)
```

如果没有提供可选参数 `$min` 和 `$max` 调用 `rand()` 会返回 0 到 `getrandmax()` 之间的伪随机整数。例如想要 5 到 15（包括 5 和 15）之间的随机数，用 `rand(5, 15)`。

> 本函数并不会生成安全加密的值，并且*不可*用于加密或者要求返回值不可猜测的目的。
>
> 如果需要加密安全随机，则可以将 `Random\Engine\Secure` 引擎用于 `Random\Randomizer`。对于简单的用例，`random_int()` 和 `random_bytes()` 函数提供了操作系统的 CSPRNG 支持的方便且安全的 API。

> 此函数使用全局 Mt19937（“梅森旋转算法”）实例作为随机源，因此与所有其他使用全局 Mt19937 的函数共享其状态。 使用这些函数中的任何一个都会推进*所有*其他函数的序列，无论作用域如何。
>
> 通过向 `mt_srand()` 或 `srand()` 以已知值播种来生成可重复的序列也将从此函数产生可重复的输出。
>
> 在所有新编写的代码中，建议使用 `Random\Randomizer` 的方法。

> 在 PHP 7.1.0 之前，`getrandmax()` 在某些平台（如 Windows）上仅为 32767。如果需要的范围大于 32767，那么指定 `$min` 和 `$max` 参数就可以生成更大的数了，或者考虑用 `mt_rand()` 来替代之。

> 自 PHP 7.1.0 起，`rand()` 和 `mt_rand()` 使用相同的随机数生成器。为了保持向后兼容性，`rand()` 允许 `$max` 小于 `$min`，而不是像 `mt_rand()` 一样，返回 `false`。

## 参数

- **`$min`** — 返回的最低值（默认：0）
- **`$max`** — 返回的最高值（默认：`getrandmax()`）

## 返回值

介于 `$min` （或是 0）和 `$max` （或 `getrandmax()`，包含该值）之间的伪随机值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | `rand()` 已收到模偏差的 错误修复。这意味着使用特定种子生成的序列可能与 64 位机器上的 PHP 7.1.0 不同。 |
| 7.1.0 | `rand()` 成为 `mt_rand()` 的别名。 |

## 示例

**`rand()` 例子**

```php


<?php
echo rand(), "\n";
echo rand(), "\n";

echo rand(5, 15), "\n";
?>

    
```

以上示例的输出类似于：

```text


7771
22264
11

    
```

## 注释

> `$min` `$max` 的范围必须在 `getrandmax()` 范围内。即 abs(`$max` - `$min`) <= `getrandmax()`。否则，`rand()` 可能会返回质量差的随机数。

## 参见

`srand()` `getrandmax()` `mt_rand()` `random_int()` `random_bytes()`
