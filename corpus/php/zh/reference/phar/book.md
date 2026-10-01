---
id: "zh-php-guide-book-phar"
language: "php"
lang: "zh"
category: "guide"
name: "book.phar"
title: "Phar"
module: "phar"
source_url: "https://www.php.net/manual/zh/book.phar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Phar

{{{ preface 

 简介  phar 扩展提供了一种将整个 PHP 应用程序放入单个叫做“phar”（PHP 归档）文件的方法，以便于分发和安装。 除了提供此服务外，phar 扩展还提供了一种文件格式抽象方法，用于通过 `PharData` 类创建和操作 tar 和 zip 文件，就像 PDO 提供访问不同数据库的统一接口一样。与不能在不同数据库之间转换的 PDO 不同，phar 还可以使用一行代码在 tar、zip 和 phar 文件格式之间进行转换。参见 `Phar::convertToExecutable()` 中的示例。    什么是 phar？phar 归档的最佳特征是可以将多个文件组合成一个文件。 因此，phar 归档提供了在单个文件中分发完整的 PHP 应用程序并无需将其解压缩到磁盘而直接运行文件的方法。此外，phar 归档可以像任何其他文件一样由 PHP 在命令行和 Web 服务器上执行。phar 有点像 PHP 应用程序的移动存储器。    phar 通过 stream 封装协议实现这个功能。通常，要在 PHP 脚本中使用外部文件，将使用 `include()`：    
**使用外部文件**

```php

     
 <?php
 include '/path/to/external/file.php';
 ?>
     
    
```

    PHP 实际上将 `/path/to/external/file.php` 转换为 stream 封装协议`file:///path/to/external/file.php`，在底层，实际上使用普通文件 stream 封装协议 stream 函数访问所有的本地文件。    要使用 phar 归档 `/path/to/myphar.phar` 中名为 `file.php` 的文件，语法跟上面的 `file://` 语法非常相似。    
**使用 phar 归档内部文件**

```php

     
 <?php
 include 'phar:///path/to/myphar.phar/file.php';
 ?>
     
    
```

    实际上可以将 phar 归档完全视为外部磁盘，可以使用任何 `fopen()` 相关函数，`opendir()` 和 `mkdir()` 相关函数在 phar 归档内读取、更改、创建新文件或目录。这将允许完整 PHP 应用程序分布在单个文件中，并直接从该文件中运行。    phar 归档最常见的用法是在单个文件中分发完整的应用程序。例如，PEAR 安装程序与 PHP 版本捆绑作为 phar 归档分发。要使用以这种方式分发 phar 归档，可以在命令行或通过 Web 服务器执行归档操作。    phar 归档可以作为 `tar` 归档、`zip` 归档或专门为 phar 扩展设计的自定义 `phar` 文件格式分发。每种文件格式都有优点和缺点。tar 和 zip 文件格式可以由任何可以读取格式的第三方工具读取或提取，但需要 PHP 和 phar 扩展才能运行。phar 文件格式是针对 phar 扩展定制和独有的，只能由 phar 扩展或 PEAR 包 [PHP_Archive](PHP_Archive) 创建，优点是以这种格式创建的应用程序即使未启用 phar 扩展也能运行。    换句话说，即使禁用了 phar 扩展，也可以执行或包含基于 phar 的归档。只有使用 phar 扩展才能访问 phar 归档中的单个文件，除非 phar 归档是由 PHP_Archive 创建的。    phar 扩展还能够在单个命令中将 phar 归档从 tar 转换为 zip 或 phar 文件格式：    
**将 phar 归档从 phar 转换为 tar 文件格式**

```php

     
 <?php
 $phar = new Phar('myphar.phar');
 $pgz = $phar->convertToExecutable(Phar::TAR, Phar::GZ); // makes myphar.phar.tar.gz
 ?>
     
    
```

    phar 可以使用 gzip 或 bzip2 来压缩单个文件或整个归档，并且可以通过使用 MD5、SHA-1、SHA-256 或 SHA-512 签名自动验证归档完整性。    最后，phar 扩展有安全意识，默认禁用对可执行 phar 归档的写访问，并且需要系统级禁用 `phar.readonly` php.ini 设置才能创建或修改 phar 归档。没有可执行存根（executable stub）的普通 tar 和 zip 归档始终可以使用 `PharData` 类创建或修改。    如果正在创建用于分发的应用程序，需要阅读如何创建 phar 归档。如果想了解关于 phar 支持的三种文件格式之间差异的更多信息，应该阅读 Phar、Tar 和 Zip。    如果使用的是 phar 应用程序，那么在如何使用 phar 归档中有一些有用的提示。    `phar` 是 `PHP` 和 `Archive` 的合成词，大致上基于 Java 开发人员熟悉的 `jar`（Java 归档）。    phar 归档的实现基于 PEAR 包 [PHP_Archive](PHP_Archive)，尽管实现细节相似，但是 phar 扩展功能更强大。此外，phar 扩展允许大多数 PHP 应用程序不加修改地运行，而基于 PHP_Archive 的 phar 归档通常需要大量修改才能工作。   

 }}}
