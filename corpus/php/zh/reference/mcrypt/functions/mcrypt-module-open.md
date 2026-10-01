---
id: "zh-php-function-function-mcrypt-module-open"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_module_open"
title: "打开算法和模式对应的模块"
signature: "resource mcrypt_module_open(string $algorithm, string $algorithm_directory, string $mode, string $mode_directory)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-module-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开算法和模式对应的模块

## 说明

```php
resource mcrypt_module_open(string $algorithm, string $algorithm_directory, string $mode, string $mode_directory)
```

本函数打开指定算法和模式对应的模块。 算法名称可以是字符串，例如 `"twofish"`， 也可以是 `MCRYPT_ciphername` 常量。 调用 `mcrypt_module_close()` 函数可以关闭模块。

## 参数

- **`$algorithm`** — `MCRYPT_ciphername` 常量中的一个，或者是字符串值的算法名称。
- **`$algorithm_directory`** — `$algorithm_directory` 参数指示加密模块的位置。 如果你提供此参数，则使用你指定的值。 如果将此参数设置为空字符串（`""`），将使用 php.ini 中的 `mcrypt.algorithms_dir` 。 如果不指定此参数，则使用 libmcrypt 的编译路径 （通常是 `/usr/local/lib/libmcrypt`）。
- **`$mode`** — `MCRYPT_MODE_modename` 常量中的一个，或以下字符串中的一个："ecb"，"cbc"，"cfb"，"ofb"，"nofb" 和 "stream"。
- **`$mode_directory`** — `$algorithm_directory` 参数指示加密模式的位置。 如果你提供此参数，则使用你指定的值。 如果将此参数设置为空字符串（`""`），将使用 php.ini 中的 `mcrypt.modes_dir` 。 如果不指定此参数，则使用 libmcrypt 的编译路径 （通常是 `/usr/local/lib/libmcrypt`）。

## 返回值

成功则返回加密描述符，如果发生错误则返回 `false`。

## 示例

**`mcrypt_module_open()` 示例**

```php


<?php
    $td = mcrypt_module_open(MCRYPT_DES, '',
        MCRYPT_MODE_ECB, '/usr/lib/mcrypt-modes');

    $td = mcrypt_module_open('rijndael-256', '', 'ofb', '');
?>

   
```

示例中的第一行从默认目录打开 `DES` 加密算法， 从 `/usr/lib/mcrypt-modes` 目录打开 `ECB` 模式。 第二个示例中，使用字符串形式表示算法和模式， 这种形式仅适用于 libmcrypt 2.4.x 或 2.5.x 版本。

**在加密中使用 `mcrypt_module_open()`**

```php


<?php
    /* 打开加密算法和模式 */
    $td = mcrypt_module_open('rijndael-256', '', 'ofb', '');

    /* 创建初始向量，并且检测密钥长度。
     * Windows 平台请使用 MCRYPT_RAND。 */
    $iv = mcrypt_create_iv(mcrypt_enc_get_iv_size($td), MCRYPT_DEV_RANDOM);
    $ks = mcrypt_enc_get_key_size($td);

    /* 创建密钥 (此处仅为示例：MD5 不是一个好的哈希算法) */
    $key = substr(hash('md5', 'very secret key'), 0, $ks);

    /* 初始化加密 */
    mcrypt_generic_init($td, $key, $iv);

    /* 加密数据 */
    $encrypted = mcrypt_generic($td, 'This is very important data');

    /* 结束加密，执行清理工作 */
    mcrypt_generic_deinit($td);

    /* 初始化解密模块 */
    mcrypt_generic_init($td, $key, $iv);

    /* 解密数据 */
    $decrypted = mdecrypt_generic($td, $encrypted);

    /* 结束解密，执行清理工作，并且关闭模块 */
    mcrypt_generic_deinit($td);
    mcrypt_module_close($td);

    /* 显示文本 */
    echo trim($decrypted) . "\n";
?>

   
```

## 参见

 `mcrypt_module_close()` `mcrypt_generic()` `mdecrypt_generic()` `mcrypt_generic_init()` `mcrypt_generic_deinit()`
