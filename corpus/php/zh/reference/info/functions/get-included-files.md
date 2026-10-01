---
id: "zh-php-function-function-get-included-files"
language: "php"
lang: "zh"
category: "function"
name: "get_included_files"
title: "返回被 include 和 require 文件名的 array"
signature: "array get_included_files()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.get-included-files.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回被 include 和 require 文件名的 array

## 说明

```php
array get_included_files()
```

返回所有被 `include()`、 `include_once()`、 `require()` 和 `require_once()` 的文件名。

## 参数

此函数没有参数。

## 返回值

返回所有文件名称的 array。

脚本最初被称为”被包含的文件“，所以脚本自身也会和 `include()` 系列函数引用的脚本列在一起。

被多次 include 和 require 的文件在返回的 array 里只会列出一次。

## 示例

**`get_included_files()` 示例**

```php


<?php
// 本文件是 abc.php

include 'test1.php';
include_once 'test2.php';
require 'test3.php';
require_once 'test4.php';

$included_files = get_included_files();

foreach ($included_files as $filename) {
    echo "$filename\n";
}

?>

    
```

以上示例会输出：

```text


/path/to/abc.php
/path/to/test1.php
/path/to/test2.php
/path/to/test3.php
/path/to/test4.php

    
```

## 参见

`include()` `include_once()` `require()` `require_once()` `get_required_files()`
