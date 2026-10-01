---
id: "zh-php-guide-pcre-examples"
language: "php"
lang: "zh"
category: "guide"
name: "pcre.examples"
title: "示例"
module: "pcre"
source_url: "https://www.php.net/manual/zh/pcre.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

**合法模式示例**

- `/<\/\w+>/`
- `|(\d{3})-\d+|Sm`
- `/^(?i)php[34]/`
- `{^\s+(\s+)?$}`

**非法模式示例**

- `/href='(.*)'` - 缺失结束分隔符
- `/\w+\s*\w+/J` - 未知模式修饰符"J"
- `1-\d3-\d3-\d4|` - 缺失开始分隔符
