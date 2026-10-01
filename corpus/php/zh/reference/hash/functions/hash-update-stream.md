---
id: "zh-php-function-function-hash-update-stream"
language: "php"
lang: "zh"
category: "function"
name: "hash_update_stream"
title: "从打开的流向活跃的散列运算上下文中填充数据"
signature: "int hash_update_stream(HashContext $context, resource $stream, int $length = -1)"
module: "hash"
source_url: "https://www.php.net/manual/zh/function.hash-update-stream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从打开的流向活跃的散列运算上下文中填充数据

## 说明

```php
int hash_update_stream(HashContext $context, resource $stream, int $length = -1)
```

## 参数

- **`$context`** — 由 `hash_init()` 函数返回的散列运算上下文。
- **`$stream`** — 创建流的函数返回的打开的文件句柄。
- **`$length`** — 要从 `$stream` 向活跃的散列运算上下文中拷贝的最大字符数。

## 返回值

从 `$stream` 向散列运算上下文中实际填充的字节数量。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 接收参数从资源类型修改为 `HashContext` 对象类型。 |

## 示例

**`hash_update_stream()` 示例**

```php


<?php
$fp = tmpfile();
fwrite($fp, 'jumped over the lazy dog.');
rewind($fp);

$ctx = hash_init('sha256');
hash_update($ctx, 'The quick brown fox ');
hash_update_stream($ctx, $fp);
echo hash_final($ctx);
?>

    
```

以上示例会输出：

```text


68b1282b91de2c054c36629cb8dd447f12f096d3e3c587978dc2248444633483

    
```

## 参见

`hash_init()` `hash_update()` `hash_final()`
