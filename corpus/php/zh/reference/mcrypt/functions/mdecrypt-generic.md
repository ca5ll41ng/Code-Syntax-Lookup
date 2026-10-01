---
id: "zh-php-function-function-mdecrypt-generic"
language: "php"
lang: "zh"
category: "function"
name: "mdecrypt_generic"
title: "解密数据"
signature: "string mdecrypt_generic(resource $td, string $data)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mdecrypt-generic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解密数据

## 说明

```php
string mdecrypt_generic(resource $td, string $data)
```

解密数据。 请注意，由于存在数据补齐的情况， 返回字符串的长度可能和明文的长度不相等。

## 参数

- **`$td`** — 由 `mcrypt_module_open()` 函数创建的加密描述符。
- **`$data`** — 密文。

## 返回值

Returns decrypted string.

## 示例

**`mdecrypt_generic()` 示例**

```php


<?php
    /* 数据 */
    $key = 'this is a very long key, even too long for the cipher';
    $plain_text = 'very important data';

    /* 打开加密模块，并且创建初始向量 */
    $td = mcrypt_module_open('des', '', 'ecb', '');
    $key = substr($key, 0, mcrypt_enc_get_key_size($td));
    $iv_size = mcrypt_enc_get_iv_size($td);
    $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);

    /* 初始化加密句柄 */
    if (mcrypt_generic_init($td, $key, $iv) != -1) {

        /* 加密数据 */
        $c_t = mcrypt_generic($td, $plain_text);
        mcrypt_generic_deinit($td);

        /* 为解密重新初始化缓冲区 */
        mcrypt_generic_init($td, $key, $iv);
        $p_t = mdecrypt_generic($td, $c_t);

        /* 执行清理工作 */
        mcrypt_generic_deinit($td);
        mcrypt_module_close($td);
    }

    if (strncmp($p_t, $plain_text, strlen($plain_text)) == 0) {
        echo "ok\n";
    } else {
        echo "error\n";
    }
?>

   
```

上例中演示了如何检测 解密后的数据是否和原始明文长度一致。 需要着重提醒的是，在对数据进行机密之前， 必须使用 `mcrypt_generic_init()` 函数来重新初始化缓冲区。

调用本函数之前， 必须使用密钥和初始向量来调用 `mcrypt_generic_init()` 函数 对解密句柄进行初始化。 加解密工作完成之后，需要调用 `mcrypt_generic_deinit()` 来释放加解密缓冲区。 示例请参见 `mcrypt_module_open()`。

## 参见

 `mcrypt_generic()` `mcrypt_generic_init()` `mcrypt_generic_deinit()`
