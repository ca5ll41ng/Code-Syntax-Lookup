---
id: "zh-php-function-function-oci-cancel"
language: "php"
lang: "zh"
category: "function"
name: "oci_cancel"
title: "中断游标读取数据"
signature: "bool oci_cancel(resource $statement)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-cancel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 中断游标读取数据

## 说明

```php
bool oci_cancel(resource $statement)
```

`oci_cancel()` 使一个游标无效，释放所有与之关联的资源并取消了从中读取的能力。

## 参数

- **`$statement`** — OCI 语句。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
