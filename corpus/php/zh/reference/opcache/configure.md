---
id: "zh-php-guide-opcache-installation"
language: "php"
lang: "zh"
category: "guide"
name: "opcache.installation"
title: "安装"
module: "opcache"
source_url: "https://www.php.net/manual/zh/opcache.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

OPcache 只能编译为共享扩展。 如果你使用 --disable-all 参数 禁用了默认扩展的构建， 那么必须使用 --enable-opcache 选项来开启 OPcache。

编译之后，就可以使用 zend_extension 指令来将 OPcache 扩展加载到 PHP 中。在非 Windows 平台使用 `zend_extension=/full/path/to/opcache.so`， Windows 平台使用 `zend_extension=C:\path\to\php_opcache.dll`。

> 如果想将 [Xdebug]() 与 OPcache 一起使用，必须在 Xdebug 之前加载 OPcache。

### 推荐的 php.ini 设置

使用下列推荐设置来获得较好的 性能：

 
```text

opcache.memory_consumption=128
opcache.interned_strings_buffer=8
opcache.max_accelerated_files=4000
opcache.revalidate_freq=60
opcache.fast_shutdown=1
opcache.enable_cli=1 ; prior to PHP 7.2.0

   
```

 

你也可以禁用 opcache.save_comments 并且启用 opcache.enable_file_override。 需要提醒的是，在生产环境中使用上述配置之前，必须经过严格测试。 因为上述配置存在一个已知问题，它会引发一些框架和应用的异常， 尤其是在存在文档使用了备注注解的时候。

在 Windows 上，应该启用 opcache.file_cache_fallback，以及应该将 opcache.file_cache 设置为存在且可写的目录。

这里是 OPcache 可用的配置指令完整列表。
