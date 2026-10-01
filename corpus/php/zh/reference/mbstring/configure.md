---
id: "zh-php-guide-mbstring-installation"
language: "php"
lang: "zh"
category: "guide"
name: "mbstring.installation"
title: "安装"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/mbstring.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

`mbstring` 不是一个默认扩展。这意味着它默认没有被激活。 你必须在 `configure` 选项中显式激活该模块。 详情参见安装这一节。

以下是涉及到 `mbstring` 的相关配置选项。

- --enable-mbstring：激活 `mbstring` 函数。 要使用 `mbstring` 函数必须启用这个选项。 libmbfl 对 `mbstring` 是必要的。libmbfl 被捆绑到了 `mbstring`。在 PHP 7.3.0 之前，如果系统已安装 libmbfl，--with-libmbfl[=DIR] 可以指定使用已安装的库。
- --disable-mbregex：禁用正则表达式函数中多字节字符的支持。 Oniguruma 对于支持多字节字符的正则表达式函数是必需的。自 PHP 7.4.0 起，pkg-config 用于检测 libonig 库。在 PHP 7.4.0 之前，Oniguruma 与 `mbstring` 捆绑，但可以通过传递 --with-onig[=DIR] 来对已安装的 libonig 库进行构建。 可以通过指定 --disable-mbregex-backtrack 来禁用多字节正则表达式回溯检查。
