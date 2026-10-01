---
id: "zh-php-guide-taint-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "taint.configuration"
title: "运行时配置"
module: "taint"
source_url: "https://www.php.net/manual/zh/taint.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| taint.enable | 0 | `INI_SYSTEM` |  |
| taint.error_level | 512 (E_USER_WARNING) | `INI_ALL` |  |

这是配置指令的简短说明。

- **`$taint.enable` `bool`** — 总开关。开启后，taint 会挂接执行器（executor），并在请求开始时 把来自 `$_GET`、`$_POST` 和 `$_COOKIE` 的字符串标记为已污染。 — 这是一个仅能在 php.ini 中设置的指令：开启它需要重启进程， 因此不能按请求或按目录切换。
  > 不要在生产环境中开启该指令：插桩会拖慢每个请求， 并且与 OPcache JIT 不兼容。


- **`$taint.error_level` `int`** — taint 报告可疑污染字符串时使用的错误级别。 默认为 `E_USER_WARNING`（512）。 — 由于该指令是 `INI_ALL`，可以在运行时修改。 例如，在脚本中关闭 taint 警告： — ```php <?php ini_set('taint.error_level', 0); ?> ```
