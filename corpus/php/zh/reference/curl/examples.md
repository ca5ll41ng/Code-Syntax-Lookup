---
id: "zh-php-guide-curl-examples"
language: "php"
lang: "zh"
category: "guide"
name: "curl.examples"
title: "示例"
module: "curl"
source_url: "https://www.php.net/manual/zh/curl.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## curl 基础示例

只要编译完的 PHP 支持 cURL 扩展，就可以开始使用 cURL 函数。cURL 函数的基本思想是使用 `curl_init()` 初始化 cURL 会话，接着通过 `curl_setopt()` 设置传输的全部选项，最后使用 `curl_exec()` 来执行会话。以下是使用 cURL 函数获取 example.com 主页并保存到文件的示例：

**使用 PHP cURL 模块获取 example.com 主页**

```php


<?php

$ch = curl_init("http://www.example.com/");
$fp = fopen("example_homepage.txt", "w");

curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_HEADER, 0);

curl_exec($ch);
if(curl_error($ch)) {
    fwrite($fp, curl_error($ch));
}
fclose($fp);
?>

    
```
