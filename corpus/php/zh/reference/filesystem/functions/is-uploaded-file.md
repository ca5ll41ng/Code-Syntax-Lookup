---
id: "zh-php-function-function-is-uploaded-file"
language: "php"
lang: "zh"
category: "function"
name: "is_uploaded_file"
title: "判断文件是否是通过 HTTP POST 上传的"
signature: "bool is_uploaded_file(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.is-uploaded-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断文件是否是通过 HTTP POST 上传的

## 说明

```php
bool is_uploaded_file(string $filename)
```

如果 `$filename` 所给出的文件是通过 HTTP POST 上传的则返回 `true`。这可以用来确保恶意的用户无法欺骗脚本去访问本不能访问的文件，例如 `/etc/passwd`。

这种检查显得格外重要，如果上传的文件有可能会造成对用户或本系统的其他用户显示其内容的话。

为了能使 `is_uploaded_file()` 函数正常工作，必须指定类似于 `$_FILES['userfile']['tmp_name']` 的变量，而在从客户端上传的文件名 `$_FILES['userfile']['name']` 不能正常运作。

## 参数

- **`$filename`** — 要检查的文件名。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`is_uploaded_file()` 例子**

```php


<?php

if (is_uploaded_file($_FILES['userfile']['tmp_name'])) {
   echo "File ". $_FILES['userfile']['name'] ." uploaded successfully.\n";
   echo "Displaying contents\n";
   readfile($_FILES['userfile']['tmp_name']);
} else {
   echo "Possible file upload attack: ";
   echo "filename '". $_FILES['userfile']['tmp_name'] . "'.";
}

?>
    
```

## 参见

`move_uploaded_file()` `$_FILES` 关于用法的简单例子 文件上传处理
