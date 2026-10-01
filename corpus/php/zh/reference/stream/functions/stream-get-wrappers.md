---
id: "zh-php-function-function-stream-get-wrappers"
language: "php"
lang: "zh"
category: "function"
name: "stream_get_wrappers"
title: "获取已注册的流类型"
signature: "array stream_get_wrappers()"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-get-wrappers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取已注册的流类型

## 说明

```php
array stream_get_wrappers()
```

获取在当前运行系统中已经注册并可使用的流类型列表。

## 参数

此函数没有参数。

## 返回值

返回一个索引数组，该数组里包含了当前运行系统中可使用的流类型的名称。

## 示例

**`stream_get_wrappers()` 例子**

```php


<?php
print_r(stream_get_wrappers());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => php
    [1] => file
    [2] => http
    [3] => ftp
    [4] => compress.bzip2
    [5] => compress.zlib
)

    
```

**检查一个流类型是否存在**

```php


<?php
// 检查是否存在 bzip2 流包装器
if (in_array('compress.bzip2', stream_get_wrappers())) {
    echo 'compress.bzip2:// support enabled.';
} else {
    echo 'compress.bzip2:// support not enabled.';
}
?>

    
```

## 参见

 `stream_wrapper_register()`
