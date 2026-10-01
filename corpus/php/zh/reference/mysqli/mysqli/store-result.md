---
id: "zh-php-function-mysqli-store-result"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::store_result"
aliases: ["mysqli_store_result"]
title: "传输上次查询的结果集"
signature: "public mysqli_result|false mysqli::store_result(int $mode = 0)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.store-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 传输上次查询的结果集

## 说明

面向对象风格

```php
public mysqli_result|false mysqli::store_result(int $mode = 0)
```

过程化风格

```php
mysqli_result|false mysqli_store_result(mysqli $mysql, int $mode = 0)
```

传输由 `$mysql` 参数表示的连接上的上一次查询的结果集，可在 `mysqli_data_seek()` 函数中使用。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$mode`** — 想要设置的选项。自 PHP 8.1 起，此参数无效。可以是下列中的某一值： | 名称 | 说明 | | --- | --- | | `MYSQLI_STORE_RESULT_COPY_DATA` | 将结果从内部 mysqlnd 缓冲区复制到 PHP 变量中。默认 mysqlnd 采取引用策略来避免在内容中复制多份同样的结果集。例如，对于包含了很多小行的结果集，复制方法可以减少整体内存使用，因为保存结果的 PHP 变量可能会更早释放。（此选项适用于 mysqlnd 驱动）。 |

## 返回值

返回缓冲的结果对象，如果发生错误则返回 `false`。

> 如果查询没有返回结果集（例如，执行 INSERT 语句查询），`mysqli_store_result()` 会返回 `false`。如果读取结果集失败，也会返回 `false`。如果通过检查 `mysqli_error()` 是否返回非空字符串、`mysqli_error()` 或 `mysqli_field_count()` 是否返回了非零值来检查是否有错误。此函数在成功调用 `mysqli_query()` 后返回 `false` 的一个可能原因是结果集太大（无法分配内存）。如果 `mysqli_field_count()` 返回非零值，语句应该产生非空结果集。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在弃用传递 `$mode` 参数。该参数自 PHP 8.1.0 起不再有效。 |

## 示例

参阅 `mysqli_multi_query()`。

## 注释

> 执行查询之后，使用 `mysqli_free_result()` 函数来释放结果集所占用的内存，是一个很有用的实战经验。尤其是当使用 `mysqli_store_result()` 函数来转移数量较大的结果集的时候，释放结果集内存的操作尤为重要。

## 参见

`mysqli_real_query()` `mysqli_use_result()`
