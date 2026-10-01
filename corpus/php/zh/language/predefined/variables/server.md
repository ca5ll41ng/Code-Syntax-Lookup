---
id: "zh-php-function-reserved-variables-server"
language: "php"
lang: "zh"
category: "function"
name: "$_SERVER"
title: "服务器和执行环境信息"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.server.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 服务器和执行环境信息

## 说明

`$_SERVER` 是一个包含了诸如头信息（header）、路径（path）、以及脚本位置（script locations）等信息的 `array`。这个数组中的条目由 Web 服务器创建，所以不能保证每个 Web 服务器都提供全部条目；服务器可能会忽略一些，或者提供此处没有列举出来的其它内容。然而，大部分变量在 [CGI 1.1 规范](3875)中都有说明，并且很可能会定义。

> 当在命令行运行 PHP 时，这些条目都将无效或者没有任何意义。

除了下面列出的元素之外，PHP 还将使用请求报头中的值创建其它元素，这些条目将命名为 `HTTP_` 后跟报头名称，大写且使用下划线而不是连字符。例如 `Accept-Language` 报头将作为 $_SERVER['HTTP_ACCEPT_LANGUAGE'] 提供。

## 目录

- **'`PHP_SELF`'** — 当前执行脚本的文件名，与 document root 有关。例如，在地址为 `http://example.com/foo/bar.php` 的脚本中使用 `$_SERVER['PHP_SELF']` 将得到 `/foo/bar.php`。__FILE__ 常量包含当前(例如包含)文件的完整路径和文件名。 — 如果 PHP 以命令行模式运行，这个变量将包含脚本名。
- **'argv'** — 传递给该脚本的参数的数组。当脚本以命令行方式运行时，argv 变量传递给程序 C 语言样式的命令行参数。当通过 GET 方式调用时，该变量包含query string。
- **'argc'** — 包含命令行模式下传递给该脚本的参数的数目(如果运行在命令行模式下)。
- **'`GATEWAY_INTERFACE`'** — 服务器使用的 CGI 规范的版本；例如，`'CGI/1.1'`。
- **'`SERVER_ADDR`'** — 当前运行脚本所在的服务器的 IP 地址。
- **'`SERVER_NAME`'** — 当前运行脚本所在的服务器的主机名。如果脚本运行于虚拟主机中，该名称是由那个虚拟主机所设置的值决定。
  > 在 Apache 2 里，必须设置 `UseCanonicalName = On` 和 `ServerName`。否则该值会由客户端提供，就有可能被伪造。上下文有安全性要求的环境里，不应该依赖此值。


- **'`SERVER_SOFTWARE`'** — 服务器标识字符串，在响应请求时的头信息中给出。
- **'`SERVER_PROTOCOL`'** — 请求页面时通信协议的名称和版本。例如，`'HTTP/1.0'`。
- **'`REQUEST_METHOD`'** — 访问页面使用的请求方法；例如，`'GET'`、`'HEAD'`、`'POST'`、`'PUT'`。
  > 如果请求方法为 `HEAD`，PHP 脚本将在发送 Header 头信息之后终止(这意味着在产生任何输出后，不再有输出缓冲)。


- **'`REQUEST_TIME`'** — PHP 开始处理请求时的时间戳。
- **'`REQUEST_TIME_FLOAT`'** — PHP 开始处理请求时的时间戳，具有微秒精度。
- **'`QUERY_STRING`'** — query string（查询字符串），如果有的话，通过它进行页面访问。
- **'`DOCUMENT_ROOT`'** — 当前运行脚本所在的文档根目录。在服务器配置文件中定义。
- **'`HTTPS`'** — 如果脚本是通过 HTTPS 协议被访问，则被设为一个非空的值。
- **'`REMOTE_ADDR`'** — 浏览当前页面的用户的 IP 地址。
- **'`REMOTE_HOST`'** — 浏览当前页面的用户的主机名。DNS 反向解析不依赖于用户的 `REMOTE_ADDR`。
  > 必须配置 Web 服务器以创建这个变量。例如在 Apache 中，`HostnameLookups On` 必须在  中设置才能存在。参见 `gethostbyaddr()`。


