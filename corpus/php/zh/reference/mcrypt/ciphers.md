---
id: "zh-php-guide-mcrypt-ciphers"
language: "php"
lang: "zh"
category: "guide"
name: "mcrypt.ciphers"
title: "Mcrypt 密码"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/mcrypt.ciphers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Mcrypt 密码

下表是 mcrypt 扩展所支持的密码。 所支持的密码的完整列表请参见 `mcrypt.h` 文件。 在 PHP 中使用 mcrypt-2.2.x 的一个通用规则是你可以使用 MCRYPT_ciphername 来访问密码。 在 libmcrypt-2.4.x 和 libmcrypt-2.5.x 的 API 中，这些常量依然可用， 但是你也可以把密码模式以字符串的形式传入 `mcrypt_module_open()` 函数 来进行访问。

- MCRYPT_3DES
- MCRYPT_ARCFOUR_IV ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_ARCFOUR ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_BLOWFISH
- MCRYPT_CAST_128
- MCRYPT_CAST_256
- MCRYPT_CRYPT
- MCRYPT_DES
- MCRYPT_DES_COMPAT ( 仅 libmcrypt 2.2.x 可用 )
- MCRYPT_ENIGMA ( 仅 libmcrypt > 2.4.x 可用，MCRYPT_CRYPT 的别名)
- MCRYPT_GOST
- MCRYPT_IDEA (非免费算法)
- MCRYPT_LOKI97 ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_MARS ( 仅 libmcrypt > 2.4.x 可用，非免费算法)
- MCRYPT_PANAMA ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_RIJNDAEL_128 ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_RIJNDAEL_192 ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_RIJNDAEL_256 ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_RC2
- MCRYPT_RC4 ( 仅 libmcrypt 2.2.x 可用 )
- MCRYPT_RC6 ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_RC6_128 ( 仅 libmcrypt 2.2.x 可用 )
- MCRYPT_RC6_192 ( 仅 libmcrypt 2.2.x 可用 )
- MCRYPT_RC6_256 ( 仅 libmcrypt 2.2.x 可用 )
- MCRYPT_SAFER64
- MCRYPT_SAFER128
- MCRYPT_SAFERPLUS ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_SERPENT( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_SERPENT_128 ( 仅 libmcrypt 2.2.x 可用 )
- MCRYPT_SERPENT_192 ( 仅 libmcrypt 2.2.x 可用 )
- MCRYPT_SERPENT_256 ( 仅 libmcrypt 2.2.x 可用 )
- MCRYPT_SKIPJACK ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_TEAN ( 仅 libmcrypt 2.2.x 可用 )
- MCRYPT_THREEWAY
- MCRYPT_TRIPLEDES ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_TWOFISH ( mcrypt 2.x 之前的版本，或者 2.4.x 之后版本可用 )
- MCRYPT_TWOFISH128 (TWOFISHxxx 在新的 2.x 版本可用，但在 2.4.x 版本不可用)
- MCRYPT_TWOFISH192
- MCRYPT_TWOFISH256
- MCRYPT_WAKE ( 仅 libmcrypt > 2.4.x 可用 )
- MCRYPT_XTEA ( 仅 libmcrypt > 2.4.x 可用 )

如果使用 `CFB` 和 `OFB` 模式， 必须提供初始向量（IV）， 如果使用 `CBC` 模式， 可以提供一个初始向量。 初始向量必须是唯一的，并且在加密和解密过程中要保持一致。 你可以将初始向量和加密后数据一起存储， 其存储位置可以由一个函数的输出来指定， 例如文件名的 MD5 散列值， 这样你就可以把初始向量和加密后的数据一起传输 （关于本话题的更多信息，请参见  9.3 一节）。
