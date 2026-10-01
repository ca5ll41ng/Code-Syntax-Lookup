---
id: "zh-php-function-function-shuffle"
language: "php"
lang: "zh"
category: "function"
name: "shuffle"
title: "打乱数组"
signature: "true shuffle(array $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.shuffle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打乱数组

## 说明

```php
true shuffle(array $array)
```

本函数打乱（随机排列单元的顺序）一个数组。

> 本函数并不会生成安全加密的值，并且*不可*用于加密或者要求返回值不可猜测的目的。
>
> 如果需要加密安全随机，则可以将 `Random\Engine\Secure` 引擎用于 `Random\Randomizer`。对于简单的用例，`random_int()` 和 `random_bytes()` 函数提供了操作系统的 CSPRNG 支持的方便且安全的 API。

> 此函数使用全局 Mt19937（“梅森旋转算法”）实例作为随机源，因此与所有其他使用全局 Mt19937 的函数共享其状态。 使用这些函数中的任何一个都会推进*所有*其他函数的序列，无论作用域如何。
>
> 通过向 `mt_srand()` 或 `srand()` 以已知值播种来生成可重复的序列也将从此函数产生可重复的输出。
>
> 在所有新编写的代码中，建议使用 `Random\Randomizer` 的方法。

## 参数

- **`$array`** — 待操作的数组。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 内置的随机数产生算法从 libc rand 函数改成[梅森旋转]()伪随机数生成算法。 |

## 示例

**`shuffle()` 例子**

```php


<?php
$numbers = range(1, 20);
shuffle($numbers);
foreach ($numbers as $number) {
    echo "$number ";
}
?>

    
```

## 注释

> 此函数为 `$array` 中的元素赋与新的键名。这将删除原有的键名，而不是仅仅将键名重新排序。

> 重置数组中的内部指针，指向第一个元素。

## 参见

`Random\Randomizer::shuffleArray()` `Random\Randomizer::shuffleBytes()` `Random\Randomizer::pickArrayKeys()` 数组排序函数对比
