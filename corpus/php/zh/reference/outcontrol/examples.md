---
id: "zh-php-guide-outcontrol-examples"
language: "php"
lang: "zh"
category: "guide"
name: "outcontrol.examples"
title: "示例"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/outcontrol.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 基本用法

**输出控制举例**

```php


<?php

ob_start();
echo "Hello\n";

setcookie("cookiename", "cookiedata");

ob_end_flush();

?>

    
```

在上面的例子中，`echo()` 函数的输出将一直被保存在输出缓冲区中直到调用 `ob_end_flush()`。同时对 `setcookie()` 的调用也成功存储了 cookie，而不会引起错误。（数据已发送到浏览器后，消息头通常无法发送。）

## 输出重写用法

自 PHP 7.1.0 起，`output_add_rewrite_var()`、`output_reset_rewrite_vars()` 使用专用的输出缓冲区。即不使用 trans sid 输出缓冲区。

**输出重写示例**

```php


<?php
// 此代码仅适用于 PHP 7.1.0、7.0.10、5.6.25 及更高版本。

// HTTP_HOST 是默认目标主机。手动设置以使示例代码工作。
$_SERVER['HTTP_HOST'] = 'php.net';

// 输出重写仅重写表单。添加 a=href.
// 可以指定标签 tag_name=url_attr, e.g. img=src,iframe=src
// 设置间不允许有空格。
// 表单标签是添加隐藏输入的特殊标签。
ini_set('url_rewriter.tags','a=href,form=');
var_dump(ini_get('url_rewriter.tags'));

// This is added to URL and form
output_add_rewrite_var('test', 'value');
?>
<a href="//php.net/index.php?bug=1234">bug1234</a>
<form action="https://php.net/?bug=1234&edit=1" method="post">
 <input type="text" name="title" />
</form>

    
```

以上示例会输出：

```text


<a href="//php.net/?bug=1234&test=value">bug1234</a>
<form action="https://php.net/?bug=1234&edit=1" method="post"><input type="hidden" name="test" value="value" />
 <input type="text" name="title" />
</form>

    
```

自 PHP 7.1.0 起，输出重写函数有自己的 INI 设置：url_rewriter.tags 和 url_rewriter.hosts。
