---
id: "zh-php-guide-xhprof-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "xhprof.configuration"
title: "运行时配置"
module: "xhprof"
source_url: "https://www.php.net/manual/zh/xhprof.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| xhprof.output_dir | "" | `INI_ALL` |  |

这是配置指令的简短说明。

- **`$xhprof.output_dir` `string`** — 储存 XHProf 运行数据的默认目录，用于接口 iXHProfRuns(即 XHProfRuns_Default 类)。
