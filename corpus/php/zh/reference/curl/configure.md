---
id: "zh-php-guide-curl-installation"
language: "php"
lang: "zh"
category: "guide"
name: "curl.installation"
title: "安装"
module: "curl"
source_url: "https://www.php.net/manual/zh/curl.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

要 PHP 支持 cURL，必须在编译 PHP 时加上 --with-curl[=DIR] 选项，DIR 为包含 `lib` 和 `include` 的目录路径。在 `include` 目录中必须有一个名为 `curl`，包含了 `easy.h` 和 `curl.h` 的文件夹。`lib` 文件夹里应该有一个名为 `libcurl.a` 的文件。

> Win32 用户注意
>
> 要在 Windows 环境下使用这个模块，`libeay32.dll` 和 `ssleay32.dll` 库文件必须放到 PATH 环境变量包含的目录下。OpenSSL 1.1 下则为 `libcrypto-*.dll` 和 `libssl-*.dll` 文件。同样的，`libssh2.dll` 文件也需要放到 PATH 环境变量包含的目录下。
>
> 不需要用 cURL 网站上的 `libcurl.dll` 库。
