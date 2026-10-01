---
id: "zh-php-security-security-intro"
language: "php"
lang: "zh"
category: "security"
name: "security.intro"
title: "简介"
module: "security"
source_url: "https://www.php.net/manual/zh/security.intro.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 简介

PHP 作为一种强大的语言和解析器，无论是作为包含在 Web 服务器中的模块还是作为单独的 CGI 二进制文件执行，它都可以在服务器上访问文件、运行命令以及创建网络连接等。 默认情况下，这些功能会使 web 服务器运行的任何内容变得不安全。 PHP 专门设计为一种比 Perl 或者 C 编写 CGI 程序更安全的语言，并且正确选择编译时和运行时配置选项以及正确的编码实践，它可以同时满足所需的自由和安全。

由于使用 PHP 有很多不同的方式，因此有很多配置选项来控制其行为。大量选项保证可以将 PHP 用于多种用途，但是这也意味着这些选项和服务器配置的组合会导致设置不安全。

PHP 配置的灵活性与代码的灵活性不相上下。Shell 用户具备的所有服务器端应用功能，PHP 同样也能构建完整。也可以在严格控制的环境中用于简单的服务器端包含，具有很小的风险。 环境如何构建、安全性如何，很大程度上取决于 PHP 开发者。

本章以一些常规的安全建议作为开始，解释了不同配置选项组合以及可以安全使用的情况， 并描述了不同安全级别进行编码时的不同注意事项。
