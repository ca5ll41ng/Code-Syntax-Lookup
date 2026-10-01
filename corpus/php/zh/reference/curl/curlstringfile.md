---
id: "zh-php-guide-class-curlstringfile"
language: "php"
lang: "zh"
category: "guide"
name: "class.curlstringfile"
title: "CURLStringFile 类"
module: "curl"
source_url: "https://www.php.net/manual/zh/class.curlstringfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# CURLStringFile 类

CURLStringFile

   简介  `CURLStringFile` 能够直接把一个变量作为文件上传。 这与 `CURLFile` 用法比较相似，但是它使用的是文件的内容，而不是文件名。 这个类或者 `CURLFile` 都需要和 `CURLOPT_POSTFIELDS` 参数一同使用以上传文件。      类摘要    `CURLStringFile`  属性  `public` `string` `data`   `public` `string` `postname`   `public` `string` `mime`  方法       属性 
- **`data`** — 待上传的内容
- **`postname`** — 上传数据中的文件名称
- **`mime`** — 文件的 MIME 类型（默认为 `application/octet-stream`）。

    参见    `curl_setopt()`  `CURLFile`
