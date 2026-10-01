---
id: "zh-php-guide-mcrypt-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "mcrypt.configuration"
title: "运行时配置"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/mcrypt.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| mcrypt.algorithms_dir | `null` | `INI_ALL` |  |
| mcrypt.modes_dir | `null` | `INI_ALL` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$mcrypt.algorithms_dir` `string`** — 包含算法的目录。 默认情况向是 libmcrypt 的编译目录， 通常是 */usr/local/lib/libmcrypt*。 更多信息请参见 `mcrypt_list_algorithms()`。
- **`$mcrypt.modes_dir` `string`** — 包含模式的目录。 默认情况向是 libmcrypt 的编译目录， 通常是 */usr/local/lib/libmcrypt*。 更多信息请参见 `mcrypt_list_modes()`。
