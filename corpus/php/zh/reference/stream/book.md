---
id: "zh-php-guide-book-stream"
language: "php"
lang: "zh"
category: "guide"
name: "book.stream"
title: "Stream"
module: "stream"
source_url: "https://www.php.net/manual/zh/book.stream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stream

简介  流是概括文件、网络、数据压缩和其它操作的方式，共享一组通用的函数和用途。在其的简单定义中，`stream` 是表现可流动行为的 `resource` 对象。也就是说，它可以以线性的方式读写，并且可以 `fseek()` 到流中的任意位置。    `wrapper` 是附加代码，用于告诉流如何处理指定协议/编码。例如，`http` 封装协议知道如何将 URL 转换为 `HTTP/1.0` 请求远程服务器上的文件。默认情况下，PHP 内置了很多封装协议（参阅 `wrappers`），另外也可以直接从 PHP 脚本中使用 `stream_wrapper_register()` 或者直接从扩展中添加自定义封装协议。 因为任何种类的封装协议都可以添加到 PHP 中，所以对它们可以做什么并没有限制。使用 `stream_get_wrappers()` 访问当前已注册封装协议列表。    流作为 `$scheme`://`$target` 引用 
- `$scheme` (string) — 要使用的封装协议名称。示例为 file、http、https、ftp、ftps、compress.zlib、compress.bz2 和 php。PHP 内置封装协议列表，参阅`wrappers`。如果没有指定封装协议，函数使用默认值（通常是 `file`://）。
- `$target`——取决于要使用的封装协议。对于文件系统相关的流，这通常是所需文件的路径和文件名。对网络相关的流，这通常是主机名，通常跟着路径。再有，请参阅`wrappers` 获取对流内置目标的描述。
