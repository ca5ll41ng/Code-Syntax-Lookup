---
id: "zh-php-function-function-srand"
language: "php"
lang: "zh"
category: "function"
name: "srand"
title: "播下随机数发生器种子"
signature: "void srand(int|null $seed = null, int $mode = MT_RAND_MT19937)"
module: "random"
source_url: "https://www.php.net/manual/zh/function.srand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 播下随机数发生器种子

## 说明

```php
void srand(int|null $seed = null, int $mode = MT_RAND_MT19937)
```

使用 `$seed` 播下随机数发生器种子，或者没有指定 `$seed` 时，使用随时值。

> 不再需要用 `srand()` 或 `mt_srand()` 给随机数发生器播种，因为现在是由系统自动完成的。

> 由于 Mt19937（“梅森旋转算法”）引擎仅接受 32 位整数作为种子，因此尽管 Mt19937 的范围为 219937-1，但可能的随机序列数量仅限于 232（即 4,294,967,296）。
>
> 当依赖隐式或显式随机播种时，重复会出现得更早。根据生日问题，在少于 80,000 个随机生成的种子后，预计重复种子的概率为 50&#37;。在随机生成大约 30,000 个种子后，重复种子的概率为 10&#37;。
>
> This makes Mt19937 unsuitable for applications where duplicated sequences must not happen with more than a negligible probability. 如果需要可重复的种子，`Random\Engine\Xoshiro256StarStar` 和 `Random\Engine\PcgOneseq128XslRr64` 引擎都支持更大的种子，它们不太可能随机碰撞。如果不需要再现性，`Random\Engine\Secure` 引擎提供加密安全随机性。

> 自 PHP 7.1.0 起，`srand()` 成为 `mt_srand()` 的别名。

## 参数

- **`$seed`** — 用线性同余生成器生成的值填充状态，该生成器使用解释为无符号 32 位整数的 `$seed` 进行播种。 — 如果省略 `$seed` 或为 `null`，则将使用随机无符号 32 位整数。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | `$seed` 现在可为 null。 |
| 7.1.0 | `srand()` 成为 `mt_srand()` 的别名。 |

## 参见

`rand()` `getrandmax()` `mt_srand()`
