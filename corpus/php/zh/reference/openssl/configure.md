---
id: "zh-php-guide-openssl-installation"
language: "php"
lang: "zh"
category: "guide"
name: "openssl.installation"
title: "安装"
module: "openssl"
source_url: "https://www.php.net/manual/zh/openssl.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

要使用 PHP 的 OpenSSL 支持，你应该使用 --with-openssl 参数来编译 PHP。

OpenSSL 库还在运行时对正常操作有额外的要求。最明显的是，OpenSSL 需要访问随机或伪随机数生成器； 在大多数 Unix 和类 Unix 平台上(包括linux)，意味着它必须要访问 `/dev/urandom` 或者 `/dev/random` 设备。

--with-system-ciphers 配置选项可用于设置 PHP 使用系统密码列表，而不是硬编码。

> Win32 平台的用户请注意
>
> 为了使此扩展生效， DLL 文件必须能在 Windows 系统的 PATH 指示的路径下找到。如何操作的信息，请参见题为“如何在 Windows 中将 PHP 目录加到 PATH 中”的FAQ。虽然将 DLL 文件从 PHP 文件夹复制到 Windows 系统目录也行，但不建议这样做。 *此扩展需要下列文件在 PATH 路径中：* `libeay32.dll`， 或者，自 OpenSSL 1.1 起，为 `libcrypto-*.dll`
>
> 此外，如果打算使用密钥生成和证书签名功能，你需要在你的系统上安装一个可用的 `openssl.cnf` 文件。 在我们的 win32 二进制发行版本中，我们已经包含了一个示例配置文件，在 `extras/ssl` 文件夹中。
>
> PHP 将会使用如下逻辑搜索 `openssl.cnf` 文件:
>
> - 如果 `OPENSSL_CONF` 环境变量设置了，该变量将会被当作配置文件的路径（含文件名）。
> - 如果 `SSLEAY_CONF` 环境变量设置了，该变量将会被当作配置文件的路径（含文件名）。
> - 假设`openssl.cnf` 文件将会在 openssl DLL 被编译时配置的默认证书区域被找到。这通常意味着默认的文件名是 `C:\Program Files\Common Files\SSL\openssl.cnf`(x64) 或者 `C:\Program Files (x86)\Common Files\SSL\openssl.cnf` (x86)，而 PHP 7.4.0之前，则是 `C:\usr\local\ssl\openssl.cnf`。
>
> 在你的安装过程中，你需要决定是否将配置文件安装在默认路径或者使用环境变量(可能是基于每个虚拟主机的基础)来定位配置文件安装到其他地方。注意，可以使用引入配置文件的函数中的 `$options` 参数来覆盖脚本中的默认路径。
>
> > 确保无权限的用户无法修改 `openssl.cnf` 文件。
>
> 自 OpenSSL 3.0.0 起，Windows 上默认使用的 OpenSSL 版本为 PHP 8.2.0，已经将几种算法视为遗留算法。 这些算法通常已经不再使用，被密码学社区视为不安全，或者类似的原因。 这些算法仍然可以通过遗留提供者(`extras/ssl/legacy.dll`)使用；其使用方法在 OpenSSL 手册的 [提供者配置](#Provider-Configuration)部分中有描述。

 更新日志  
| 版本 | 说明 |
| --- | --- |
| 7.4.0 | --with-openssl[=DIR] 不再接受目录参数，有利于将 pkg-config 变量 PKG_CONFIG_PATH 设置为 OpenSSL 位置，或者通过指定 OPENSSL_LIBS 和 OPENSSL_CFLAGS 变量来指向位置。 |
| 7.4.0 | OpenSSL 默认配置文件的路径已经从 `C:\usr\local\ssl` 分别改至 `C:\Program Files\Common Files\SSL` 和 `C:\Program Files (x86)\Common Files\SSL`。 |
