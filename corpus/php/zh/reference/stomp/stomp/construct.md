---
id: "zh-php-function-stomp-construct"
language: "php"
lang: "zh"
category: "function"
name: "Stomp::__construct"
aliases: ["stomp_connect"]
title: "打开连接"
signature: "public Stomp::__construct(string $broker = ini_get(\"stomp.default_broker_uri\"), [string $username = ...], [string $password = ...], [array $headers = ...])"
module: "stomp"
source_url: "https://www.php.net/manual/zh/stomp.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开连接

## 说明

面向对象风格 (constructor):

```php
public Stomp::__construct(string $broker = ini_get("stomp.default_broker_uri"), [string $username = ...], [string $password = ...], [array $headers = ...])
```

过程化风格:

```php
resource stomp_connect(string $broker = ini_get("stomp.default_broker_uri"), [string $username = ...], [string $password = ...], [array $headers = ...])
```

打开兼容 stomp 通讯协议的消息代理服务器的连接。

## 参数

- **`$broker`** — 代理 URI
- **`$username`** — 用户名。
- **`$password`** — 密码。
- **`$headers`** — 关联数组包含附加的头信息（例如： receipt）。

## 返回值

> A transaction header may be specified, indicating that the message acknowledgment should be part of the named transaction.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL stomp 1.0.1 | 增加 `$headers` 参数 |

## 示例

**面向对象风格**

```php


<?php

/* 连接 */
try {
    $stomp = new Stomp('tcp://localhost:61613');
} catch(StompException $e) {
    die('Connection failed: ' . $e->getMessage());
}

/* close connection */
unset($stomp);

?>

    
```

**过程化风格**

```php


<?php

/* 连接 */
$link = stomp_connect('ssl://localhost:61612');

/* 检查链接 */
if (!$link) {
    die('Connection failed: ' . stomp_connect_error());
}

/* 关闭连接 */
stomp_close($link);

?>

    
```
