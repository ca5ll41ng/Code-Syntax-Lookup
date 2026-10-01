---
id: "zh-php-security-security-cgi-bin"
language: "php"
lang: "zh"
category: "security"
name: "security.cgi-bin"
title: "以 CGI 模式安装时"
module: "security"
source_url: "https://www.php.net/manual/zh/security.cgi-bin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以 CGI 模式安装时

## 可能受到的攻击

如果不想把 PHP 嵌入到服务器端软件（如 Apache）作为一个模块安装的话，可以选择以 CGI 的模式安装。或者把 PHP 用于不同的 CGI 封装以便为代码创建安全的 chroot 和 setuid 环境。这种安装方式通常会把 php 的可执行文件安装到 web 服务器的 `cgi-bin` 目录。CERT 建议书 [CA-96.11]() 建议不要把任何的解释器放到 `cgi-bin` 目录。尽管 php 可以作为一个独立的解释器，但是它的设计使它可以防止下面类型的攻击：

- 访问系统文件：`http://my.host/cgi-bin/php?/etc/passwd` 在 URL 请求的问号（`?`）后面的信息会传给 CGI 接口作为命令行的参数。其它的解释器会在命令行中打开并执行第一个参数所指定的文件。 当作为 CGI 二进制文件调用时，php 会拒绝解释命令行参数。
- 访问服务器上的任意 Web 文档：`http://my.host/cgi-bin/php/secret/doc.html` URL 中位于 PHP 二进制名称后面的路径信息 `/secret/doc.html`，通常用于指定由 CGI 程序打开和解释的文件名。通常一些 web 服务器配置指令（Apache：`Action`）用于将 URL （如 `http://my.host/secret/script.php`）重定向请求到 PHP 解释器。使用此设置，Web 服务器会先检查目录 `/secret` 的访问权限，然后创建 `http://my.host/cgi-bin/php/secret/script.php` 的重定向请求。不幸的是，如果请求最初是这种形式发出的，那么 Web 服务器不会对文件 `/secret/script.php` 进行任何访问检查，而只会对 `/cgi-bin/php` 进行访问检查。 这样任何能访问 `/cgi-bin/php` 的用户都可以访问 web 服务器上任何受保护的文档。 在 PHP 里，运行时配置指令 cgi.force_redirect、 doc_root 和 user_dir 都可以为服务器上的文件和目录添加限制，用于防止这类攻击。下面将对各个选项的设置进行详细讲解。

## 情形一：只运行公开的文件

如果 web 服务器中所有内容都受到密码或 IP 地址的访问限制，就不需要设置这些选项。如果 web 服务器不支持重定向，或者 web 服务器不能和 PHP 通信而使访问请求变得更为安全，可以开启 cgi.force_redirect ini 指令。除此之外，还要确认 PHP 程序不依赖其它方式调用，比如通过直接的 `http://my.host/cgi-bin/php/dir/script.php` 访问或通过重定向访问 `http://my.host/dir/script.php`。

在Apache中，重定向可以使用 `AddHandler` 和 `Action` 语句来设置，请看下一节。

## 情形二：使用 `cgi.force_redirect`

配置指令 cgi.force_redirect 可以防止任何人通过如 `http://my.host/cgi-bin/php/secretdir/script.php` 这样的 URL 直接调用 php。PHP 在此模式下只会解析已经通过了 web 服务器的重定向规则的 URL。

通常 Apache 中的重定向设置可以通过以下指令完成：

```apache-conf


Action php-script /cgi-bin/php
AddHandler php-script .php

    
```

此选项只在 Apache 下进行过测试，并且要依赖于 Apache 在重定向操作中所设置的非标准 CGI 环境变量 REDIRECT_STATUS。如果 web 服务器不支持任何方式能够判断请求是直接的还是重定向的，就不能使用这个选项，而应该用其它方法。请看下一节。

## 情形三：设置 doc_root 或 user_dir

在 web 服务器的主文档目录中包含动态内容如脚本和可执行程序有时被认为是一种不安全的实践。如果因为配置上的错误而未能执行脚本而作为普通 HTML 文档显示，那就可能导致知识产权或密码资料的泄露。所以很多系统管理员都会专门设置一个只能通过 PHP CGI 来访问的目录，这样该目录中的内容只会被解析而不会原样显示出来。

对于前面所说无法判断是否重定向的情况，很有必要在主文档目录之外建立一个专用于脚本的 doc_root 目录。

可以通过配置文件内的 doc_root 指令或设置环境变量 PHP_DOCUMENT_ROOT 来定义 PHP 脚本主目录。如果设置了该项，那么 PHP 的 CGI 版本就只会解释 `$doc_root` 目录下的文件，并确保目录外的脚本不会被 PHP 解释器执行（下面所说的 `$user_dir` 除外）。

另一个可用的选项就是 user_dir。当 `$user_dir` 没有设置的时候，`$doc_root` 就是唯一能控制在哪里打开文件的选项。访问如 `http://my.host/~user/doc.php` 这个 URL 时，并不会打开用户主目录下文件，而只会执行 `$doc_root` 目录下的 `~user/doc.php`（这个子目录以 [`~`] 作开头）。

如果设置了 `$user_dir`，例如 `public_php`，那么像 `http://my.host/~user/doc.php` 这样的请求将会执行用户主目录下的 `public_php` 子目录下的 `doc.php` 文件。假设用户主目录的绝对路径是 `/home/user`，那么被执行文件将会是 `/home/user/public_php/doc.php`。

`$user_dir` 的设置与 `$doc_root` 无关，所以可以分别控制 PHP 脚本的主目录和用户目录。

## 情形四：PHP 解释器放在 web 目录以外

一个非常安全的做法就是把 PHP 解释器放在 web 目录外的地方，比如说 `/usr/local/bin`。这样做唯一不便的地方就是必须在每一个包含 PHP 代码的文件的第一行加入如下语句： ```text #!/usr/local/bin/php ``` 还要将这些文件的属性改成可执行。也就是说，要像处理用 Perl 或 sh 或其它任何脚本语言写的 CGI 脚本一样，使用以 `#!` 开头的 shell-escape 机制来启动它们。

要使 PHP 能使用此设置正确处理 PATH_INFO 和 PATH_TRANSLATED 信息，需要开启 cgi.discard_path ini 指令。
