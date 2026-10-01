---
id: "zh-php-function-function-chmod"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "chmod"
title: "改变文件模式"
signature: "bool chmod(string $filename, int $permissions)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.chmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 改变文件模式

## 说明

```php
bool chmod(string $filename, int $permissions)
```

尝试将 `$filename` 所指定文件的模式改成 `$permissions` 所给定的。

## 参数

- **`$filename`** — 文件的路径。
- **`$permissions`** — 注意 `$permissions` 不会被自动当成八进制数值，因此为确保正确操作，需要给 `$permissions` 前面加上 0。诸如“g+w”之类的字符串将无法正常工作。 — ```php <?php chmod("/somedir/somefile", 755); // 十进制数，可能不对 chmod("/somedir/somefile", "u+rwx,go+rx"); // 字符串，不对 chmod("/somedir/somefile", 0755); // 八进制数，正确的 mode 值 ?> ``` — `$permissions` 参数包含三个八进制数按顺序分别指定了所有者、所有者所在的组以及所有人的访问限制。每一部分都可以通过加入所需的权限来计算出所要的权限。数字 1 表示使文件可执行，数字 2 表示使文件可写，数字 4 表示使文件可读。加入这些数字来制定所需要的权限。有关 UNIX 系统的文件权限可以阅读手册“man 1 chmod”和“man 2 chmod”。 — ```php <?php // 所有者可以读写，其他人什么也不能做 chmod("/somedir/somefile", 0600); // 所有者可以读写，其他人可以读 chmod("/somedir/somefile", 0644); // 所有者可以读写执行，其他人可以读和执行 chmod("/somedir/somefile", 0755); // 所有者可以读写执行，所有者同组可以读和执行 chmod("/somedir/somefile", 0750); ?> ```

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

失败时会发出 `E_WARNING`。

## 注释

> 当前用户指的是执行 PHP 的用户。很可能和通常访问 shell 或者 FTP 的用户不是同一个。在大多数系统下文件模式只能被拥有该文件的用户改变。

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。

## 参见

`chown()` `chgrp()` `fileperms()` `stat()`
