---
id: "zh-php-guide-phar-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "phar.configuration"
title: "运行时配置"
module: "phar"
source_url: "https://www.php.net/manual/zh/phar.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| phar.readonly | "1" | `INI_ALL` |  |
| phar.require_hash | "1" | `INI_ALL` |  |
| phar.cache_list | "" | `INI_SYSTEM` |  |

这是配置指令的简短说明。

- **`$phar.readonly` `bool`** — 在使用 `phar` 流或 `Phar` 对象的写入操作时， 本选项可以禁止创建、修改 Phar 归档。 在生产环境中推荐始终启用本设置，否则伴随其他常见安全漏洞， phar 扩展支持写入时也能创建基于 PHP 的病毒。
  > 出于安全考虑，只能在 php.ini 中取消此设置。 若在 php.ini 中禁用 `phar.readonly`，可以在代码中启用 `phar.readonly` 或其后禁用它。 若在 php.ini 中启用 `phar.readonly`，在代码中只能 "重复启用" INI 变量，不能禁用。


- **`$phar.require_hash` `bool`** — 此选项要求调用的所有 Phar 归档必须包含签名（目前支持的签名类型有 MD5、SHA1、SHA256、SHA512、OpenSSL）， 而且会拒绝处理不含签名的 Phar 归档。
  > 只能在 php.ini 中取消此设置。 若在 php.ini 中禁用 `phar.require_hash`，可以在代码中启用 `phar.require_hash` 或其后禁用它。 若在 php.ini 中启用 `phar.require_hash`，在代码中可以 "重复启用" INI 变量，但不能禁用它。
  >
  > 此选项不影响 `PharData` 类读取普通 tar 文件。


  > `phar.require_hash` 本身不提供任何安全保障，它只能阻止运行因意外而损坏的 Phar 归档， 因为任何人都可以篡改 Phar 归档后轻松修改成对应的签名。


- **`$phar.cache_list` `string`** — 允许 web 服务启动时预先解析映射 phar 归档，提供性能上的优化， 使得从 phar 归档中运行文件的速度几乎接近从传统的基于磁盘安装运行这些文件的速度。 **phar.cache_list 用法示例** ```text 在 php.ini 中（windows）： phar.cache_list =C:\path\to\phar1.phar;C:\path\to\phar2.phar 在 php.ini 中（unix）： phar.cache_list =/path/to/phar1.phar:/path/to/phar2.phar ```
