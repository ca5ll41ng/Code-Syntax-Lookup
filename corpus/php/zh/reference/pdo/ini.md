---
id: "zh-php-guide-pdo-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "pdo.configuration"
title: "运行时配置"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| pdo.dsn.* |  | 仅 php.ini |  |

这是配置指令的简短说明。

- **`$pdo.dsn.*` `string`** — 定义 DSN 别名。 参见 `PDO::__construct()` 详细说明。
