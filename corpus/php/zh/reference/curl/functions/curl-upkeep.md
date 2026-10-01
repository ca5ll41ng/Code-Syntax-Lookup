---
id: "zh-php-function-function-curl-upkeep"
language: "php"
lang: "zh"
category: "function"
name: "curl_upkeep"
title: "执行连接保活检查"
signature: "bool curl_upkeep(CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl_upkeep.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行连接保活检查

## 说明

```php
bool curl_upkeep(CurlHandle $handle)
```

需要使用 libcurl >= 7.62.0 构建才可用。

某些协议具有"连接保活"机制。 这些机制通常会在现有连接上发送少量流量以保持连接活跃； 例如，这可以防止连接被过于严格的防火墙关闭。

连接保活目前仅适用于 HTTP/2 连接。 通常会发送少量流量来保持连接活跃。 HTTP/2 通过发送 HTTP/2 PING 帧来维持其连接。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`curl_upkeep()` 示例**

```php


<?php
$url = "https://example.com";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTP_VERSION,CURL_HTTP_VERSION_2_0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_UPKEEP_INTERVAL_MS, 200);
if (curl_exec($ch)) {
    usleep(300);
    var_dump(curl_upkeep($ch));
}
?>

    
```

## 参见

`curl_init()`
