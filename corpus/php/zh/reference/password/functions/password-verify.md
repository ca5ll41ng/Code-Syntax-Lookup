---
id: "zh-php-function-function-password-verify"
language: "php"
lang: "zh"
category: "function"
name: "password_verify"
title: "验证密码是否和散列值匹配"
signature: "bool password_verify(string $password, string $hash)"
module: "password"
source_url: "https://www.php.net/manual/zh/function.password-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 验证密码是否和散列值匹配

## 说明

```php
bool password_verify(string $password, string $hash)
```

验证密码是否和指定的散列值匹配。`password_verify()` 与 `crypt()` 兼容。因此，由 `crypt()` 创建的密码散列可以用于 `password_verify()` 一起使用。

注意 `password_hash()` 返回的散列包含了算法、 cost 和盐值。 因此，所有需要的信息都包含内。使得验证函数不需要储存额外盐值等信息即可验证散列。

时序攻击（timing attacks）对此函数不起作用。

## 参数

- **`$password`** — 用户的密码。
- **`$hash`** — 一个由 `password_hash()` 创建的散列值。

## 返回值

如果密码和散列值匹配则返回 `true`，否则返回 `false`。

## 示例

**`password_verify()` 示例**

这只是简单的示例，如果需要，建议重新生成正确的密码；请参见 `password_needs_rehash()` 示例。

```php


<?php
// 想知道以下字符从哪里来，可参见 password_hash() 示例
$hash = '$2y$12$4Umg0rCJwMswRw/l.SwHvuQV01coP0eWmGzd61QH2RvAOMANUBGC.';

if (password_verify('rasmuslerdorf', $hash)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}
?>

    
```

以上示例会输出：

```text


Password is valid!

    
```

## 参见

`password_needs_rehash()` `password_hash()` `sodium_crypto_pwhash_str_verify()`
