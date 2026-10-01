---
id: "zh-php-guide-class-curlfile"
language: "php"
lang: "zh"
category: "guide"
name: "class.curlfile"
title: "CURLFile 类"
module: "curl"
source_url: "https://www.php.net/manual/zh/class.curlfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# CURLFile 类

CURLFile

   简介  此类或 `CURLStringFile` 应该与 `CURLOPT_POSTFIELDS` 一同使用用于上传文件。    不允许反序列化 `CURLFile` 实例。自 PHP 7.4.0 起，首先禁止序列化。      类摘要    `CURLFile`  属性  `public` `string` `name` ""   `public` `string` `mime` ""   `public` `string` `postname` ""  方法        属性 
- **`name`** — 待上传的文件名。
- **`mime`** — 文件的 MIME 类型（默认是 `application/octet-stream`）。
- **`postname`** — 上传数据中的文件名（默认为 `name` 属性）。

    参见    `curl_setopt()`  `CURLStringFile`
