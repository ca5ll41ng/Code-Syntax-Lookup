---
id: "zh-php-guide-constant-curl-multi-constants"
language: "php"
lang: "zh"
category: "guide"
name: "constant.curl-multi.constants"
title: "curl_multi_{*} 状态常量"
module: "curl"
source_url: "https://www.php.net/manual/zh/constant.curl-multi.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# curl_multi_{*} 状态常量

`CURLM_ADDED_ALREADY` (`int`)    重复添加句柄到多句柄。自 cURL 7.32.1 起可用。    

  `CURLM_BAD_EASY_HANDLE` (`int`)    句柄无效或者不正确。这可能意味着这不是句柄或者该句柄已经被自身或者其他多句柄使用了。自 cURL 7.9.6 起可用。    

  `CURLM_BAD_HANDLE` (`int`)    传入的句柄不是有效的多句柄。自 cURL 7.9.6 起可用。    

  `CURLM_CALL_MULTI_PERFORM` (`int`)    从 cURL 7.20.0 起，不再使用此常量。在 cURL 7.20.0 之前，如果在返回任何其他常量之前调用 `curl_multi_select()` 或类似函数时，`curl_multi_exec()` 可能会返回此状态。自 cURL 7.9.6 起可用。    

  `CURLM_INTERNAL_ERROR` (`int`)    内部 `libcurl` 错误。自 cURL 7.9.6 起可用。    

  `CURLM_OK` (`int`)    没有错误。自 cURL 7.9.6 起可用。    

  `CURLM_OUT_OF_MEMORY` (`int`)    处理多句柄时内存不足。自 cURL 7.9.6 起可用。
