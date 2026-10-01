---
id: "zh-php-function-function-headers-sent"
language: "php"
lang: "zh"
category: "function"
name: "headers_sent"
title: "检测消息头是否已经发送"
signature: "bool headers_sent(string $filename = null, int $line = null)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.headers-sent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测消息头是否已经发送

## 说明

```php
bool headers_sent(string $filename = null, int $line = null)
```

检测消息头是否已经发送。

消息头已经发送时，就无法通过 `header()` 添加更多头字段。使用此函数起码可以防止收到跟消息头相关的错误。另一个解决方案是用输出缓冲。

## 参数

- **`$filename`** — 若设置了可选参数 `$filename` 和 `$line`，`headers_sent()` 会把 PHP 文件名放在 `$filename` 变量里，输出开始的行号放在 `$line` 变量里。
  > 如果在执行 PHP 源文件之前已经开始输出（例如由于启动错误），则 `$filename` 参数将被设置为空字符串。


- **`$line`** — 输出开始的行号。

## 返回值

消息头未发送时，`headers_sent()` 返回 `false`，否则返回 `true`。

## 示例

**使用 `headers_sent()` 的例子**

```php


<?php

// 没有消息头就发送一个
if (!headers_sent()) {
    header('Location: http://www.example.com/');
    exit;
}

// 使用 file 和 line 参数选项的例子
// 注意 $filename 和 $linenum 用于下文中使用
// 所以不要提前为它们赋值
if (!headers_sent($filename, $linenum)) {
    header('Location: http://www.example.com/');
    exit;

// 很有可能在这里触发错误
} else {

    echo "Headers already sent in $filename on line $linenum\n" .
          "Cannot redirect, for now please click this <a " .
          "href=\"http://www.example.com\">link</a> instead\n";
    exit;
}

?>

    
```

## 注释

> 数据头只会在SAPI支持时得到处理和输出。

## 参见

`ob_start()` `trigger_error()` `headers_list()` `header()` 中有更多相关细节的讨论。
