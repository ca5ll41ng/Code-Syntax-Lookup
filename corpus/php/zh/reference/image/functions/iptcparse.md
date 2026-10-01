---
id: "zh-php-function-function-iptcparse"
language: "php"
lang: "zh"
category: "function"
name: "iptcparse"
title: "将二进制 IPTC 块解析为单个标签"
signature: "array|false iptcparse(string $iptc_block)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.iptcparse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将二进制 IPTC 块解析为单个标签

## 说明

```php
array|false iptcparse(string $iptc_block)
```

将 [IPTC]() 块解析为单个标签。

## 参数

- **`$iptc_block`** — 二进制的 IPTC 块。

## 返回值

返回一个数组，用 tagmarker 作为索引，以 value 为值。如果出错或未发现 IPTC 数据则返回 `false`。

## 示例

**iptcparse() 与 `getimagesize()` 一起使用**

```php


<?php
$size = getimagesize('./test.jpg', $info);
if(isset($info['APP13']))
{
    $iptc = iptcparse($info['APP13']);
    var_dump($iptc);
}
?>

    
```

## 注释

> 此函数不需要 GD 图象库。
