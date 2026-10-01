---
id: "zh-php-function-function-oci-new-collection"
language: "php"
lang: "zh"
category: "function"
name: "oci_new_collection"
title: "分配新的 collection 对象"
signature: "OCICollection|false oci_new_collection(resource $connection, string $type_name, string|null $schema = null)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-new-collection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 分配新的 collection 对象

## 说明

```php
OCICollection|false oci_new_collection(resource $connection, string $type_name, string|null $schema = null)
```

分配新的 collection 对象。

## 参数

- **`$connection`** — Oracle 连接标识符，由 `oci_connect()` 或 `oci_pconnect()` 返回。
- **`$type_name`** — 应该是有效的命名类型（大写）。
- **`$schema`** — 应该指向创建命名类型的 scheme 。当传递 `null` 时，使用当前用户名。

## 返回值

返回新 `OCICollection` 对象，或者当失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0、PECL OCI8 3.0.0 | `$schema` 现在可为 null。 |

## 注释

> `OCICollection` 类在 PHP 8 和 OCI8 3.0.0 之前叫做 `OCI-Collection`。
