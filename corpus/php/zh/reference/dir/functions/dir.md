---
id: "zh-php-function-function-dir"
language: "php"
lang: "zh"
category: "function"
name: "dir"
title: "返回一个 Directory 类实例"
signature: "Directory|false dir(string $directory, resource|null $context = null)"
module: "dir"
source_url: "https://www.php.net/manual/zh/function.dir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个 Directory 类实例

## 说明

```php
Directory|false dir(string $directory, resource|null $context = null)
```

以面向对象的方式访问目录。打开 `$directory` 参数指定的目录。

## 参数

- **`$directory`** — 被打开的目录
- **`$context`** — 上下文流（context stream） `resource`。

## 返回值

返回 `Directory` 的实例，出现错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$context` 现在可为空（nullable）。 |

## 示例

**`dir()` 示例**

请特别注意下面示例中 `Directory::read()` 函数返回值的判断方式。 我们严格测试（值相等，并且类型相同，请参考 比较运算符 ）返回值等于 `false` ，因为有些情况下，目录名可能"等于" `false` ，导致 跳出循环。

```php


<?php
$d = dir("/etc/php5");
echo "Handle: " . $d->handle . "\n";
echo "Path: " . $d->path . "\n";
while (false !== ($entry = $d->read())) {
   echo $entry."\n";
}
$d->close();
?>

    
```

以上示例的输出类似于：

```text


Handle: Resource id #2
Path: /etc/php5
.
..
apache
cgi
cli

    
```

## 注释

> 目录条目返回的顺序依赖于系统。
