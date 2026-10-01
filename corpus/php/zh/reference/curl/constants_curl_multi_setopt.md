---
id: "zh-php-guide-constant-curl-multi-setopt-constants"
language: "php"
lang: "zh"
category: "guide"
name: "constant.curl-multi-setopt.constants"
title: "`curl_multi_setopt()`"
module: "curl"
source_url: "https://www.php.net/manual/zh/constant.curl-multi-setopt.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# `curl_multi_setopt()`

`CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE` (`int`)    指定用于管道处理的块长度阈值（以字节为单位）。自 PHP 7.0.7 和 cURL 7.30.0 起可用    

  `CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE` (`int`)    指定用于管道惩罚（pipelining penalty）的长度阈值（以字节为单位）。自 PHP 7.0.7 和 cURL 7.30.0 起可用    

  `CURLMOPT_MAXCONNECTS` (`int`)    指定 libcurl 可以缓存的最大同时打开的连接数。默认情况下，这个大小会自动扩展到通过 `curl_multi_add_handle()` 添加的句柄数的四倍。当缓存已满时，cURL 会关闭缓存中最旧的一个连接，以防止打开的连接数继续增加。自 cURL 7.16.3 起可用    

  `CURLMOPT_MAX_CONCURRENT_STREAMS` (`int`)    指定 cURL 在使用 HTTP/2 连接中应支持的最大并发流数量。有效值范围是从 `1` 到 `2147483647`（`2^31 - 1`）。这里设置的值将根据其他系统资源属性来确定是否执行。默认值是 `100`。自 PHP 8.2.0 和 cURL 7.67.0 起可用。    

  `CURLMOPT_MAX_HOST_CONNECTIONS` (`int`)    指定单个主机的最大连接数。自 PHP 7.0.7 和 cURL 7.30.0 起可用    

  `CURLMOPT_MAX_PIPELINE_LENGTH` (`int`)    指定管道中的最大请求数。自 PHP 7.0.7 和 cURL 7.30.0 起可用    

  `CURLMOPT_MAX_TOTAL_CONNECTIONS` (`int`)    指定同时打开的最大连接数。自 PHP 7.0.7 和 cURL 7.30.0 起可用    

  `CURLMOPT_PIPELINING` (`int`)    传递 1 启用或传递 0 禁用。在多句柄上启用管道将使其尝试对使用此句柄的传输尽可能执行 HTTP 管道操作。这意味着如果添加的第二个请求可以使用已有连接，则第二个请求将在同一连接上使用“管道”。自 cURL 7.43.0 起，该值是位掩码，传递 2 将尝试在现有的 HTTP/2 连接上多路复用新传输。传递 3 指示 cURL 请求彼此独立的管道和多路复用。自 cURL 7.62.0 起，设置管道 bit 没有效果。除了整数文字，还可以使用 CURLPIPE_* 常量。自 cURL 7.16.0 起可用。    

  `CURLMOPT_PUSHFUNCTION` (`int`)    传递 `callable` 以注册处理服务器推送且应具有以下签名：  `int``{pushfunction}()` `resource``$parent_ch` `resource``$pushed_ch` `array``$headers`  
- **`$parent_ch`** — 父级 cURL 句柄（客户端发出的请求）。
- **`$pushed_ch`** — 推送请求的新 cURL 句柄。
- **`$headers`** — 推送 promise header。

 推送函数如果可以处理推送应该返回 `CURL_PUSH_OK`，或者返回 `CURL_PUSH_DENY` 拒绝。自 PHP 7.1.0 和 cURL 7.44.0 起可用。
