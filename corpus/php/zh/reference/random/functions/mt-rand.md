---
id: "zh-php-function-function-mt-rand"
language: "php"
lang: "zh"
category: "function"
name: "mt_rand"
title: "通过梅森旋转（Mersenne Twister）随机数生成器生成随机值"
signature: "int mt_rand()"
module: "random"
source_url: "https://www.php.net/manual/zh/function.mt-rand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过梅森旋转（Mersenne Twister）随机数生成器生成随机值

## 说明

```php
int mt_rand()
```

```php
int mt_rand(int $min, int $max)
```

很多老的 libc 的随机数发生器具有一些不确定和未知的特性而且很慢。`mt_rand()` 函数是旧的 `rand()` 的临时替代。该函数用了[梅森旋转]()中已知的特性作为随机数发生器，它可以产生随机数值的平均速度比 libc 提供的 rand() 快四倍。

如果没有提供可选参数 `$min` 和 `$max`，`mt_rand()` 返回 0 到 `mt_getrandmax()` 之间的伪随机数。例如想要 5 到 15（包括 5 和 15）之间的随机数，用 `mt_rand(5, 15)`。

> 本函数并不会生成安全加密的值，并且*不可*用于加密或者要求返回值不可猜测的目的。
>
> 如果需要加密安全随机，则可以将 `Random\Engine\Secure` 引擎用于 `Random\Randomizer`。对于简单的用例，`random_int()` 和 `random_bytes()` 函数提供了操作系统的 CSPRNG 支持的方便且安全的 API。

> 此函数使用全局 Mt19937（“梅森旋转算法”）实例作为随机源，因此与所有其他使用全局 Mt19937 的函数共享其状态。 使用这些函数中的任何一个都会推进*所有*其他函数的序列，无论作用域如何。
>
> 通过向 `mt_srand()` 或 `srand()` 以已知值播种来生成可重复的序列也将从此函数产生可重复的输出。
>
> 在所有新编写的代码中，建议使用 `Random\Randomizer` 的方法。

## 参数

- **`$min`** — 可选的、返回的最小值（默认：0）
- **`$max`** — 可选的、返回的最大值（默认：`mt_getrandmax()`）

## 返回值

返回的随机整数值介于 `$min`（或 0）和 `$max`（或 `mt_getrandmax()`，包括两端）。

## 错误／异常

- 如果 `$max` 小于 `$min`，则会抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$max` 小于 `$min`，则会抛出 `ValueError` 异常。之前会抛出 `E_WARNING` 错误，并且函数返回 `false`。 |
| 7.2.0 | `rand()` 已收到模偏差的 错误修复。这意味着使用特定种子生成的序列可能与 64 位机器上的 PHP 7.1.0 不同。 |
| 7.1.0 | `rand()` 成为 `mt_rand()` 的别名。 |
| 7.1.0 | `mt_rand()` 成为使用梅森旋转（Mersenne Twister）算法的固定、正确版本。要使用旧行为，请使用 `mt_srand()` 并将 `MT_RAND_PHP` 作为第二个参数。 |

## 示例

**`mt_rand()` 例子**

```php


<?php
echo mt_rand(), "\n";
echo mt_rand(), "\n";

echo mt_rand(5, 15), "\n";
?>

    
```

以上示例的输出类似于：

```text


1604716014
1478613278
6

    
```

## 注释

> `$min` `$max` 的范围必须在 `getrandmax()` 范围内。即 (`$max` - `$min`) <= `getrandmax()`。否则，`rand()` 可能会返回质量差的随机数。

## 参见

`mt_srand()` `mt_getrandmax()` `random_int()` `random_bytes()`
