---
id: "zh-php-guide-errorfunc-constants"
language: "php"
lang: "zh"
category: "guide"
name: "errorfunc.constants"
title: "预定义常量"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/errorfunc.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量作为 PHP 核心的一部分总是可用的。

以下常量（相应的数值或其符号名称）用作位掩码来指定要报告的错误。可以使用按位运算符来组合这些值或屏蔽某些类型的错误。

> 常量的名称可以在 php.ini 中使用，而不是它们对应的原始数值。但是，php.ini 中只能理解 `|`、`~`、`^`、`!`、`&` 运算符。

> 无法在 PHP 之外使用符号名称。例如，在  中，必须使用计算出的位掩码值。

- **`E_ERROR` (`int`)** — 致命的运行时错误。这类错误一般是不可恢复的情况，例如内存分配导致的问题。后果是导致脚本终止不再继续运行。 — 常量值 `1`
- **`E_WARNING` (`int`)** — 运行时警告 (非致命错误)。仅给出提示信息，但是脚本不会终止运行。 — 常量值：`2`
- **`E_PARSE` (`int`)** — 编译时解析错误。解析错误只由解析器产生。 — 常量值：`4`
- **`E_NOTICE` (`int`)** — 运行时通知。表示脚本遇到可能会表现为错误的情况，但是在可以正常运行的脚本里面也可能会有类似的通知。 — 常量值：`8`
- **`E_CORE_ERROR` (`int`)** — 在 PHP 初始化启动过程中发生的致命错误。该错误类似 `E_ERROR`，但是是由 PHP 引擎核心产生。 — 常量值：`16`
- **`E_CORE_WARNING` (`int`)** — PHP 初始化启动过程中发生的警告 (非致命错误) 。类似 `E_WARNING`，但是是由 PHP 引擎核心产生。 — 常量值：`32`
- **`E_COMPILE_ERROR` (`int`)** — 致命编译时错误。类似 `E_ERROR`，但是是由 Zend 脚本引擎产生。 — 常量值：`64`
- **`E_COMPILE_WARNING` (`int`)** — 编译时警告 (非致命错误)。类似 `E_WARNING`，但是是由 Zend 脚本引擎产生。 — 常量值：`128`
- **`E_DEPRECATED` (`int`)** — 运行时弃用通知。启用后将会对在未来版本中可能无法正常工作的代码给出警告。 — 常量值：`8192`
- **`E_USER_ERROR` (`int`)** — 用户产生的错误信息。类似 `E_ERROR`，但是是由用户自己在代码中使用 PHP 函数 `trigger_error()` 来产生。 — 常量值：`256`
  > 自 PHP 8.4.0 起，已弃用此常量与 `trigger_error()` 一起使用的用法。建议改为  Exception 或调用 `exit()`。


- **`E_USER_WARNING` (`int`)** — 用户产生的警告信息。类似 `E_WARNING`，由用户自己在代码中使用 PHP 函数 `trigger_error()` 来产生。 — 常量值：`512`
- **`E_USER_NOTICE` (`int`)** — 用户产生的通知信息。类似 `E_NOTICE`，由用户自己在代码中使用 PHP 函数 `trigger_error()` 来产生。 — 常量值：`1024`
- **`E_USER_DEPRECATED` (`int`)** — 用户产生的警告信息。 类似 `E_DEPRECATED`, 由用户自己在代码中使用 PHP 函数 `trigger_error()` 来产生。 — 常量值：`16384`
- **`E_STRICT` (`int`)** — PHP 发出有关执行代码的运行时建议，以确保向前兼容。 — 常量值：`2048`
  > 此错误级别未使用，且自 PHP 8.4.0 起已弃用。


- **`E_RECOVERABLE_ERROR` (`int`)** — 旧引擎“exception”对应于可捕获的致命错误。与 Error 类似，但必须通过用户定义的错误处理程序捕获（请参阅 `set_error_handler()`）。如果不处理，则其行为类似于 `E_ERROR`。 — 常量值：`4096`
  > 此错误级别实际上未使用，唯一可能发生这种情况的情况是将 `object` 解释为 `bool` 失败。这只会发生在内部对象中。
  >
  > PHP 8.4.0 之前，最常见的示例是在条件中使用 `GMP` 实例。


- **`E_ALL` (`int`)** — 包含每个错误、警告和通知的位掩码。 — 常量值：`30719`
  > 在 PHP 8.4 之前，常量值是：`32767`
