---
id: "zh-php-function-yac-delete"
language: "php"
lang: "zh"
category: "function"
name: "Yac::delete"
title: "从缓存中删除条目"
signature: "public bool Yac::delete(string|array $key, int $delay = 0)"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从缓存中删除条目

## 说明

```php
public bool Yac::delete(string|array $key, int $delay = 0)
```

从缓存中删除一个或多个条目。

> 注意，Yac 并不会真正把条目从缓存中移除：删除只是把条目标记为过期——`delay` 为 `0` 时立即过期——只有当后续的写入恰好复用了这个哈希槽时，该条目才会被覆盖：要么是同一个键被重新写入，要么是另一个键的插入恰好落在了这个槽上。在那之前，槽位一直被占用，所以 `Yac::info()` 报告的 `slots_used` 计数不会减少， `Yac::dump()` 也仍会列出这些已删除的条目；检视 dump 输出时，需要自己检查 `ttl` 值把它们过滤掉。

## 参数

- **`$key`** — `string` 类型的键，或者由待删除的键组成的 `array`。
- **`$delay`** — 条目变为失效前等待的秒数。省略或为 `0` 时，条目立即失效。正数值表示条目在这段时间内仍可读，到期后才失效。

## 返回值

成功时返回 `true`；键不在缓存中时返回 `false`。由于删除只是把条目标记为过期，一个已删除但尚未被覆盖的键仍然算作存在：再次删除同一个键会返回 `true`。

传入键的 `array` 时，只有当每个键都存在才返回 `true`；只要有任何一个键缺失，就返回 `false`。

## 示例

**`Yac::delete()` 示例**

```php


<?php
$yac = new Yac();
$yac->set("foo", "bar");

var_dump($yac->delete("foo"));      // bool(true)：标记为过期
var_dump($yac->get("foo"));         // bool(false)：从此读取都是未命中
var_dump($yac->delete("foo"));      // bool(true)：槽位还没被覆盖，所以又成功
var_dump($yac->delete("never"));    // bool(false)：从未存储过

// 删除不会释放槽位：slots_used 不减少，
// 已过期的条目仍然出现在 dump 里
var_dump($yac->info()["slots_used"]); // int(1)
print_r($yac->dump());                // "foo" 仍在列表中；其 ttl 已过期
?>

   
```

**延迟删除**

```php


<?php
$yac = new Yac();

// 条目在过期前再保持可读 60 秒
$yac->set("tmp", "value");
var_dump($yac->delete("tmp", 60));    // bool(true)
?>

   
```

**一次删除多个键**

```php


<?php
$yac = new Yac();
$yac->set("tmp", "value");

// 只有当每个键都存在才返回 true
var_dump($yac->delete(array("tmp", "nope"))); // bool(false)："nope" 不存在
?>

   
```

## 参见

`Yac::set()` `Yac::flush()` `Yac::info()` `Yac::dump()`
