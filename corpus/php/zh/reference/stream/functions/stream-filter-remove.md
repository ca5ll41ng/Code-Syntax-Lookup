---
id: "zh-php-function-function-stream-filter-remove"
language: "php"
lang: "zh"
category: "function"
name: "stream_filter_remove"
title: "从资源流里移除某个过滤器"
signature: "bool stream_filter_remove(resource $stream_filter)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-filter-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从资源流里移除某个过滤器

## 说明

```php
bool stream_filter_remove(resource $stream_filter)
```

移除之前通过 `stream_filter_prepend()` 或者 `stream_filter_append()` 添加到资源流里面的过滤器。 在移除之前，残留在过滤器内部缓冲区里的所有数据刷新到下一个过滤器。

## 参数

- **`$stream_filter`** — 需要被移除的资源流过滤器。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**动态地重新过滤一个资源流**

```php


<?php
/* 打开测试文件进行读写 */
$fp = fopen("test.txt", "rw");

$rot13_filter = stream_filter_append($fp, "string.rot13", STREAM_FILTER_WRITE);
fwrite($fp, "This is ");
stream_filter_remove($rot13_filter);
fwrite($fp, "a test\n");

rewind($fp);
fpassthru($fp);
fclose($fp);

?>

    
```

以上示例会输出：

```text


Guvf vf a test

    
```

## 参见

`stream_filter_register()` `stream_filter_append()` `stream_filter_prepend()`
