---
id: "zh-php-function-function-curl-error"
language: "php"
lang: "zh"
category: "function"
name: "curl_error"
title: "返回当前会话最后一次错误的字符串"
signature: "string curl_error(CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前会话最后一次错误的字符串

## 说明

```php
string curl_error(CurlHandle $handle)
```

返回最近一次 cURL 操作的文本错误详情。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

返回错误信息，或者如果没有任何错误发生就返回 `''` (空字符串)。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 示例

**`curl_error()` 示例**

```php


<?php
// 创建 cURL 句柄，指向一个不存在的位置
$ch = curl_init('http://404.php.net/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

if(curl_exec($ch) === false)
{
    echo 'Curl error: ' . curl_error($ch);
}
else
{
    echo '操作完成没有任何错误';
}
?>

    
```

## 参见

`curl_errno()` [Curl 错误代码]()
