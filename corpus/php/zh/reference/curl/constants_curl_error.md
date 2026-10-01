---
id: "zh-php-guide-constant-curl-error-constants"
language: "php"
lang: "zh"
category: "guide"
name: "constant.curl-error.constants"
title: "cURL 错误常量"
module: "curl"
source_url: "https://www.php.net/manual/zh/constant.curl-error.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# cURL 错误常量

`CURLE_ABORTED_BY_CALLBACK` (`int`)    回调已中止。回调向 libcurl 返回“abort”。    

  `CURLE_BAD_CALLING_ORDER` (`int`)       

  `CURLE_BAD_CONTENT_ENCODING` (`int`)    无法识别传输编码。    

  `CURLE_BAD_DOWNLOAD_RESUME` (`int`)    由于指定的偏移量超出了文件边界，因此无法恢复下载。    

  `CURLE_BAD_FUNCTION_ARGUMENT` (`int`)    调用的函数带有错误的参数。    

  `CURLE_BAD_PASSWORD_ENTERED` (`int`)       

  `CURLE_COULDNT_CONNECT` (`int`)    无法连接到主机或代理。    

  `CURLE_COULDNT_RESOLVE_HOST` (`int`)    无法解析主机。指定的远程主机无法解析。    

  `CURLE_COULDNT_RESOLVE_PROXY` (`int`)    无法解析代理。无法解析给定的代理主机。    

  `CURLE_FAILED_INIT` (`int`)    初始化代码失败。这可能是内部错误或程序，或者是资源问题，导致在初始化时无法完成一些基本操作。    

  `CURLE_FILESIZE_EXCEEDED` (`int`)    超出最大文件大小。    

  `CURLE_FILE_COULDNT_READ_FILE` (`int`)    无法打开 FILE:// 指定的文件。很可能是因为文件路径未识别现有文件或由于缺乏适当的文件权限。    

  `CURLE_FTP_ACCESS_DENIED` (`int`)       

  `CURLE_FTP_BAD_DOWNLOAD_RESUME` (`int`)       

  `CURLE_FTP_CANT_GET_HOST` (`int`)    用于查找新连接的主机发生内部故障。    

  `CURLE_FTP_CANT_RECONNECT` (`int`)       

  `CURLE_FTP_COULDNT_GET_SIZE` (`int`)       

  `CURLE_FTP_COULDNT_RETR_FILE` (`int`)    这要么是对“RETR”命令的意外回复，要么是零字节传输完成。    

  `CURLE_FTP_COULDNT_SET_ASCII` (`int`)       

  `CURLE_FTP_COULDNT_SET_BINARY` (`int`)       

  `CURLE_FTP_COULDNT_STOR_FILE` (`int`)       

  `CURLE_FTP_COULDNT_USE_REST` (`int`)    FTP REST 命令返回错误。如果服务器正常，这种情况绝不会发生。    

  `CURLE_FTP_PARTIAL_FILE` (`int`)       

  `CURLE_FTP_PORT_FAILED` (`int`)    FTP PORT 命令返回错误。这种情况大多发生在为 libcurl 指定的地址没有足够好。参阅 `CURLOPT_FTPPORT`。    

  `CURLE_FTP_QUOTE_ERROR` (`int`)       

  `CURLE_FTP_SSL_FAILED` (`int`)       

  `CURLE_FTP_USER_PASSWORD_INCORRECT` (`int`)       

  `CURLE_FTP_WEIRD_227_FORMAT` (`int`)    FTP 服务器返回 227-line 作为对 PASV 命令的响应。如果 libcurl 无法解析该行，则会传回此返回代码。    

  `CURLE_FTP_WEIRD_PASS_REPLY` (`int`)    将 FTP 密码发送到服务器后，libcurl 需要收到正确的回复。此错误代码表示返回了意外代码。    

  `CURLE_FTP_WEIRD_PASV_REPLY` (`int`)    libcurl 无法从服务器获取合理的结果作为对 PASV 或 EPSV 命令的响应。服务器存在缺陷。    

  `CURLE_FTP_WEIRD_SERVER_REPLY` (`int`)    服务器发送了 libcurl 无法解析的数据。自 cURL 7.51.0 起，此错误代码为 `CURLE_WEIRD_SERVER_REPLY`。    

  `CURLE_FTP_WEIRD_USER_REPLY` (`int`)       

  `CURLE_FTP_WRITE_ERROR` (`int`)       

  `CURLE_FUNCTION_NOT_FOUND` (`int`)    未找到函数。未找到所需的 zlib 函数。    

  `CURLE_GOT_NOTHING` (`int`)    服务器没有返回任何内容，在这种情况下，没有得到任何内容视为错误。    

  `CURLE_HTTP_NOT_FOUND` (`int`)       

  `CURLE_HTTP_PORT_FAILED` (`int`)       

  `CURLE_HTTP_POST_ERROR` (`int`)    这是一个奇怪的错误，主要由于内部混乱而发生。    

  `CURLE_HTTP_RANGE_ERROR` (`int`)       

  `CURLE_HTTP_RETURNED_ERROR` (`int`)    如果 `CURLOPT_FAILONERROR` 设置为 `true` 并且 HTTP 服务器返回大于或等于 400 的错误代码，则返回此值。    

  `CURLE_LDAP_CANNOT_BIND` (`int`)    LDAP 无法绑定。LDAP 绑定操作失败。    

  `CURLE_LDAP_INVALID_URL` (`int`)       

  `CURLE_LDAP_SEARCH_FAILED` (`int`)    LDAP 搜索失败。    

  `CURLE_LIBRARY_NOT_FOUND` (`int`)       

  `CURLE_MALFORMAT_USER` (`int`)       

  `CURLE_OBSOLETE` (`int`)       

  `CURLE_OK` (`int`)    一切顺利。一切照常进行。    

  `CURLE_OPERATION_TIMEDOUT` (`int`)    操作超时。根据条件已达到指定的超时时限。    

  `CURLE_OPERATION_TIMEOUTED` (`int`)       

  `CURLE_OUT_OF_MEMORY` (`int`)    内存分配请求失败。    

  `CURLE_PARTIAL_FILE` (`int`)    文件传输的大小跟预期的不一致。当服务器首先报告预期的传输大小，然后提供与先前指定的大小不匹配的数据时，就会发生这种情况。    

  `CURLE_PROXY` (`int`)    代理握手错误。`CURLINFO_PROXY_ERROR` 提供有关特定问题的额外详细信息。自 PHP 8.2.0 和 cURL 7.73.0 起可用    

  `CURLE_READ_ERROR` (`int`)    读取本地文件时出现问题，或者读取回调返回错误。    

  `CURLE_RECV_ERROR` (`int`)    接收网络数据失败。    

  `CURLE_SEND_ERROR` (`int`)    发送网络数据失败。    

  `CURLE_SHARE_IN_USE` (`int`)       

  `CURLE_SSH` (`int`)    SSH 会话期间发生未指定的错误。自 cURL 7.16.1 起可用。    

  `CURLE_SSL_CACERT` (`int`)       

  `CURLE_SSL_CACERT_BADFILE` (`int`)    读取 SSL CA 证书时出现问题。    

  `CURLE_SSL_CERTPROBLEM` (`int`)    本地客户端证书有问题。    

  `CURLE_SSL_CIPHER` (`int`)    无法使用指定的密码。    

  `CURLE_SSL_CONNECT_ERROR` (`int`)    SSL/TLS 握手中某处出现问题。读取错误缓冲区中的消息可提供有关该问题的更多详细信息。可能是证书（文件格式、路径、权限）、密码等。    

  `CURLE_SSL_ENGINE_NOTFOUND` (`int`)    未找到指定的加密引擎。    

  `CURLE_SSL_ENGINE_SETFAILED` (`int`)    无法将选定的 SSL 加密引擎设置为默认值。    

  `CURLE_SSL_PEER_CERTIFICATE` (`int`)       

  `CURLE_SSL_PINNEDPUBKEYNOTMATCH` (`int`)    无法匹配使用 `CURLOPT_PINNEDPUBLICKEY` 指定的固定密钥。    

  `CURLE_TELNET_OPTION_SYNTAX` (`int`)       

  `CURLE_TOO_MANY_REDIRECTS` (`int`)    重定向次数过多。在进行重定向时，libcurl 达到最大数量。可以使用 `CURLOPT_MAXREDIRS` 设置最大值。    

  `CURLE_UNKNOWN_TELNET_OPTION` (`int`)       

  `CURLE_UNSUPPORTED_PROTOCOL` (`int`)    传递给 libcurl 的 URL 使用了 libcurl 不支持的协议。问题可能是未使用的编译时选项、拼写错误的协议字符串或 libcurl 没有编码的协议。    

  `CURLE_URL_MALFORMAT` (`int`)    URL 格式不正确。    

  `CURLE_URL_MALFORMAT_USER` (`int`)       

  `CURLE_WEIRD_SERVER_REPLY` (`int`)    服务器发送的数据 libcurl 无法解析。在 cURL 7.51.0 之前，此错误代码称为 `CURLE_FTP_WEIRD_SERVER_REPLY`。自 PHP 7.3.0 和 cURL 7.51.0 起可用    

  `CURLE_WRITE_ERROR` (`int`)    将接收的数据写入本地文件时发生错误，或者从写入回调向 libcurl 返回错误。
