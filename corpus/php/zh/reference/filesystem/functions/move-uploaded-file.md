---
id: "zh-php-function-function-move-uploaded-file"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1,2]}
name: "move_uploaded_file"
title: "将上传的文件移动到新位置"
signature: "bool move_uploaded_file(string $from, string $to)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.move-uploaded-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将上传的文件移动到新位置

## 说明

```php
bool move_uploaded_file(string $from, string $to)
```

本函数检查并确保由 `$from` 指定的文件是合法的上传文件（即通过 PHP 的 HTTP POST 上传机制所上传的）。如果文件合法，则将其移动为由 `$to` 指定的文件。

这种检查显得格外重要，如果上传的文件有可能会造成对用户或本系统的其他用户显示其内容的话。

## 参数

- **`$from`** — 上传的文件的文件名。
- **`$to`** — 移动文件到这个位置。

## 返回值

成功时返回 `true`。

如果 `$from` 不是合法的上传文件，不会出现任何操作，`move_uploaded_file()` 将返回 `false`。

如果 `$from` 是合法的上传文件，但出于某些原因无法移动，不会出现任何操作，`move_uploaded_file()` 将返回 `false`。此外还会发出一条警告。

## 示例

**上传多个文件**

```php


<?php
$uploads_dir = '/uploads';
foreach ($_FILES["pictures"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["pictures"]["tmp_name"][$key];
        // basename() 可以防止遍历攻击文件系统；
        // 进一步验证/清理文件名可能是合适的
        $name = basename($_FILES["pictures"]["name"][$key]);
        move_uploaded_file($tmp_name, "$uploads_dir/$name");
    }
}
?>

    
```

## 注释

> `move_uploaded_file()` 对 open_basedir 是敏感的。不过，限制只针对 `$to` 路径，因为允许移动上传的文件名 `$from` 可能会与这些限制产生冲突。`move_uploaded_file()` 仅作用于通过 PHP 上传的文件以确保这个操作的安全性。

> 如果目标文件已经存在，将会被覆盖。

## 参见

`is_uploaded_file()` `rename()` 参见文件上传处理一章中的简单使用例子。