- **'`REMOTE_PORT`'** — 用户机器上连接到 Web 服务器所使用的端口号。
- **'`REMOTE_USER`'** — 经验证的用户
- **'`REDIRECT_REMOTE_USER`'** — 验证的用户，如果请求已在内部重定向。
- **'`SCRIPT_FILENAME`'** — 当前执行脚本的绝对路径。 > 如果在命令行界面（Command Line Interface, CLI）使用相对路径执行脚本，例如 `file.php` 或 `../file.php`，那么 `$_SERVER['SCRIPT_FILENAME']` 将包含用户指定的相对路径。
- **'`SERVER_ADMIN`'** — 该值指明了 Apache 服务器配置文件中的 SERVER_ADMIN 参数。如果脚本运行在一个虚拟主机上，则该值是那个虚拟主机的值。
- **'`SERVER_PORT`'** — Web 服务器使用的端口。默认值为 `'80'`。如果使用 SSL 安全连接，则这个值为用户设置的 HTTP 端口。
  > 在 Apache 2 里，为了获取真实物理端口，必须设置 `UseCanonicalName = On` 以及 `UseCanonicalPhysicalPort = On`，否则可能伪造此值，不一定会返回真实端口值。 上下文有安全性要求的环境里，不应该依赖此值。


- **'`SERVER_SIGNATURE`'** — 包含了服务器版本和虚拟主机名的字符串。
- **'`PATH_TRANSLATED`'** — 当前脚本所在文件系统（非文档根目录）的基本路径。这是在服务器进行虚拟到真实路径的映像后的结果。
  > Apache 2 用户可以在 `httpd.conf` 中设置 `AcceptPathInfo = On` 来定义 PATH_INFO。


- **'`SCRIPT_NAME`'** — 包含当前脚本的路径。这在页面需要指向自己时非常有用。__FILE__ 常量包含当前脚本(例如包含文件)的完整路径和文件名。
- **'`REQUEST_URI`'** — URI 用来指定要访问的页面。例如 “`/index.html`”。
- **'`PHP_AUTH_DIGEST`'** — 当作为 Apache 模块运行时，进行 HTTP Digest 认证的过程中，此变量被设置成客户端发送的“Authorization” HTTP 头内容（以便作进一步的认证操作）。
- **'`PHP_AUTH_USER`'** — 当 PHP 运行在 Apache 或 IIS（PHP 5 是 ISAPI）模块方式下，并且正在使用 HTTP 认证功能，这个变量便是用户输入的用户名。
- **'`PHP_AUTH_PW`'** — 当 PHP 运行在 Apache 或 IIS（PHP 5 是 ISAPI）模块方式下，并且正在使用 HTTP 认证功能，这个变量便是用户输入的密码。
- **'`AUTH_TYPE`'** — 当 PHP 运行在 Apache 模块方式下，并且正在使用 HTTP 认证功能，这个变量便是认证的类型。
- **'`PATH_INFO`'** — 如果存在的话，包含由客户端提供的、跟在真实脚本名称之后并且在查询字符串之前的路径信息。例如，如果当前脚本是通过 URI `http://www.example.com/php/path_info.php/some/stuff?foo=bar` 访问，那么 `$_SERVER['PATH_INFO']` 将包含 `/some/stuff`。
- **'`ORIG_PATH_INFO`'** — 在被 PHP 处理之前，“`PATH_INFO`” 的原始版本。

## 示例

**`$_SERVER` 范例**

```php


<?php
echo $_SERVER['SERVER_NAME'];
?>

    
```

以上示例的输出类似于：

```text


www.example.com

    
```

## 注释

> “Superglobal”也称为自动化的全局变量。这就表示其在脚本的所有作用域中都是可用的。不需要在函数或方法中用 global $variable; 来访问它。

## 参见

过滤器扩展
