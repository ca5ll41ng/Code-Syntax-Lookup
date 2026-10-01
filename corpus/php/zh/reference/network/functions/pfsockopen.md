---
id: "zh-php-function-function-pfsockopen"
language: "php"
lang: "zh"
category: "function"
name: "pfsockopen"
title: "打开持久的 Internet 或 Unix 套接字连接"
signature: "resource|false pfsockopen(string $hostname, int $port = -1, int $error_code = null, string $error_message = null, float|null $timeout = null)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.pfsockopen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开持久的 Internet 或 Unix 套接字连接

## 说明

```php
resource|false pfsockopen(string $hostname, int $port = -1, int $error_code = null, string $error_message = null, float|null $timeout = null)
```

这个函数的作用与 `fsockopen()` 完全一样，不同的地方在于当在脚本执行完后，连接一直不会关闭。可以说它是 `fsockopen()` 的长连接版本。

## 参数

对于其参数的信息，请参考 `fsockopen()` 的文档。

## 返回值

`pfsockopen()` 返回文件指针，可以跟其他文件函数（比如 `fgets()`、`fgetss()`、`fwrite()`、`fclose()` 和 `feof()`）一起使用， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$timeout` 现在可以为 null。 |

## 参见

`fsockopen()`
