---
id: "zh-php-function-function-header-remove"
language: "php"
lang: "zh"
category: "function"
name: "header_remove"
title: "删除之前设置的 HTTP 头"
signature: "void header_remove(string|null $name = null)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.header-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除之前设置的 HTTP 头

## 说明

```php
void header_remove(string|null $name = null)
```

删除之前用 `header()` 设置的 HTTP 头。

## 参数

- **`$name`** — 要移除的头名称。当为 `null`，移除之前设置的所有 header。
  > 参数不分大小写。



## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$name` 现在允许为 null。 |

## 示例

**取消指定的头**

```php


<?php
header("X-Foo: Bar");
header("X-Bar: Baz");
header_remove("X-Foo"); 
?>

    
```

以上示例的输出类似于：

```text


X-Bar: Baz

    
```

**取消之前全部指定的头**

```php


<?php
header("X-Foo: Bar");
header("X-Bar: Baz");
header_remove(); 
?>

    
```

以上示例的输出类似于：

```text



    
```

## 注释

 {{{ 

> 本函数会删除*所有* PHP 设置的头， 包括 Cookie、Session 和 `X-Powered-By`。

> 数据头只会在SAPI支持时得到处理和输出。

 }}} 

## 参见

`header()` `headers_sent()`
