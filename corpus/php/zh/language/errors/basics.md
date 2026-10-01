---
id: "zh-php-syntax-language-errors-basics"
language: "php"
lang: "zh"
category: "syntax"
name: "language.errors.basics"
title: "基础概要"
module: "language"
source_url: "https://www.php.net/manual/zh/language.errors.basics.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 基础概要

PHP 对一些内部的错误情况进行报错。 这些错误可以用来表示不同的情况，可以根据需要将错误显示出来或记录到日志中。

每个 PHP 产生的错误都包含了类型。可查看 错误类型清单，它附带了不同类型行为的简短描述和 产生的原因。

### PHP 错误处理

当未设置错误处理函数时，PHP 会根据配置处理出现的错误。 php.ini 中 `$error_reporting` 的配置或者是运行时调用 `error_reporting()` 控制了哪些错误需要报告，哪些错误需要自动忽略。 由于有些错误会在运行用户脚本前就可能出现，所以强烈推荐用配置指令来设置。

在开发环境里为了发现并修复 PHP 产生的问题， 应该总是把 `$error_reporting` 设置为 `E_ALL`。 在生产环境里，用户可能为了降低信息的详细程度， 想要将它设置为类似 E_ALL & ~E_NOTICE & ~E_DEPRECATED， 但很多情况下 `E_ALL` 也同样适用，这样可以更早地警告潜在问题。

PHP 对这些错误的处理方式，取决于两个更深的 php.ini 指令。 `$display_errors` 控制了是否要将错误作为脚本输出的一部分显示。 在生产环境里应该禁用，因为可能包含类似数据库密码这样的敏感信息， 而在开发环境中应该启用，能确保立即报告问题。

PHP 不仅能显示错误，还可以开启 `$log_errors` 指令来记录错误日志。它能根据 `$error_log` 的设置，记录任意错误到文件或者 syslog。 特别适用于生产环境，用户可以记录发生的错误，并根据这些错误生成报告。

### 用户的错误处理器

如果 PHP 默认错误处理器还不能满足要求，用户可以通过 `set_error_handler()` 设置自定义错误处理器，可处理很多类型的错误。 虽然有些类型的错误不能通过这种方式处理，但能处理的类型可以用脚本合适的方式处理： 例如为用户显示自定义错误页面，同时以一种比日志更直接的方式上报错误，例如发送邮件。
