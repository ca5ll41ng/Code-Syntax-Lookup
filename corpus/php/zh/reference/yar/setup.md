---
id: "zh-php-guide-yar-setup"
language: "php"
lang: "zh"
category: "guide"
name: "yar.setup"
title: "安装/配置"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

HTTP 和 HTTPS 传输方式需要 cURL 库。TCP 传输方式使用普通的 socket 实现，不需要额外的库。

需要 JSON 扩展， 该扩展自 PHP 8.0.0 起随 PHP 捆绑，始终可用。

若要使用 `msgpack` 打包器，必须安装 [msgpack](msgpack) 扩展， 并且在编译 Yar 时使用 --enable-msgpack configure 选项。

 {{{ Installation 

## 安装

Yar 有三种安装方式：通过 PECL、通过 PIE，或从源码构建。

此  扩展未与 PHP 捆绑。

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [yar](yar)。

此扩展在 Windows 平台的二进制扩展 (DLL 文件) PECL 可以在 PECL 官方网站上下载。

**用 PECL 安装 Yar**

```shell


pecl install yar

   
```

自 Yar 2.4.0 起，也可以使用 （PHP Installer for Extensions，PHP 扩展安装器）安装本扩展。在命令行执行以下命令：

**用 PIE 安装 Yar**

```shell


pie install laruence/yar

   
```

安装时可以同时启用 msgpack 打包器：

**用 PIE 安装 Yar 并启用 msgpack**

```shell


pie install laruence/yar --enable-msgpack

   
```

源代码托管在 [GitHub](laruence/yar) 上。 若要自源码构建该扩展，请在命令行执行以下命令， 并把其中的路径替换为本地 PHP 安装的实际路径：

**从源码构建 Yar**

```shell


/path/to/phpize
./configure --with-php-config=/path/to/php-config
make && make install

   
```

可用的 `configure` 选项如下：

- **--with-curl** — 当 cURL 不在默认的 include 路径中时， 指定 cURL 的安装位置。
- **--enable-msgpack** — 启用 `msgpack` 打包器，并将 `msgpack` 扩展作为可选依赖。当 Yar 使用该选项编译时， yar.packager 的默认值变为 `msgpack`。
- **--enable-epoll** — 使用 Linux `epoll` 代替 `select()` 进行 I/O 多路复用，自 Yar 2.1.2 起可用。在高并发场景下，该选项可以提升 `Yar_Concurrent_Client` 的性能。 它仅在 Linux 上生效；在其他平台上会被静默忽略。

 }}} 

 {{{ Configuration 

  

 }}} 

## 资源类型

此扩展没有定义任何资源。
