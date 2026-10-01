---
id: "zh-php-function-function-ob-get-contents"
language: "php"
lang: "zh"
category: "function"
name: "ob_get_contents"
title: "返回输出缓冲区的内容"
signature: "string|false ob_get_contents()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-get-contents.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回输出缓冲区的内容

## 说明

```php
string|false ob_get_contents()
```

只是得到输出缓冲区的内容，但不清除它。

## 参数

此函数没有参数。

## 返回值

此函数返回输出缓冲区的内容，或者如果输出缓冲区无效将返回 `false`。

## 示例

**`ob_get_contents()` 简单示例**

```php


<?php

ob_start();

echo "Hello ";

$out1 = ob_get_contents();

echo "World";

$out2 = ob_get_contents();

ob_end_clean();

var_dump($out1, $out2);
?>

    
```

以上示例会输出：

```text


string(6) "Hello "
string(11) "Hello World"

    
```

## 参见

`ob_start()` `ob_get_length()`
