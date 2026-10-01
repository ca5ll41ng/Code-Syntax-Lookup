---
id: "zh-php-function-function-output-reset-rewrite-vars"
language: "php"
lang: "zh"
category: "function"
name: "output_reset_rewrite_vars"
title: "重设 URL 重写器的值"
signature: "bool output_reset_rewrite_vars()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.output-reset-rewrite-vars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重设 URL 重写器的值

## 说明

```php
bool output_reset_rewrite_vars()
```

此函数移除所有先前由 `output_add_rewrite_var()` 函数设置的重写变量。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 在 PHP 7.1.0 之前，使用 `output_add_rewrite_var()` 设置重写变量使用相同的 Session 模块 trans sid 输出缓冲区。从 PHP 7.1.0 起，使用专用的输出缓冲区，`output_reset_rewrite_vars()` 仅删除由 `output_add_rewrite_var()` 定义的重写变量。 |

## 示例

**`output_reset_rewrite_vars()` 示例**

```php


<?php
ini_set('url_rewriter.tags', 'a=href');

output_add_rewrite_var('var', 'value');

echo '<a href="file.php">link</a>';
ob_flush();

output_reset_rewrite_vars();
echo '<a href="file.php">link</a>';
?>

    
```

以上示例会输出：

```text


<a href="file.php?var=value">link</a>
<a href="file.php">link</a>

    
```

## 参见

`output_add_rewrite_var()` `ob_flush()` `ob_list_handlers()` `session_start()`
