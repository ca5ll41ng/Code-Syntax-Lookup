---
id: "zh-php-function-function-str-shuffle"
language: "php"
lang: "zh"
category: "function"
name: "str_shuffle"
title: "随机打乱一个字符串"
signature: "string str_shuffle(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-shuffle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 随机打乱一个字符串

## 说明

```php
string str_shuffle(string $string)
```

`str_shuffle()` 函数打乱一个字符串，使用任何一种可能的排序方案。

> 本函数并不会生成安全加密的值，并且*不可*用于加密或者要求返回值不可猜测的目的。
>
> 如果需要加密安全随机，则可以将 `Random\Engine\Secure` 引擎用于 `Random\Randomizer`。对于简单的用例，`random_int()` 和 `random_bytes()` 函数提供了操作系统的 CSPRNG 支持的方便且安全的 API。

> 此函数使用全局 Mt19937（“梅森旋转算法”）实例作为随机源，因此与所有其他使用全局 Mt19937 的函数共享其状态。 使用这些函数中的任何一个都会推进*所有*其他函数的序列，无论作用域如何。
>
> 通过向 `mt_srand()` 或 `srand()` 以已知值播种来生成可重复的序列也将从此函数产生可重复的输出。
>
> 在所有新编写的代码中，建议使用 `Random\Randomizer` 的方法。

## 参数

- **`$string`** — 输入字符串。

## 返回值

返回打乱后的字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 内置的随机算法从 libc rand 函数更改为[梅森旋转]()伪随机数生成算法。 |

## 示例

**`str_shuffle()` 示例**

```php


<?php
$str = 'abcdef';
$shuffled = str_shuffle($str);

// 输出类似于: bfdaec
echo $shuffled;
?>

    
```

## 参见

`Random\Randomizer::shuffleBytes()` `Random\Randomizer::shuffleArray()`
