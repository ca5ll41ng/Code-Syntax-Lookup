---
id: "zh-php-function-function-array-rand"
language: "php"
lang: "zh"
category: "function"
name: "array_rand"
title: "从数组中随机取出一个或多个随机键"
signature: "int|string|array array_rand(array $array, int $num = 1)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.array-rand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从数组中随机取出一个或多个随机键

## 说明

```php
int|string|array array_rand(array $array, int $num = 1)
```

从数组中取出一个或多个随机的单元，并返回随机条目对应的键（一个或多个）。

> 本函数并不会生成安全加密的值，并且*不可*用于加密或者要求返回值不可猜测的目的。
>
> 如果需要加密安全随机，则可以将 `Random\Engine\Secure` 引擎用于 `Random\Randomizer`。对于简单的用例，`random_int()` 和 `random_bytes()` 函数提供了操作系统的 CSPRNG 支持的方便且安全的 API。

> 此函数使用全局 Mt19937（“梅森旋转算法”）实例作为随机源，因此与所有其他使用全局 Mt19937 的函数共享其状态。 使用这些函数中的任何一个都会推进*所有*其他函数的序列，无论作用域如何。
>
> 通过向 `mt_srand()` 或 `srand()` 以已知值播种来生成可重复的序列也将从此函数产生可重复的输出。
>
> 在所有新编写的代码中，建议使用 `Random\Randomizer` 的方法。

## 参数

- **`$array`** — 输入的数组。 不能为空。
- **`$num`** — 指定要取出的单元数量。 必须大于零，且小于或等于 `$array` 的长度。

## 返回值

如果只取出一个，`array_rand()` 返回随机单元的键名。 否则就返回包含随机键名的数组。 完成后，就可以根据随机的键获取数组的随机值。 如果返回的是包含随机键名的数组，数组单元的顺序按照键名在原数组中的顺序排列。

## 错误／异常

如果 `$array` 为空，或者 `$num` 超出范围， 就会抛出一个 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 如果 `$num` 超出范围，`array_rand()` 现在会抛出一个 `ValueError`； 之前会抛出一个 `E_WARNING`，并返回 `null`。 |
| 8.0.0 | 如果 `$array` 为空，`array_rand()` 现在会抛出一个 `ValueError`； 之前会抛出一个 `E_WARNING`，并返回 `null`。 |
| 7.1.0 | 内部随机化算法已从 libc rand 函数更改为使用 [梅森旋转算法（Mersenne Twister）]() 随机数生成器。 |

## 示例

**`array_rand()` 例子**

```php


<?php
$input = array("Neo", "Morpheus", "Trinity", "Cypher", "Tank");
$rand_keys = array_rand($input, 2);
echo $input[$rand_keys[0]] . "\n";
echo $input[$rand_keys[1]] . "\n";
?>

    
```

## 参见

`Random\Randomizer::pickArrayKeys()` `Random\Randomizer::shuffleArray()`
