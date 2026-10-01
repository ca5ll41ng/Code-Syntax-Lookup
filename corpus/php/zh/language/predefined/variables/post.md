---
id: "zh-php-function-reserved-variables-post"
language: "php"
lang: "zh"
category: "function"
name: "$_POST"
title: "来自 HTTP POST 请求的表单数据"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.post.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 来自 HTTP POST 请求的表单数据

## 说明

当 HTTP POST 请求的 Content-Type 是 `application/x-www-form-urlencoded` 或 `multipart/form-data` 时，会将变量以关联数组形式传入当前脚本。

## 示例

**`$_POST` 范例**

```php


<?php
echo 'Hello ' . htmlspecialchars($_POST["name"]) . '!';
?>

    
```

假设用户发送了一个包含 `name=Hannes` 的 POST 请求体。

以上示例的输出类似于：

```text


Hello Hannes!

    
```

## 注释

> “Superglobal”也称为自动化的全局变量。这就表示其在脚本的所有作用域中都是可用的。不需要在函数或方法中用 global $variable; 来访问它。

> 读取与其他内容类型一起发送的 POST 数据（例如 `application/json` 或 `application/xml`） 必须使用 `php://input`。 与仅适用于 `application/x-www-form-urlencoded` 和 `multipart/form-data` 的 `$_POST` 不同， `php://input` 提供对请求正文中原始数据的直接访问。

## 参见

处理外部变量 过滤器扩展
