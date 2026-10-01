---
id: "zh-php-function-yac-dump"
language: "php"
lang: "zh"
category: "function"
name: "Yac::dump"
title: "导出缓存条目以便检查"
signature: "public array Yac::dump(int $limit = 100, int $offset = 0)"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.dump.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 导出缓存条目以便检查

## 说明

```php
public array Yac::dump(int $limit = 100, int $offset = 0)
```

导出当前缓存储存的条目的元数据。值本身不会被返回。

## 参数

- **`$limit`** — 返回条目的最大数量。 — `$limit` 传 `-1` 会导出缓存当前持有的全部条目。注意，对大型缓存构建完整列表可能占用可观的内存；内存紧张时，请改用 `$limit` 和 `$offset` 分页遍历。
- **`$offset`** — 收集前跳过的条目数。该参数自 PECL yac 2.4.0 起可用；更早的版本总是从第一个条目开始。结合 `$limit`，可用于对储存条目超过单次调用返回上限的缓存进行分页遍历。

## 返回值

返回一个 `array`，每个导出的条目对应一个元素。每个元素本身也是描述该条目的数组：

- **`index`** — 条目在哈希表中的槽位索引。
- **`hash`** — 键的 64 位哈希值，用于槽位探测。
- **`crc`** — 存储值的 CRC32 校验和，用于检测撕裂读取（torn read）。内嵌（embedded）条目没有值块，该字段为 `0`。
- **`ttl`** — 过期时间戳（Unix 时间）。`0` 表示条目永不因时间过期。注意 `Yac::delete()` 只是把条目标记为过期，因此已删除的条目仍可能出现在导出结果中； `ttl` 非零且在过去，表明条目已过期或已被删除。
- **`k_len`** — 键的长度，单位为字节。
- **`v_len`** — 值的长度，单位为字节。对于被压缩的条目，这是压缩*前*原始值的长度（自 yac 2.4.0 起；更早的版本报告的是存储的压缩后长度）。
- **`c_len`** — 仅被压缩的条目有此字段（自 yac 2.4.0 起）：实际存入共享内存的压缩数据长度，单位为字节。对比 `c_len` 和 `v_len` 可以看出每个条目通过压缩节省了多少空间。
- **`size`** — 值块在共享内存中分配的大小，单位为字节。内嵌条目为 `0`。
- **`atime`** — 最后访问时间（Unix 时间），每次成功的 `Yac::get()` 都会更新它。缓存写满时，候选槽位中 `atime` 最旧的条目会最先被驱逐（自 yac 2.4.0 起）。
- **`hits`** — 每个条目的命中计数器，每次成功的 `Yac::get()` 都会使其递增；当条目被新的 `Yac::set()` 或 `Yac::add()` 覆盖时重置（自 yac 2.4.0 起）。
- **`embedded`** — 值是否直接存储在槽位内部，而不是单独的值块中（自 yac 2.4.0 起）。小值——`NULL`、布尔值、小整数、不超过 7 字节的字符串和空数组——以内嵌方式存储，完全不占用值内存；这类条目的 `crc` 和 `size` 均报告为 `0`。
- **`key`** — 缓存键，不包含实例前缀。

## 示例

**`Yac::dump()` 示例**

```php


<?php
$yac = new Yac();
$yac->set("foo", "bar");
$yac->set("baz", "qux");

print_r($yac->dump());
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [0] => Array
        (
            [index] => 12345
            [hash] => 14463105906481965911
            [crc] => 0
            [ttl] => 0
            [k_len] => 3
            [v_len] => 3
            [size] => 0
            [atime] => 1725955200
            [hits] => 0
            [embedded] => 1
            [key] => foo
        )

    [1] => Array
        (
            [index] => 12987
            [hash] => 15132029420525657053
            [crc] => 0
            [ttl] => 0
            [k_len] => 3
            [v_len] => 3
            [size] => 0
            [atime] => 1725955200
            [hits] => 0
            [embedded] => 1
            [key] => baz
        )

)

   
```

条目按槽位顺序列出，而不是按存储顺序。内嵌条目（直接保存在槽位内部的小标量）的 `crc` 和 `size` 为零；存储在独立值块中的条目带有校验和与块大小，被压缩的条目还额外带有 `c_len`。

**分页遍历大型缓存**

`$limit` 限制单次调用返回的条目数， `$offset` 表示收集前跳过的条目数，两者组合即可对储存条目超过单次调用返回上限的缓存进行分页遍历。

```php


<?php
$yac = new Yac();

// 先往缓存里填 250 个条目
for ($i = 0; $i < 250; $i++) {
    $yac->set("key$i", $i);
}

$page_size = 100;
$page_num  = 2;

// 跳过前 100 个条目，返回接下来的 100 个（第 2 页）
$page = $yac->dump($page_size, $page_size * ($page_num - 1));

var_dump(count($page));
?>

   
```

以上示例的输出类似于：

```text


int(100)

   
```

当缓存中的条目数少于请求页覆盖的范围时，返回的条目数会少于请求数；当 offset 指向最后一个已占用槽位之后时，返回空数组。

## 参见

`Yac::info()`
