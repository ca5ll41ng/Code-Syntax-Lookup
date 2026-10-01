---
id: "zh-php-guide-apache-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "apache.configuration"
title: "运行时配置"
module: "apache"
source_url: "https://www.php.net/manual/zh/apache.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

Apache 的 PHP 模块的行为受 php.ini 的设置影响。在 php.ini 中的设置可以被服务器配置文件或本地的  文件中的 php_flag 设置所覆盖。

**用  禁用一个目录的 PHP 解析**

```text
php_flag engine off
```

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| engine | "1" | `INI_ALL` |  |
| child_terminate | "0" | `INI_ALL` |  |
| last_modified | "0" | `INI_ALL` |  |
| xbithack | "0" | `INI_ALL` |  |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$engine` `bool`** — 打开或关闭 PHP 解析。本指令仅在使用 PHP 的 Apache 模块版本时才有用。可以基于目录或者虚拟主机来打开或者关闭 PHP。将 engine off 放到  文件中适当的位置就可以激活或禁用 PHP。
- **`$child_terminate` `bool`** — 指定 PHP 脚本在请求结束后是否可以要求终止子进程。参见 `apache_child_terminate()`。
- **`$last_modified` `bool`** — 在本次请求中发送一个头信息 Last-Modified:，显示 PHP 脚本最后被修改的日期。
- **`$xbithack` `bool`** — 不管文件结尾是什么，将文件作为 PHP 以可执行位组来解析。
