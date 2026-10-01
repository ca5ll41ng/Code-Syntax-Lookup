---
id: "zh-php-guide-outcontrol-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "outcontrol.configuration"
title: "运行时配置"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/outcontrol.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| output_buffering | `"0"` | `INI_PERDIR` |  |
| output_handler | `null` | `INI_PERDIR` |  |
| implicit_flush | `"0"` | `INI_ALL` |  |
| url_rewriter.tags | `"form="` | `INI_ALL` | 从 PHP 7.1.0 起，此 INI 设置仅影响 `output_add_rewrite_var()`。在 PHP 7.1.0 之前，此 INI 设置启用透明会话 id 支持（请参阅 session.trans_sid_tags）。 |
| url_rewriter.hosts | `$_SERVER['HTTP_HOST']` 用作默认值。 | `INI_ALL` | 自 PHP 7.1.0 起可用 |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$output_buffering` `bool`/`int`** — 通过设置该选项为 `"On"`，来启用所有文件的输出缓冲。如果要限制缓冲区的大小，可以使用允许的最大字节数相对应的数字/数量来代替该指令的值 `"On"`。例如 `output_buffering=4096`。该选项在 PHP-CLI 下始终关闭。
- **`$output_handler` `string`** — 脚本的输出可以重定向到函数。例如设置 `output_handler` 为 `mb_output_handler()` 时，字符编码将会明确转换为指定编码。设置任何输出处理程序都会自动打开输出缓冲。
  > `mb_output_handler()` 和 `ob_iconv_handler()` 不能一起使用，并且 `ob_gzhandler()` 和 zlib.output_compression 不能与以下函数一起使用 `mb_output_handler()`、`ob_gzhandler()`、zlib.output_compression、“URL 重写器”处理程序（请参阅 session.use_trans_sid 和 `output_add_rewrite_var()`)。


  > 只有内置函数可以使用此指令。对于用户定义的函数，使用 `ob_start()`。


- **`$implicit_flush` `bool`** — 默认为 `false`。如将该选项改为 `true`，PHP 将使输出层在每段信息块输出后自动刷新。这等同于在每次调用任何产出输出的函数（比如 `print()`、`echo()`）以及每个 HTML 块之后，调用 PHP 函数 `flush()`。 — 在 Web 环境中使用 PHP 时，打开这个选项会严重影响性能，通常只推荐在调试时使用。在 `CLI SAPI` 操作时，此值默认为 `true`。 — 参见 `ob_implicit_flush()`。
- **`$url_rewriter.tags` `string`** — `url_rewriter.tags` 指定 HTML 标记和属性，其中 URL 由 `output_add_rewrite_var()` 值重写。默认为 `"form="`。 — 添加 `"form="` 或任何 `form` 属性将向 `form` 添加隐藏的 `input` 元素，并为传递给 `output_add_rewrite_var()` 的每个名值对（name-value pair）添加名和值属性。
  > 在 `url_rewriter.tags` 中多次添加相同的标签将仅在 URL 重写过程中使用第一次出现的标签。


  > PHP 7.1.0 之前，使用 url_rewriter.tags 指定 session.trans_sid_tags。


- **`$url_rewriter.hosts` `string`** — `url_rewriter.hosts` 可以指定重写那些主机包含 `output_add_rewrite_var()` 值。默认是 `$_SERVER['HTTP_HOST']`。通过不包含空格的逗号分隔列表指定多个主机。例如 `"php.net,wiki.php.net,bugs.php.net"`。
