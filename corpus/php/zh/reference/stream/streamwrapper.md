---
id: "zh-php-guide-class-streamwrapper"
language: "php"
lang: "zh"
category: "guide"
name: "class.streamwrapper"
title: "streamWrapper 类"
module: "stream"
source_url: "https://www.php.net/manual/zh/class.streamwrapper.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# streamWrapper 类

streamWrapper

   简介  允许实现自定义协议处理程序和流，以便与其它文件系统函数（比如 `fopen()`、 `fread()` 等）一起使用。   
> 这*不是*真实的类，只是如何定义协议的原型类。

 
> 不使用此处描述的方法而使用其它方式可能会导致未定义行为。

  一旦流函数尝试访问与其关联的协议，就会初始化此类的实例。      类摘要   `streamWrapper`    `{streamWrapper}`    属性  `public` `resource` `context`  方法         属性 
- **资源 `context`** — 当前 context，或者没有 context 传递给调用函数，则为 `null`。 — 使用 `stream_context_get_options()` 解析 context。
  > 此属性*必须*是 public，以便 PHP 可以使用使用实际的 context 资源填充它。

    参见   `stream.streamwrapper.example-1` `stream_wrapper_register()` `stream_wrapper_unregister()` `stream_wrapper_restore()`
