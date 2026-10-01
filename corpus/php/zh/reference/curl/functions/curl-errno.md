---
id: "zh-php-function-function-curl-errno"
language: "php"
lang: "zh"
category: "function"
name: "curl_errno"
title: "返回最后一次的错误代码"
signature: "int curl_errno(CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后一次的错误代码

## 说明

```php
int curl_errno(CurlHandle $handle)
```

返回最后一次 cURL 操作的错误代码。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

返回错误代码或在没有错误发生时返回 `0` (零)。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 示例

**`curl_errno()` 示例**

```php


<?php
// 创建 cURL 句柄，指向不存在的位置
$ch = curl_init('http://404.php.net/');

// 执行
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_exec($ch);

// 检查是否有错误发生
if(curl_errno($ch))
{
    echo 'Curl error: ' . curl_error($ch);
}
?>

    
```

## 参见

`curl_error()` [Curl 错误代码]()
