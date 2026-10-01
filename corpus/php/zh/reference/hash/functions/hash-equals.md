---
id: "zh-php-function-function-hash-equals"
language: "php"
lang: "zh"
category: "function"
name: "hash_equals"
title: "可防止时序攻击的字符串比较"
signature: "bool hash_equals(string $known_string, string $user_string)"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-equals.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 可防止时序攻击的字符串比较

## 说明

```php
bool hash_equals(string $known_string, string $user_string)
```

检查两个字符串是否相等，而不会通过执行时泄露有关 `$known_string` 内容的任何信息。

此函数可用于缓解计时攻击。使用 === 进行常规比较所需的时间的长短取决于两个值是否不同以及可以找到第一个不同的位置，从而泄露有关 `$known_string` 内容的秘密信息。

> 非常重要的一点是，用户提供的字符串必须是第二个参数。

## 参数

- **`$known_string`** — 必须保密的已知 `string`。
- **`$user_string`** — 与已知字符串进行比较的用户提供的 `string`。

## 返回值

当两个字符串相等时返回 `true`，否则返回 `false`。

## 示例

**`hash_equals()` 示例**

```php


<?php
$secretKey = '8uRhAeH89naXfFXKGOEj';

// 值和签名是由用户提供的，例如在 URL 中，使用 $_GET 检索。
$value = 'username=rasmuslerdorf';
$signature = '8c35009d3b50caf7f5d2c1e031842e6b7823a1bb781d33c5237cd27b57b5f327';

if (hash_equals(hash_hmac('sha256', $value, $secretKey), $signature)) {
    echo "The value is correctly signed.", PHP_EOL;
} else {
    echo "The value was tampered with.", PHP_EOL;
}
?>

    
```

以上示例会输出：

```text


The value is correctly signed.

    
```

## 注释

> 要想成功进行比较，那么所提供的 2 个参数必须是相同长度的字符串。 如果所提供的字符串长度不同，那么本函数会立即返回 `false`， 在时序攻击的场景下，已知字符串的长度可能会被泄露。

## 参见

`hash_hmac()`
