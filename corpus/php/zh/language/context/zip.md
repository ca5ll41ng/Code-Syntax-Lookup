---
id: "zh-php-function-context-zip"
language: "php"
lang: "zh"
category: "function"
name: "Zip 上下文选项"
title: "Zip 上下文选项列表"
module: "language"
source_url: "https://www.php.net/manual/zh/context.zip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Zip 上下文选项列表

## 说明

 {{{ 

Zip 上下文选项可用于 `zip` 包装器。

 }}} 

## 可选项

 {{{ 

- **`$password`** — 用于指定加密归档的密码。

 }}} 

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 7.2.0，PECL zip 1.14.0 | 添加 `$password`。 |

 }}} 

## 示例

 {{{ 

**基础 `$password` 用法示例**

 {{{ 

```php


<?php
// 读取加密归档
$opts = array(
    'zip' => array(
        'password' => 'secret',
    ),
);
// 创建上下文...
$context = stream_context_create($opts);

// ...并且使用它读取数据
echo file_get_contents('zip://test.zip#test.txt', false, $context);

?>

    
```

 }}}
