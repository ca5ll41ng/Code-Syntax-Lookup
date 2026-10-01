---
id: "zh-php-function-function-ob-gzhandler"
language: "php"
lang: "zh"
category: "function"
name: "ob_gzhandler"
title: "ob_start 回调函数压缩输出缓冲区"
signature: "string|false ob_gzhandler(string $data, int $flags)"
module: "zlib"
source_url: "https://www.php.net/manual/zh/function.ob-gzhandler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ob_start 回调函数压缩输出缓冲区

## 说明

```php
string|false ob_gzhandler(string $data, int $flags)
```

`ob_gzhandler()` 目的用作 `ob_start()` 的回调函数，以便将 gz 编码的数据发送到支持网页压缩的 Web 浏览器。在 `ob_gzhandler()` 实际发送压缩数据之前，该函数会确定浏览器接受哪种类型的内容编码（"gzip"、"deflate" 或都不接受），然后相应的返回输出。支持所有发送正确头消息以表明接受压缩网页的浏览器。如果浏览器不支持压缩页面，则函数返回 `false`。

## 参数

- **`$data`**
- **`$flags`**

## 返回值

## 示例

**`ob_gzhandler()` 示例**

```php


<?php

ob_start("ob_gzhandler");

?>
<html>
<body>
<p>This should be a compressed page.</p>
</body>
</html>

    
```

## 注释

> `ob_gzhandler()` 需要 zlib 扩展。

> 不能同时使用 `ob_gzhandler()` 和 zlib.output_compression。也要注意使用 zlib.output_compression 要优于 `ob_gzhandler()`。

## 参见

`ob_start()` `ob_end_flush()`
