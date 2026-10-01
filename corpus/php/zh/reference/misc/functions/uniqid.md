---
id: "zh-php-function-function-uniqid"
language: "php"
lang: "zh"
category: "function"
name: "uniqid"
title: "生成基于时间的标识符"
signature: "string uniqid(string $prefix = \"\", bool $more_entropy = false)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.uniqid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成基于时间的标识符

## 说明

```php
string uniqid(string $prefix = "", bool $more_entropy = false)
```

获取基于当前时间的标识符，精度为微秒，以指定 `$prefix` 作为前缀，并可选择附加随机生成的值。

> 本函数并不会生成安全加密的值，并且*不可*用于加密或者要求返回值不可猜测的目的。
>
> 如果需要加密安全随机，则可以将 `Random\Engine\Secure` 引擎用于 `Random\Randomizer`。对于简单的用例，`random_int()` 和 `random_bytes()` 函数提供了操作系统的 CSPRNG 支持的方便且安全的 API。

> 该函数不保证返回值的唯一性，因为该值基于当前时间（以微秒为单位）或当前时间加上少量随机数据（如果 `$more_entropy` 为 `true`）。

## 参数

- **`$prefix`** — 有用的参数。例如同一微秒时在多台主机上同时生成标识符。（如果系统时钟向后移动，例如通过 NTP 调整，即使在单个主机上也会发生这种情况。） — `$prefix`为空，则返回的字符串长度为 13。`$more_entropy` 为 `true`，则返回的字符串长度为 23。
- **`$more_entropy`** — 如果设置为 `true`，`uniqid()` 会在返回的字符串结尾增加额外的熵（使用线性同余组合发生器）。 使得唯一ID更具唯一性。

## 返回值

返回字符串形式的，基于时间戳的标识符。

> 该函数不保证返回值的唯一性。

## 示例

**`uniqid()` 示例**

```php


<?php
/* 一个 uniqid，像：4b3403665fea6 */
printf("uniqid(): %s\r\n", uniqid());

/* 也可以为 uniqid 添加前缀，以下两种方式相同：
 *
 * $uniqid = $prefix . uniqid();
 * $uniqid = uniqid($prefix);
 */
printf("uniqid('php_'): %s\r\n", uniqid('php_'));

/* 还可以启用 more_entropy 参数，在 
 * 某些系统上是必须的，比如 Cygwin。这使得 uniqid()
 * 产生如下值：4b340550242239.64159797
 */
printf("uniqid('', true): %s\r\n", uniqid('', true));
?>

    
```

## 注释

> 在 Cygwin 环境下，为了使此函数能够工作，`$more_entropy` 必须设置为 `true`。

## 参见

 `random_bytes()`
