---
id: "zh-php-guide-info-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "info.configuration"
title: "运行时配置"
module: "info"
source_url: "https://www.php.net/manual/zh/info.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| assert.active | "1" | `INI_ALL` | 自 PHP 8.3.0 起弃用 |
| assert.bail | "0" | `INI_ALL` | 自 PHP 8.3.0 起弃用 |
| assert.warning | "1" | `INI_ALL` | 自 PHP 8.3.0 起弃用 |
| assert.callback | NULL | `INI_ALL` | 自 PHP 8.3.0 起弃用 |
| assert.quiet_eval | "0" | `INI_ALL` | 从 PHP 8.0.0 移除 |
| assert.exception | "1" | `INI_ALL` | 在 PHP 8.0.0 之前，默认是 `"0"`，自 PHP 8.3.0 起弃用 |
| enable_dl | "1" | `INI_SYSTEM` | 本过时特性*将*肯定会在未来被*移除*。 |
| max_execution_time | "30" | `INI_ALL` |  |
| max_input_time | "-1" | `INI_PERDIR` |  |
| max_input_nesting_level | "64" | `INI_PERDIR` |  |
| max_input_vars | 1000 | `INI_PERDIR` |  |
| zend.enable_gc | "1" | `INI_ALL` |  |
| zend.max_allowed_stack_size | "0" | `INI_SYSTEM` | 自 PHP 8.3.0 起可用。 |
| zend.reserved_stack_size | "0" | `INI_SYSTEM` | 自 PHP 8.3.0 起可用。 |
| fiber.stack_size |  | `INI_ALL` | 自 PHP 8.1.0 起可用。 |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$assert.active` `bool`** — 激活 `assert()` 断言评测。应该使用 zend.assertions 来控制 `assert()` 的行为。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`$assert.bail` `bool`** — 失败的断言将中止脚本。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`$assert.warning` `bool`** — 为每个失败的断言产生一条 PHP 警告信息。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`$assert.callback` `string`** — 断言失败后要调用的回调函数。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`$assert.quiet_eval` `bool`**
  > 此功能自 PHP 8.0.0 起*移除*。

 — 在断言表达式执行时 `error_reporting()` 使用当前的设置。如果启用了，在执行时错误将不会被显示（隐式的 error_reporting(0)）。如果禁用了，错误将根据 `error_reporting()` 的设置来显示。
- **`$assert.exception` `bool`** — 在断言（assert）失败时产生 `AssertionError` 异常。
  > 本特性已自 PHP 8.3.0 起*废弃*。强烈建议不要使用本特性。


- **`$enable_dl` `bool`** — 该指令允许开启或关闭使用 `dl()` 动态加载 PHP 模块。 — 关闭动态加载的主要原因是为了安全。通过动态加载，有可能忽略所有 open_basedir 限制。默认允许动态加载。
- **`$max_execution_time` `int`** — 这设置了脚本被解析器中止之前允许的最大执行时间，单位秒。这有助于防止写得不好的脚本占尽服务器资源。默认设置为 `30`。从命令行运行 PHP 时，默认设置为 `0`。 — 在非 Windows 系统上，最大执行时间不会影响系统调用和系统操作等。更多细节参见 `set_time_limit()`。 — 你的 web 服务器也可以有其他超时设置，也有可能中断 PHP 的执行。Apache 有一个 `Timeout` 指令，IIS 有一个 CGI 超时功能。他们默认都是 300 秒。更多具体信息参见你的 web 服务器的文档。
- **`$max_input_time` `int`** — 脚本解析输入数据（类似 POST 和 GET）允许的最大时间，单位是秒。它从接收所有数据到开始执行脚本进行测量的。默认设置为 `-1`，意味着使用 max_execution_time 的值做为默认值，如果不想限制，请设置为 `0`。
- **`$max_input_nesting_level` `int`** — 设置 输入变量 的最大允许嵌套的深度。（例如 `$_GET`、`$_POST`）
- **`$max_input_vars` `int`** — 接受多少 输入的变量（限制分别应用于 $_GET、$_POST 和 $_COOKIE 超全局变量）指令的使用减轻了以哈希碰撞来进行拒绝服务攻击的可能性。如有超过指令指定数量的输入变量，将会导致 `E_WARNING` 的产生，更多的输入变量将会从请求中截断。
- **`$zend.enable_gc` `bool`** — 启用或禁用循环引用记数收集器。
- **`$zend.max_allowed_stack_size` `int`** — 程序允许消耗的操作系统原生堆栈空间的最大值。 尝试消耗超过操作系统允许的堆栈空间通常会导致硬崩溃，没有易于获得的调试信息。 为了使调试更容易，引擎在发生之前（当程序使用超过 zend.max_allowed_stack_size-zend.reserved_stack_size 字节的堆栈时）抛出一个 `Error`。 — 用户定义代码中的递归不会消耗原生堆栈空间。 但是，内部函数和魔术方法会。 涉及这些函数的非常深的递归可能会导致程序耗尽所有可用的原生堆栈空间。 — 可能的值为： `0`： 自动检测操作系统允许程序消耗的最大原生堆栈空间。 这是默认值。 当无法检测时，使用已知的系统默认值。 `-1`： 禁用引擎中的堆栈大小检查。 正整数：固定大小，以字节为单位。 设置此值过高会导致与禁用堆栈大小检查相同的效果。 — 由于 Fiber 的堆栈大小由 fiber.stack_size 决定， 在执行 Fiber 时检查堆栈使用情况时，使用此参数的值而不是 zend.max_allowed_stack_size。
  > 这与堆栈 *缓冲区* 溢出无关，也不是安全功能。


- **`$zend.reserved_stack_size` `int`** — 保留的堆栈大小，以字节为单位。 在检查堆栈大小时，从 max allowed stack size 减去此值作为缓冲区。 — 可能的值为： `0`：自动检测合理大小。 正整数：固定大小，以字节为单位。
- **`$fiber.stack_size` `int`** — 为每个 Fiber 分配的本地堆栈大小，以字节为单位。 — 默认值是系统指针大小小于 8 字节的系统上的 1MiB，否则为 2MiB。
