---
id: "zh-php-function-function-finfo-open"
language: "php"
lang: "zh"
category: "function"
name: "finfo_open"
aliases: ["finfo::__construct"]
title: "创建新 finfo 实例"
signature: "finfo|false finfo_open(int $flags = FILEINFO_NONE, string|null $magic_database = null)"
module: "fileinfo"
source_url: "https://www.php.net/manual/zh/function.finfo-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建新 finfo 实例

## 说明

过程化风格

```php
finfo|false finfo_open(int $flags = FILEINFO_NONE, string|null $magic_database = null)
```

面向对象风格（构造器）：

```php
public finfo::__construct(int $flags = FILEINFO_NONE, string|null $magic_database = null)
```

本函数打开一个魔数数据库并且返回它的实例。

## 参数

- **`$flags`** — 一个 Fileinfo 常量 或多个 Fileinfo 常量 进行逻辑或运算。
- **`$magic_database`** — 魔数数据库文件名称， 通常是 `/path/to/magic.mime`。 如果未指定，则使用 `MAGIC` 环境变量。 如果未指定此环境变量， 则使用 PHP 绑定的魔数数据库。 — 传入 `null` 或者空字符串，等同于使用默认值。

## 返回值

（仅适用于过程化风格） 成功时返回 `finfo` 实例， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在返回 `finfo` 实例，之前返回 `resource`。 |
| 8.0.3 | `$magic_database` 现在可以为 null。 |

## 示例

**面向对象风格**

```php


<?php
$finfo = new finfo(FILEINFO_MIME, "/usr/share/misc/magic"); // 返回 mime 类型

/* get mime-type for a specific file */
$filename = "/usr/local/something.txt";
echo $finfo->file($filename);

?>

  
```

**过程化风格**

```php


<?php
$finfo = finfo_open(FILEINFO_MIME, "/usr/share/misc/magic"); // 返回 mime 类型

if (!$finfo) {
    echo "Opening fileinfo database failed";
    exit();
}

/* 获取指定文件的 mime 类型 */
$filename = "/usr/local/something.txt";
echo finfo_file($finfo, $filename);

/* 关闭资源 */
finfo_close($finfo);
?>

   
```

以上示例会输出：

```text


text/plain; charset=us-ascii

  
```

## 注释

> 通常来说，除非特别需要自定义的魔数数据库。否则使用绑定的魔数数据库（不设置 `$magic_file` 和 `MAGIC` 环境变量）是最好的做法。

## 参见

 `finfo_close()`
