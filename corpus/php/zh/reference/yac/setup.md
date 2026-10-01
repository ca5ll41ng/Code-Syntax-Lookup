---
id: "zh-php-guide-yac-setup"
language: "php"
lang: "zh"
category: "guide"
name: "yac.setup"
title: "安装/配置"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

无需外部库。

 {{{ Installation 

## 安装

Yac 有三种安装方式：通过 PECL、通过 PIE，或从源码构建。

此  扩展未与 PHP 捆绑。

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [yac](yac)。

此扩展在 Windows 平台的二进制扩展 (DLL 文件) PECL 可以在 PECL 官方网站上下载。

**用 PECL 安装 Yac**

```shell


pecl install yac

   
```

从 Yac 2.3.2 开始，可以用 （PHP Installer for Extensions，PHP 扩展安装器）安装本扩展，在命令行执行：

**用 PIE 安装 Yac**

```shell


pie install laruence/yac

   
```

安装时可以同时启用可选的序列化器：

**用 PIE 安装 Yac 并启用序列化器**

```shell


pie install laruence/yac --enable-json

   
```

源代码托管在 [GitHub](laruence/yac) 上。 从源码构建扩展，在命令行执行以下命令， 并把路径替换为本地 PHP 安装的实际路径：

**从源码构建 Yac**

```shell


/path/to/phpize
./configure --with-php-config=/path/to/php-config
make && make install

   
```

可用的 `configure` 选项如下：

值在存储前会用 LZ4 压缩。LZ4 压缩后端从 Yac 2.4.0 开始使用， 取代了此前的 FastLZ。默认情况下，Yac 使用随扩展一起打包的 LZ4 副本，无需额外的编译选项。如果要改为链接系统的 LZ4 库， 请使用 --with-system-lz4 选项， 这要求系统已安装 `lz4.h` 头文件和 `liblz4`。

可以通过 --enable-json、 --enable-msgpack 或 --enable-igbinary 编译进备选的序列化器，相应的扩展会被注册为可选依赖。 运行时使用哪个序列化器由 yac.serializer ini 配置项选择。

 }}} 

 {{{ Configuration 

  

 }}} 

## 资源类型

此扩展没有定义任何资源类型。
