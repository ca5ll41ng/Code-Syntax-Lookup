---
id: "zh-php-function-yaf-request-abstract-iscli"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isCli"
title: "判断请求是否是 CLI 请求"
signature: "public bool Yaf_Request_Abstract::isCli()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.iscli.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否是 CLI 请求

## 说明

```php
public bool Yaf_Request_Abstract::isCli()
```

检查请求是否以 CLI 方式发送。

## 参数

此函数没有参数。

## 返回值

如果请求是在命令行下发的则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isCli()` 示例**

```php


<?php
// cron.php，由 crontab 以 "php cron.php" 方式执行
$request = new Yaf_Request_Simple("CLI", "Index", "Cron", "Cleanup");

var_dump($request->isCli());
?>
   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Request_Abstract::isGet()` `Yaf_Request_Abstract::isPost()` `Yaf_Request_Abstract::isPut()` `Yaf_Request_Abstract::isHead()` `Yaf_Request_Abstract::isOptions()` `Yaf_Request_Abstract::isDelete()` `Yaf_Request_Abstract::isPatch()` `Yaf_Request_Abstract::isXmlHttpRequest()`
