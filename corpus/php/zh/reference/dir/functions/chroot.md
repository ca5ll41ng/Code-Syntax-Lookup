---
id: "zh-php-function-function-chroot"
language: "php"
lang: "zh"
category: "function"
name: "chroot"
title: "改变根目录"
signature: "bool chroot(string $directory)"
module: "dir"
source_url: "https://www.php.net/manual/zh/function.chroot.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 改变根目录

## 说明

```php
bool chroot(string $directory)
```

将当前进程的根目录改变为 `$directory`。

本函数仅在系统支持且运行于 CLI，CGI 或嵌入 SAPI 版本时才能正确工作。此外本函数还需要 root 权限。

调用此函数不会改变 `__DIR__` 和 `__FILE__` 魔术常量的值。

## 参数

- **`$directory`** — 新目录

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`chroot()` example**

```php


<?php
chroot("/path/to/your/chroot/");
echo getcwd();
?>

    
```

以上示例会输出：

```text


/

    
```

## 注释

> 此函数未在 Windows 平台下实现。

> 此函数未在 ZTS (Zend Thread Safety) PHP 解释器中实现。确认你的 PHP 版本，可以在命令行输入 php -i 来查看是否包含 `PHP_ZTS` 常量。
