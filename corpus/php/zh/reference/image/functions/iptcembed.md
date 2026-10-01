---
id: "zh-php-function-function-iptcembed"
language: "php"
lang: "zh"
category: "function"
name: "iptcembed"
title: "嵌入二进制 IPTC 数据到 JPEG 图像中"
signature: "string|bool iptcembed(string $iptc_data, string $filename, int $spool = 0)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.iptcembed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 嵌入二进制 IPTC 数据到 JPEG 图像中

## 说明

```php
string|bool iptcembed(string $iptc_data, string $filename, int $spool = 0)
```

嵌入二进制 IPTC 数据到 JPEG 图像中。

## 参数

- **`$iptc_data`** — 写入的数据。
- **`$filename`** — JPEG 图片的路径。
- **`$spool`** — Spool flag。如果 spool flag 小于 2，然后 JPEG 将使用字符串返回。否则 JPEG 将打印到 STDOUT。

## 返回值

如果 `$spool` 小于 2，将返回 JPEG， 或者在失败时返回 `false`。否则成功时返回 `true` 或者在失败时返回 `false`。

## 示例

**嵌入 IPTC 数据到 JPEG**

```php


<?php

// iptc_make_tag() function by Thies C. Arntzen
function iptc_make_tag($rec, $data, $value)
{
    $length = strlen($value);
    $retval = chr(0x1C) . chr($rec) . chr($data);

    if($length < 0x8000)
    {
        $retval .= chr($length >> 8) .  chr($length & 0xFF);
    }
    else
    {
        $retval .= chr(0x80) . 
                   chr(0x04) . 
                   chr(($length >> 24) & 0xFF) . 
                   chr(($length >> 16) & 0xFF) . 
                   chr(($length >> 8) & 0xFF) . 
                   chr($length & 0xFF);
    }

    return $retval . $value;
}

// Path to jpeg file
$path = './phplogo.jpg';

// Set the IPTC tags
$iptc = array(
    '2#120' => 'Test image',
    '2#116' => 'Copyright 2008-2009, The PHP Group'
);

// Convert the IPTC tags into binary code
$data = '';

foreach($iptc as $tag => $string)
{
    $tag = substr($tag, 2);
    $data .= iptc_make_tag(2, $tag, $string);
}

// Embed the IPTC data
$content = iptcembed($data, $path);

// Write the new image data out to the file.
$fp = fopen($path, "wb");
fwrite($fp, $content);
fclose($fp);
?>

   
```

## 注释

> 此函数不需要 GD 图象库。
