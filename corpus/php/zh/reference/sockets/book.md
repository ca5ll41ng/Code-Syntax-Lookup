---
id: "zh-php-guide-book-sockets"
language: "php"
lang: "zh"
category: "guide"
name: "book.sockets"
title: "Socket"
module: "sockets"
source_url: "https://www.php.net/manual/zh/book.sockets.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Socket

{{{ preface 

 简介  Socket 扩展是基于流行的 BSD sockets，实现了和 socket 通讯功能的底层接口，它可以和客户端一样当做一个 socket 服务器。    想了解更通用的客户端 socket 接口，请看 `stream_socket_client()`， `stream_socket_server()`， `fsockopen()` 和 `pfsockopen()`。    使用这些函数时请注意，虽然他们中有很多和 C 函数同名的，但声明却很可能不同。未避免混淆，请仔细阅读函数描述。    不熟悉 socket 编程的可以在 Unix 手册上找到很多有用的信息，网上也有很多 C socket 编程方面的教程，简单修改一下就可以应用于 PHP socket 编程。[Unix Socket 常见问题]() 是一个不错的入门资料。   

 }}}
