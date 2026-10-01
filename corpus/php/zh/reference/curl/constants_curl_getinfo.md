---
id: "zh-php-guide-constant-curl-getinfo-constants"
language: "php"
lang: "zh"
category: "guide"
name: "constant.curl-getinfo.constants"
title: "`curl_getinfo()`"
module: "curl"
source_url: "https://www.php.net/manual/zh/constant.curl-getinfo.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# `curl_getinfo()`

`CURLINFO_APPCONNECT_TIME` (`int`)    从建立 SSL/SSH 连接/握手起，到与远程主机完成连接所花费的秒数    

  `CURLINFO_APPCONNECT_TIME_T` (`int`)    从建立 SSL/SSH 连接/握手起，到与远程主机完成连接所花费的微秒数。自 PHP 7.3.0 和 cURL 7.61.0 起可用    

  `CURLINFO_CAINFO` (`int`)    默认内置 CA 证书位置。自 PHP 8.3.0 和 cURL 7.84.0 起可用    

  `CURLINFO_CAPATH` (`int`)    默认内置 CA 证书路径。自 PHP 8.3.0 和 cURL 7.84.0 起可用    

  `CURLINFO_CERTINFO` (`int`)    TLS 证书链    

  `CURLINFO_CONDITION_UNMET` (`int`)    不满足时间条件的信息    

  `CURLINFO_CONNECT_TIME` (`int`)    建立连接所花费的秒数    

  `CURLINFO_CONNECT_TIME_T` (`int`)    从开始到完成连接远程主机（或代理）所花费的总微秒数。自 PHP 7.3.0 和 cURL 7.61.0 起可用    

  `CURLINFO_CONTENT_LENGTH_DOWNLOAD` (`int`)    从 "Content-Length:" 字段读取的下载内容长度 (单位：字节)    

  `CURLINFO_CONTENT_LENGTH_DOWNLOAD_T` (`int`)    下载的 content-length。该值从 "Content-Length:" 字段读取。如果无法得知大小，则为 -1。自 PHP 7.3.0 和 cURL 7.55.0 起可用    

  `CURLINFO_CONTENT_LENGTH_UPLOAD` (`int`)    指定上传大小    

  `CURLINFO_CONTENT_LENGTH_UPLOAD_T` (`int`)    指定上传大小。如果大小未知，则为 -1。自 PHP 7.3.0 和 cURL 7.55.0 起可用    

  `CURLINFO_CONTENT_TYPE` (`int`)    已请求的文档的 `Content-Type`。NULL 表示服务器未发送有效的 `Content-Type` header。    

  `CURLINFO_COOKIELIST` (`int`)    所以已知的 cookie    

  `CURLINFO_EFFECTIVE_METHOD` (`int`)    获取最后使用的 HTTP 方法。    

  `CURLINFO_EFFECTIVE_URL` (`int`)    最后有效的 URL    

  `CURLINFO_FILETIME` (`int`)    启用 `CURLOPT_FILETIME` 时，检索文档的远程时间；如果返回 -1，则表示文档的时间未知。    

  `CURLINFO_FILETIME_T` (`int`)    检索文档的远程时间 (Unix 时间戳)，它是 `CURLINFO_FILETIME` 的替代方案，允许 32 位长整型的系统提取超出 32 位时间戳范围的日期。自 PHP 7.3.0 和 cURL 7.59.0 起可用    

  `CURLINFO_FTP_ENTRY_PATH` (`int`)    FTP 服务器中的条目路径    

  `CURLINFO_HEADER_OUT` (`int`)    已发送的请求字符串。如果要生效，需要调用 `curl_setopt()` 函数将 `CURLINFO_HEADER_OUT` 选项添加到句柄中    

  `CURLINFO_HEADER_SIZE` (`int`)    所有检索到的 header 总大小    

  `CURLINFO_HTTPAUTH_AVAIL` (`int`)    之前的响应中，用位掩码表示对应可用的身份验证方法    

  `CURLINFO_HTTP_CODE` (`int`)    最后的响应码。自 cURL 7.10.8 起，这是 `CURLINFO_RESPONSE_CODE` 的遗留别名。    

  `CURLINFO_HTTP_CONNECTCODE` (`int`)    CONNECT 响应码    

  `CURLINFO_HTTP_VERSION` (`int`)    上次 HTTP 连接中使用的版本。返回值将是定义的 `CURL_HTTP_VERSION_{*}` 常量中的一个，或者如果无法确定版本，则返回 0。自 PHP 7.3.0 和 cURL 7.50.0 起可用    

  `CURLINFO_LASTONE` (`int`)    `libcurl` 中底层 `CURLINFO` 枚举中的最后一个枚举值。    

  `CURLINFO_LOCAL_IP` (`int`)    最近连接的本地 (源) IP 地址    

  `CURLINFO_LOCAL_PORT` (`int`)    最近连接的本地 (源) 端口    

  `CURLINFO_NAMELOOKUP_TIME` (`int`)    域名解析完成所需秒数    

  `CURLINFO_NAMELOOKUP_TIME_T` (`int`)    域名解析完成所需的微秒数。自 PHP 7.3.0 和 cURL 7.61.0 起可用    

  `CURLINFO_NUM_CONNECTS` (`int`)    为完成上次传输，cURL 创建的连接数    

  `CURLINFO_OS_ERRNO` (`int`)    连接失败的错误码 (Errno)。该数字与操作系统和系统相关。    

  `CURLINFO_PRETRANSFER_TIME` (`int`)    从开始到文件传输开始之前的秒数    

  `CURLINFO_PRETRANSFER_TIME_T` (`int`)    从开始到文件传输即将开始为止所花费的微秒数。自 PHP 7.3.0 和 cURL 7.61.0 起可用    

  `CURLINFO_PRIMARY_IP` (`int`)    最近连接的目标 IP 地址    

  `CURLINFO_PRIMARY_PORT` (`int`)    最近连接的目标端口    

  `CURLINFO_PRIVATE` (`int`)    与 CURL 句柄相关的私有数据，先前使用 `curl_setopt()` 的 `CURLOPT_PRIVATE` 选项设置    

  `CURLINFO_PROTOCOL` (`int`)    上次 HTTP 连接使用的协议。返回值将是 `CURLPROTO_{*}` 值之一。自 PHP 7.3.0 和 cURL 7.52.0 起可用    

  `CURLINFO_PROXYAUTH_AVAIL` (`int`)    之前的响应中，用位掩码表示对应可用的代理身份验证方法    

  `CURLINFO_PROXY_ERROR` (`int`)    详细的 (SOCKS) 代理错误代码。当最近传输返回 `CURLE_PROXY` 错误时，该代码会提供更多信息。返回值将是 `CURLPX_{*}` 值之一。如果没有可用的响应代码，则错误代码将是 `CURLPX_OK`。自 PHP 8.2.0 和 cURL 7.73.0 起可用    

  `CURLINFO_PROXY_SSL_VERIFYRESULT` (`int`)    请求（使用 `CURLOPT_PROXY_SSL_VERIFYPEER` 选项）时，证书的验证结果。仅 HTTPS 代理有效。自 PHP 7.3.0 和 cURL 7.52.0 起可用    

  `CURLINFO_REDIRECT_COUNT` (`int`)    启用 `CURLOPT_FOLLOWLOCATION` 时的重定向次数。    

  `CURLINFO_REDIRECT_TIME` (`int`)    启用 `CURLOPT_FOLLOWLOCATION` 选项后，最终事务开始前所有重定向步骤花费的秒数。    

  `CURLINFO_REDIRECT_TIME_T` (`int`)    最终事务开始前所有重定向步骤（包含域名解析、连接、传输前预处理、传输）花费的秒数。自 PHP 7.3.0 和 cURL 7.61.0 起可用    

  `CURLINFO_REDIRECT_URL` (`int`)    禁用 `CURLOPT_FOLLOWLOCATION` 选项：在上一次事务中找到的重定向 URL，接下来应手动请求。启用 `CURLOPT_FOLLOWLOCATION` 选项：此为空。此情况下的重定向 URL 可在 `CURLINFO_EFFECTIVE_URL` 中找到。    

  `CURLINFO_REFERER` (`int`)    `Referer` header。自 PHP 8.2.0 和 cURL 7.76.0 起可用    

  `CURLINFO_REQUEST_SIZE` (`int`)    发出的请求总大小，目前仅适用于 HTTP 请求    

  `CURLINFO_RESPONSE_CODE` (`int`)    最后一个响应代码。自 cURL 7.10.8 起可用    

  `CURLINFO_RETRY_AFTER` (`int`)    `Retry-After` header 中的信息，如果没有有效的 header 则为零。自 PHP 8.2.0 和 cURL 7.66.0 起可用    

  `CURLINFO_RTSP_CLIENT_CSEQ` (`int`)    下一个 RTSP 客户端 CSeq    

  `CURLINFO_RTSP_CSEQ_RECV` (`int`)    最近检索的 CSeq    

  `CURLINFO_RTSP_SERVER_CSEQ` (`int`)    下一个 RTSP 服务器 CSeq    

  `CURLINFO_RTSP_SESSION_ID` (`int`)    RTSP session ID    

  `CURLINFO_SCHEME` (`int`)    用于最近连接的 URL scheme。自 PHP 7.3.0 和 cURL 7.52.0 起可用    

  `CURLINFO_SIZE_DOWNLOAD` (`int`)    下载的总字节数    

  `CURLINFO_SIZE_DOWNLOAD_T` (`int`)    已下载的总字节数。该数字仅适用于最近一次传输，每次新传输都会重新设置。自 PHP 7.3.0 和 cURL 7.50.0 起可用    

  `CURLINFO_SIZE_UPLOAD` (`int`)    上传的总字节数    

  `CURLINFO_SIZE_UPLOAD_T` (`int`)    上传的总字节数。自 PHP 7.3.0 和 cURL 7.50.0 起可用    

  `CURLINFO_SPEED_DOWNLOAD` (`int`)    平均下载速度    

  `CURLINFO_SPEED_DOWNLOAD_T` (`int`)    curl 测量的完整下载的平均下载速度（以字节/秒为单位）。自 PHP 7.3.0 和 cURL 7.50.0 开始可用    

  `CURLINFO_SPEED_UPLOAD` (`int`)    平均上传速度    

  `CURLINFO_SPEED_UPLOAD_T` (`int`)    curl 测量的完整上传过程的平均上传速度（以字节/秒为单位）。自 PHP 7.3.0 和 cURL 7.50.0 开始可用    

  `CURLINFO_SSL_ENGINES` (`int`)    支持 OpenSSL 加密引擎    

  `CURLINFO_SSL_VERIFYRESULT` (`int`)    通过设置 `CURLOPT_SSL_VERIFYPEER` 请求 SSL 认证验证的结果    

  `CURLINFO_STARTTRANSFER_TIME` (`int`)    第一个字节即将被传输的时间（以秒为单位）    

  `CURLINFO_STARTTRANSFER_TIME_T` (`int`)    从开始到接收到第一个字节时所花费的时间（以微秒为单位）。自 PHP 7.3.0 和 cURL 7.61.0 开始可用    

  `CURLINFO_TOTAL_TIME` (`int`)    上次传输的总事务时间（秒）    

  `CURLINFO_TOTAL_TIME_T` (`int`)    上次传输的总时间（以微秒为单位），包括名称解析、TCP 连接等。自 PHP 7.3.0 和 cURL 7.61.0 开始可用    

  `CURLINFO_POSTTRANSFER_TIME_T` (`int`)    从开始到发送最后一个字节所花费的微秒数。自 PHP 8.4.0 和 cURL 8.10.0 起可用
