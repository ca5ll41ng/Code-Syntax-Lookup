---
id: "zh-php-guide-pcre-installation"
language: "php"
lang: "zh"
category: "guide"
name: "pcre.installation"
title: "安装"
module: "pcre"
source_url: "https://www.php.net/manual/zh/pcre.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

PCRE 是 PHP 核心扩展，所以始终启用。默认情况下，该扩展使用内置的 PCRE 库。或者，也可以通过指定配置选项 --with-pcre-regex=DIR 设置外部 PCRE 库，`DIR` 是 PCRE 的 include 和 library 文件位置。推荐使用 PCRE 8.10 或更高版本，自 PHP 7.3.0 起，需要 PCRE2。

PCRE 默认支持 JIT（just-in-time）编译技术，PHP 7.0.12 起可以通过 --without-pcre-jit 禁用 PCRE 的 JIT 功能。

PHP 的 Windows 版本已内建对此扩展的支持。不需要载入额外的扩展来使用这些函数。

PCRE 是一个活跃的项目，作为它的一个演变，PHP功能依赖于它。 php 文档的某些部分可能会过期, 因为它可能不包括 PCRE 提供的一些新功能. 关于修正的清单，请查阅 [PCRE 库更新日志]()，下面是绑定的 PCRE 库的历史记录：

| PHP 版本 | 更新 PCRE 版本 | 说明 |
| --- | --- | --- |
| 8.2.0 | 10.40 |  |
| 8.1.0 | 10.39 |  |
| 7.4.12, 8.0.0 | 10.35 |  |
| 7.4.6 | 10.34 |  |
| 7.4.0 | 10.33 |  |
| 7.3.0 | 10.32 |  |
| 7.2.0 | 8.41 |  |
| 7.0.3 | 8.38 | 参见 CVE-2015-8383、CVE-2015-8386、CVE-2015-8387、CVE-2015-8389、CVE-2015-8390、CVE-2015-8391、CVE-2015-8393、CVE-2015-8394 |
| 7.0.0 | 8.37 | 参见 CVE-2015-2325、CVE-2015-2326 |
