---
id: "zh-php-guide-errorfunc-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "errorfunc.configuration"
title: "运行时配置"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/errorfunc.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| error_reporting | NULL | `INI_ALL` |  |
| display_errors | "1" | `INI_ALL` |  |
| display_startup_errors | "1" | `INI_ALL` | PHP 8.0.0 之前，默认值是 `"0"`。 |
| log_errors | "0" | `INI_ALL` |  |
| log_errors_max_len | "1024" | `INI_ALL` | PHP 8.0.0 起弃用，PHP 8.1.0 起移除。 |
| ignore_repeated_errors | "0" | `INI_ALL` |  |
| ignore_repeated_source | "0" | `INI_ALL` |  |
| report_memleaks | "1" | `INI_ALL` |  |
| track_errors | "0" | `INI_ALL` | PHP 7.2.0 起弃用，PHP 8.0.0 起移除 |
| html_errors | "1" | `INI_ALL` |  |
| xmlrpc_errors | "0" | `INI_SYSTEM` |  |
| xmlrpc_error_number | "0" | `INI_ALL` |  |
| docref_root | "" | `INI_ALL` |  |
| docref_ext | "" | `INI_ALL` |  |
| error_prepend_string | NULL | `INI_ALL` |  |
| error_append_string | NULL | `INI_ALL` |  |
| error_log | NULL | `INI_ALL` |  |
| error_log_mode | 0o644 | `INI_ALL` | 自 PHP 8.2.0 起有效 |
| syslog.facility | "LOG_USER" | `INI_SYSTEM` | 自 PHP 7.3.0 起可用。 |
| syslog.filter | "no-ctrl" | `INI_ALL` | 自 PHP 7.3.0 起可用。 |
| syslog.ident | "php" | `INI_SYSTEM` | 自 PHP 7.3.0 起可用。 |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$error_reporting` `int`** — 设置错误报告级别。该参数可以是表示二进制位字段的任意整数或者常量名称。error_reporting 级别和常量是在预定义常量和 php.ini 中进行了说明。在程序运行时可以通过 `error_reporting()` 进行设置。另请查看 display_errors 指令。 — 默认值为 `E_ALL`。 — PHP 8.0.0 之前，默认值是：`E_ALL` & ~`E_NOTICE` & ~`E_STRICT` & ~`E_DEPRECATED`。这意味着不会显示 `E_NOTICE`、 `E_STRICT`、`E_DEPRECATED` 级别的错误提示。
  > PHP外的PHP常量
  >
  > 在 PHP 以外（如 `httpd.conf`）使用 PHP 常量将没有意义，因此在这种情况下需要 `int` 值来取代。由于错误级别会随着时间的推移而增长，错误级别的最大值（`E_ALL`）可能会改变。所以考虑使用更大的值来代替 `E_ALL` 从而覆盖从现在到未来的所有二进制位字段，例如数值 `2147483647`（将包含所有错误，而不仅仅是 `E_ALL`）。


- **`$display_errors` `string`** — 该选项设置是否将错误信息作为输出的一部分打印到屏幕，或者对用户隐藏。 — 值 `"stderr"` 将错误发送到 `stderr` 而不是 `stdout`。
  > 这是辅助开发的功能，不应在生产系统中使用 (例如连接到互联网的系统)。


  > 尽管 display_errors 也可以在运行时设置 (使用 `ini_set()`)， 但是如果脚本出现致命错误，它不会起到任何作用。因为还没执行所需的运行时操作。


- **`$display_startup_errors` `bool`** — 即使 display_errors 设置为开启，PHP 也不会显示启动过程中的错误。强烈建议除调试外，都将 display_startup_errors 设置为关闭。
- **`$log_errors` `bool`** — 设置是否将脚本运行的错误信息记录到服务器错误日志或者 error_log。注意，这是与服务器相关的特定配置项。
  > 在生产环境 web 网站中，强烈建议使用错误日志记录代替错误显示。


- **`$log_errors_max_len` `int`** — 设置 log_errors 的最大字节数. 在 error_log 中添加有关错误源的信息。默认值为 1024，如果设置为 0 表示不限长度。该长度适用于记录的错误，显示的错误，以及 `$php_errormsg`，但不适用于显式调用的函数，例如 `error_log()`。 — 当使用 `int` 时, 其值以字节来衡量。还可以使用在 FAQ 中描述的速记符。
- **`$ignore_repeated_errors` `bool`** — 不记录重复的信息。重复的错误必须出现在同一个文件中的同一行代码上，除非 ignore_repeated_source 设置为 true。
- **`$ignore_repeated_source` `bool`** — 忽略重复消息时，也忽略消息的来源。当该设置开启时，重复信息将不会记录它是由不同的文件还是不同的源代码行产生的。
- **`$report_memleaks` `bool`** — 如果这个参数设置为开启（默认），此参数将会显示 Zend 内存管理器检测到的内存泄露报告。此报告将会发送到 Posix 平台上的 stderr。在 Windows 上，将使用 OutputDebugString() 发送到调试器并可以使用 [DbgView]() 等工具查看。此参数进在调试版本中有效并且需要 error_reporting 包含 `E_WARNING`。
- **`$track_errors` `bool`** — 如果开启，最后的一个错误将永远存在于变量 `$php_errormsg` 中。
- **`$html_errors` `bool`** — 如果启用，错误消息将包含 HTML 标记。HTML 错误格式会生成可点击的消息，将用户引导至描述错误页面或者导致错误的函数。这些引用跟 docref_root 和 docref_ext 的有关。 — 如果禁用，错误消息将完全是纯文本。
- **`$xmlrpc_errors` `bool`** — 如果启用，则关闭正常的错误报告，并将错误格式格式化为 XML-RPC 错误信息。
- **`$xmlrpc_error_number` `int`** — 用作 XML-RPC faultCode 元素的值。
- **`$docref_root` `string`** — 新的错误信息格式包含了对描述错误或者导致错误的函数的页面引用。为了提供手册的页面，你可以在 PHP 官方站点下载对应语言的手册，并在 ini 中设置网址到本地对应的地址。如果你的本地手册拷贝可以使用 `"/manual/"` 访问，你就可以简单的设置 docref_root=/manual/。另外你还需要设置 docref_ext 匹配你本地文件的后缀名 docref_ext=.html。当然也可以设置一个外部的参考地址。例如你可以设置 docref_root=http://manual/en/ 或者 docref_root="http://landonize.it/?how=url&theme=classic&filter=Landon &url=http%3A%2F%2Fwww.php.net%2F" — 通常需要在 docref_root 后面以 `"/"`结尾， 但是在以上的第二种示例情况中不必这么设置。
  > 这是辅助开发的功能，因为可以快速定位和查看到函数的说明。不应在生产系统中使用 (例如连接到互联网的系统)。


- **`$docref_ext` `string`** — 参见 docref_root。
  > docref_ext 的值必须以 `"."` 开头。


- **`$error_prepend_string` `string`** — 错误信息之前输出的字符串。仅在屏幕上显示错误消息时使用。主要是目的是能够为错误消息添加额带的 HTML 标记。
- **`$error_append_string` `string`** — 错误信息之后输出的字符串。仅在屏幕上显示错误消息时使用。主要是目的是能够为错误消息添加额带的 HTML 标记。
- **`$error_log` `string`** — 设置脚本错误将被记录到的文件名称。该文件应该由 Web 服务器用户写入。如果使用特殊值 `syslog`，则将错误信息发送到系统日志记录器。在 Unix 系统上，使用的是 syslog(3)，而在 Windows 上则为事件日志。参见：`syslog()`。如果该配置没有设置，则错误信息会被发送到 SAPI 错误记录器。例如，出现在 Apache 的错误日志中，或者在 CLI 中的 `stderr`。参阅 `error_log()`。
- **`$error_log_mode` `int`** — File mode for the file described set in error_log.
- **`$syslog.facility` `string`** — 指定记录日志信息的程序类型，仅在 error_log 设置为 "syslog" 时有效。
- **`$syslog.filter` `string`** — 指定过滤器类型以过滤纪录的消息。允许不加修改的传递字符；all others are written in their hexadecimal representation prefixed with `\x`. - `all`——记录的字符串在换行符处拆分，并且所有字符都原封不动的传递 - `ascii`——纪录的字符串在换行符处拆分，且转义任何不可打印的 7 位 ASCII 字符 - `no-ctrl`——纪录的字符串在换行符处拆分，且转义任何不可打印字符 - `raw`——所有字符都原封不动的传递给系统记录器，换行符处不会拆分 (identical to PHP before 7.3) 此设置通过 error_log 设置为 “syslog” 并调用 `syslog()` 影响日志记录。
  > `raw` 过滤器从 PHP 7.3.8 和 PHP 7.4.0 起可以使用。

 — Windows 上不支持该指令。
- **`$syslog.ident` `string`** — 设置每条日志消息前缀的识别字符串（ident string），仅在 error_log 为 "syslog" 时有效。
