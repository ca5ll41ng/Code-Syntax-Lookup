---
id: "zh-php-function-function-openssl-random-pseudo-bytes"
language: "php"
lang: "zh"
category: "function"
name: "openssl_random_pseudo_bytes"
title: "生成一个伪随机字节串"
signature: "string openssl_random_pseudo_bytes(int $length, bool $strong_result = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-random-pseudo-bytes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成一个伪随机字节串

## 说明

```php
string openssl_random_pseudo_bytes(int $length, bool $strong_result = null)
```

生成一个伪随机字节串 `string` ，字节数由 `$length` 参数指定。

通过 `$strong_result` 参数可以表示在生成随机字节的过程中是否使用了强加密算法。返回值为 `false` 的情况很少见，但已损坏或老化的有些系统上会出现。

## 参数

- **`$length`** — 所需字节串的长度，必须为正整数且小于等于 `2147483647`。PHP 会试着将该参数转换为非空整数来使用它。
- **`$strong_result`** — 如果传递到该函数中，将会保存为一个 `bool` 值来表明是否使用了“强加密”，如果被用于GPG和密码之类的将返回 `true`，否则返回 `false`

## 返回值

返回生成的字节 `string`。

## 错误／异常

`openssl_random_pseudo_bytes()` 失败时抛出 `Exception`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$strong_result` 现在可为 null。 |
| 7.4.0 | 此函数失败时不再返回 `false`，而是会抛出 `Exception`。 |

## 示例

**`openssl_random_pseudo_bytes()` 示例**

```php


<?php
for ($i = 1; $i <= 4; $i++) {
    $bytes = openssl_random_pseudo_bytes($i, $cstrong);
    $hex   = bin2hex($bytes);

    echo "Lengths: Bytes: $i and Hex: " . strlen($hex) . PHP_EOL;
    var_dump($hex);
    var_dump($cstrong);
    echo PHP_EOL;
}
?>

    
```

以上示例的输出类似于：

```text


Lengths: Bytes: 1 and Hex: 2
string(2) "42"
bool(true)

Lengths: Bytes: 2 and Hex: 4
string(4) "dc6e"
bool(true)

Lengths: Bytes: 3 and Hex: 6
string(6) "288591"
bool(true)

Lengths: Bytes: 4 and Hex: 8
string(8) "ab86d144"
bool(true)


    
```

## 参见

 `random_bytes()` `bin2hex()` `crypt()` `random_int()`
