---
id: "zh-php-guide-constant-curl-share-setopt-constants"
language: "php"
lang: "zh"
category: "guide"
name: "constant.curl-share-setopt.constants"
title: "`curl_share_setopt()`"
module: "curl"
source_url: "https://www.php.net/manual/zh/constant.curl-share-setopt.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# `curl_share_setopt()`

`CURL_LOCK_DATA_CONNECT` (`int`)    共享/取消共享连接缓存。自 PHP 7.3.0 和 cURL 7.10.0 起可用。    

  `CURL_LOCK_DATA_COOKIE` (`int`)    共享/取消共享 cookie 数据。自 cURL 7.10.3 起可用。    

  `CURL_LOCK_DATA_DNS` (`int`)    共享/取消共享 DNS 缓存。注意，当使用 cURL 多句柄时，默认情况下添加到同一个多句柄的所有句柄将共享 DNS 缓存。自 cURL 7.10.3 起可用。    

  `CURL_LOCK_DATA_PSL` (`int`)    共享/取消共享公共后缀列表。自 PHP 7.3.0 和 cURL 7.61.0 起可用。    

  `CURL_LOCK_DATA_SSL_SESSION` (`int`)    共享/取消共享 SSL 的 session ID，从而在重新连接到同一服务器时减少 SSL 握手所需的时间。请注意，默认情况下在同一句柄内会重用 SSL 会话 ID。自 cURL 7.10.3 起可用。    

  `CURLSHOPT_NONE` (`int`)    自 cURL 7.10.3 起可用。    

  `CURLSHOPT_SHARE` (`int`)    指定应共享的数据类型。自 cURL 7.10.3 起可用。    

  `CURLSHOPT_UNSHARE` (`int`)    指定不应共享的数据类型。自 cURL 7.10.3 起可用。
