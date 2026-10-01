---
id: "zh-php-function-function-curl-strerror"
language: "php"
lang: "zh"
category: "function"
name: "curl_strerror"
title: "返回错误代码的字符串描述"
signature: "string|null curl_strerror(int $error_code)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-strerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回错误代码的字符串描述

## 说明

```php
string|null curl_strerror(int $error_code)
```

返回指定错误代码的文本错误信息描述。

## 参数

- **`$error_code`** — [cURL 错误代码]()中的常量之一。

## 返回值

返回错误信息描述，无效的错误代码返回 `null`。

## 示例

**`curl_errno()` 示例**

```php


<?php
// 以错拼的 URL 协议创建 curl 句柄
$ch = curl_init("htp://example.com/");

// 发送请求
curl_exec($ch);

// 检测错误，显示错误信息
if($errno = curl_errno($ch)) {
    $error_message = curl_strerror($errno);
    echo "cURL error ({$errno}):\n {$error_message}";
}
?>

    
```

以上示例会输出：

```text


cURL error (1):
 Unsupported protocol

    
```

## 参见

`curl_errno()` `curl_error()` [Curl 错误代码]()
