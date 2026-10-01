---
id: "zh-php-function-function-opcache-compile-file"
language: "php"
lang: "zh"
category: "function"
name: "opcache_compile_file"
title: "无需运行，即可编译并缓存 PHP 脚本"
signature: "bool opcache_compile_file(string $filename)"
module: "opcache"
source_url: "https://www.php.net/manual/zh/function.opcache-compile-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 无需运行，即可编译并缓存 PHP 脚本

## 说明

```php
bool opcache_compile_file(string $filename)
```

该函数可以用于在不用运行某个 PHP 脚本的情况下，编译该 PHP 脚本并将其添加到字节码缓存中去。 该函数可用于在 Web 服务器重启之后初始化缓存，以供后续请求调用。

## 参数

- **`$filename`** — 被编译的 PHP 脚本的路径。

## 返回值

如果 `$filename` 被成功编译，则返回 `true` 或者在失败时返回 `false`。

## 错误／异常

如果 `$filename` 不能被载入或者不能被编译，则会生成 `E_WARNING` 级别的错误。 可以使用 @ 来抑制该警告。

## 参见

 `opcache_invalidate()`
