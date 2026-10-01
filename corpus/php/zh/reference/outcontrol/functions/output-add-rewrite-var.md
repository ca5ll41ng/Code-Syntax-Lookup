---
id: "zh-php-function-function-output-add-rewrite-var"
language: "php"
lang: "zh"
category: "function"
name: "output_add_rewrite_var"
title: "添加 URL 重写器的值"
signature: "bool output_add_rewrite_var(string $name, string $value)"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.output-add-rewrite-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 添加 URL 重写器的值

## 说明

```php
bool output_add_rewrite_var(string $name, string $value)
```

如果“URL-Rewriter”输出缓冲处理程序未激活，此函数将启动它，存储 `$name` 和 `$value` 参数，并在缓冲区刷新时根据有效的 ini 设置重写 URL 和表单。此函数后续的调用将存储所有附加的名/值对，直到处理程序关闭。

当冲刷输出缓冲区（调用 `ob_flush()`、`ob_end_flush()`、`ob_get_flush()` 或在脚本结束时）时，`'URL-Rewriter'` 处理程序会将名/值对作为查询参数添加到 HTML 标签属性的 URL 中，并根据 url_rewriter.tags 和 url_rewriter.hosts 配置指令的值向表单添加隐藏字段。

添加到 `'URL-Rewriter'` 处理程序的每个名/值对都会添加到 URL 或表单，即使这会导致重复的 URL 查询参数或具有相同名称属性的元素。

> 一旦关闭了 `'URL-Rewriter'` 处理程序，就无法再次启动。

> 在 PHP 8.4.0 之前，要重写的主机设置在 session.trans_sid_hosts 中，而不是 url_rewriter.hosts 中。

## 参数

- **`$name`** — 变量名。
- **`$value`** — 变量值。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 自 PHP 7.1.0 起，使用专用的输出缓冲区，url_rewriter.tags 仅用于输出函数，并且 url_rewriter.hosts 可用。在 PHP 7.1.0 之前，由 `output_add_rewrite_var()` 设置的重写变量共享具有透明 session id 支持的输出缓冲区（请参阅 session.trans_sid_tags）。 |

## 示例

**`output_add_rewrite_var()` 示例**

```php


<?php
ini_set('url_rewriter.tags', 'a=href,form=');

output_add_rewrite_var('var', 'value');

// 一些链接
echo '<a href="file.php">link</a>
<a href="http://example.com">link2</a>';

// 表单
echo '<form action="script.php" method="post">
<input type="text" name="var2" />
</form>';

print_r(ob_list_handlers());
?>

    
```

以上示例会输出：

```text


<a href="file.php?var=value">link</a>
<a href="http://example.com">link2</a>

<form action="script.php" method="post">
<input type="hidden" name="var" value="value" />
<input type="text" name="var2" />
</form>

Array
(
    [0] => URL-Rewriter
)

    
```

## 参见

`output_reset_rewrite_vars()` `ob_flush()` `ob_list_handlers()` url_rewriter.tags url_rewriter.hosts
