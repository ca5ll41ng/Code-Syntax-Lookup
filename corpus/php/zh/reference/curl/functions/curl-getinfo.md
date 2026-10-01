---
id: "zh-php-function-function-curl-getinfo"
language: "php"
lang: "zh"
category: "function"
name: "curl_getinfo"
title: "获取 cURL 连接资源句柄的信息"
signature: "mixed curl_getinfo(CurlHandle $handle, int|null $option = null)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-getinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 cURL 连接资源句柄的信息

## 说明

```php
mixed curl_getinfo(CurlHandle $handle, int|null $option = null)
```

获取最后一次传输的相关信息。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。
- **`$option`** — `CURLINFO_{*}` 常量之一。

## 返回值

如果指定 `$option`，将返回它的值。否则将返回包含下列元素的关联数组（分别对应 `$option`），失败时为 `false`：

- "url"
- "content_type"
- "http_code"
- "header_size"
- "request_size"
- "filetime"
- "ssl_verify_result"
- "redirect_count"
- "total_time"
- "namelookup_time"
- "connect_time"
- "pretransfer_time"
- "size_upload"
- "size_download"
- "speed_download"
- "speed_upload"
- "download_content_length"
- "upload_content_length"
- "starttransfer_time"
- "redirect_time"
- "certinfo"
- "primary_ip"
- "primary_port"
- "local_ip"
- "local_port"
- "redirect_url"
- "request_header"（只有在之前调用 `curl_setopt()` 设置 `CURLINFO_HEADER_OUT` 后才会设置）
- "posttransfer_time_us"（自 PHP 8.4.0 和 cURL 8.10.0 起可用）

注意，私有数据不包含在关联数组中，必须使用 `CURLINFO_PRIVATE` 选项单独检索。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 引入 `CURLINFO_POSTTRANSFER_TIME_T` 常量和 `posttransfer_time_us`（Curl 8.10.0 或更高版本）。 |
| 8.3.0 | 引入 `CURLINFO_CAINFO` 和 `CURLINFO_CAPATH`。 |
| 8.2.0 | 引入 `CURLINFO_PROXY_ERROR`、`CURLINFO_REFERER`、`CURLINFO_RETRY_AFTER`。 |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |
| 8.0.0 | `$option` 现在可为 null；之前默认值是 `0`。 |
| 7.3.0 | 引入 `CURLINFO_CONTENT_LENGTH_DOWNLOAD_T`、`CURLINFO_CONTENT_LENGTH_UPLOAD_T`、 `CURLINFO_HTTP_VERSION`、`CURLINFO_PROTOCOL`、`CURLINFO_PROXY_SSL_VERIFYRESULT`、`CURLINFO_SCHEME`、`CURLINFO_SIZE_DOWNLOAD_T`、`CURLINFO_SIZE_UPLOAD_T`、`CURLINFO_SPEED_DOWNLOAD_T`、`CURLINFO_SPEED_UPLOAD_T`、`CURLINFO_APPCONNECT_TIME_T`、`CURLINFO_CONNECT_TIME_T`、`CURLINFO_FILETIME_T`、`CURLINFO_NAMELOOKUP_TIME_T`、`CURLINFO_PRETRANSFER_TIME_T`、`CURLINFO_REDIRECT_TIME_T`、`CURLINFO_STARTTRANSFER_TIME_T`、`CURLINFO_TOTAL_TIME_T`。 |

## 示例

**`curl_getinfo()` 示例**

```php


<?php
// 创建 cURL 句柄
$ch = curl_init('http://www.example.com/');

// 执行
curl_exec($ch);

// 检查是否有错误发生
if (!curl_errno($ch)) {
  $info = curl_getinfo($ch);
  echo 'Took ', $info['total_time'], ' seconds to send a request to ', $info['url'], "\n";
}
?>

    
```

**使用 `$option` 参数的 `curl_getinfo()` 示例**

```php


<?php
// 创建 cURL 句柄
$ch = curl_init('http://www.example.com/');

// 执行
curl_exec($ch);

// 检测 HTTP 状态码
if (!curl_errno($ch)) {
  switch ($http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE)) {
    case 200:  # OK
      break;
    default:
      echo 'Unexpected HTTP code: ', $http_code, "\n";
  }
}
?>

    
```

## 注释

> 如果重新使用句柄，则保留此函数收集的信息。这意味着除非此函数在内部覆盖统计信息，否则将返回以前的信息。
