---
id: "zh-php-guide-password-setup"
language: "php"
lang: "zh"
category: "guide"
name: "password.setup"
title: "安装/配置"
module: "password"
source_url: "https://www.php.net/manual/zh/password.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

构建此扩展不需要其他扩展。

为了支持 Argon2 密码散列，需要安装 [libargon2]() 库， 或者从 PHP 8.4.0 开始，安装 OpenSSL 3.2 或更高版本。 作为 PHP 7.3.0 的要求，如果使用 libargon2，则需要 libargon2 版本 20161029 或更高版本。

## 安装

使用这些函数不需要安装，它们是 PHP 核心的一部分。

然而，要启用 Argon2 密码散列，PHP 必须使用 --with-password-argon2 配置选项来支持 libargon2，或者从 PHP 8.4.0 开始，使用 OpenSSL 和 --with-openssl 和 --with-openssl-argon2 进行构建。

在 PHP 8.1.0 之前，可以使用 --with-password-argon2[=DIR] 指定 argon2 目录。
