---
id: "zh-php-guide-class-yaf-request-http"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-request-http"
title: "The Yaf_Request_Http class"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-request-http.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Yaf_Request_Http class

Yaf_Request_Http

   简介  来自客户端的任何请求都会初始化为 `Yaf_Request_Http`。可以通过该类的方法获取请求信息，像是 uri query 和 post 参数等。 
> 为了安全，$_GET/$_POST 在 Yaf 中为只读，这意味着如果在全局变量中设置了值，将无法从 `Yaf_Request_Http::getQuery()` 或 `Yaf_Request_Http::getPost()` 获取。
>
> 但确实有些用途需要这些功能，比如单元测试。因此 Yaf 可以使用 --enable-yaf-debug 编译，这将允许 Yaf 通过脚本读取用户设置的值。
>
> 在这种情况下，Yaf 将会抛出 E_STRICT 警告来提醒：正在调试模式下运行 yaf。

      类摘要   `Yaf_Request_Http`    `Yaf_Request_Http`   `extends` `Yaf_Request_Abstract`    属性 方法  继承的方法       属性 
- **`module`**
- **`controller`**
- **`action`**
- **`method`**
- **`params`**
- **`language`**
- **`_exception`**
- **`_base_uri`**
- **`uri`**
- **`dispatched`**
- **`routed`**
