---
id: "zh-php-guide-openssl-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "openssl.configuration"
title: "运行时配置"
module: "openssl"
source_url: "https://www.php.net/manual/zh/openssl.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| openssl.cafile | "" | `INI_PERDIR` |  |
| openssl.capath | "" | `INI_PERDIR` |  |
| openssl.libctx | "custom" | `INI_PERDIR` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$openssl.cafile` `string`** — 本地文件系统上证书颁发机构文件的位置， 被用来和对等校验上下文选项一起校验远程对等方的身份。
- **`$openssl.capath` `string`** — 如果没有制定证书颁发机构文件或者证书找不到，将在由capath指向的目录下搜索一个合适的证书。capath 必须是一个正确的已被散列的证书目录。
- **`$openssl.libctx` `string`** — 指定要使用的 OpenSSL 库上下文类型。默认值 `custom` 会为每个工作进程或线程创建独立的库上下文。从而增强与其他使用 OpenSSL 的库之间的隔离性，并在 ZTS 构建中提升线程间的分离程度。也可选择 `default` 值，使 PHP 使用 OpenSSL 的全局默认库上下文。

参见 SSL stream context 选项。
