---
id: "zh-php-guide-features-remote-files"
language: "php"
lang: "zh"
category: "guide"
name: "features.remote-files"
title: "使用远程文件"
module: "features"
source_url: "https://www.php.net/manual/zh/features.remote-files.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用远程文件

只要在 php.ini 中启用 allow_url_fopen，就可以将 HTTP 和 FTP URL 与大多数以文件名作为参数的函数一起使用。此外，也可以在 `include()`、`include_once()`、`require()` 及 `require_once()` 语句中使用 URL（必须启用 allow_url_include）。PHP 协议支持的更多信息参见`wrappers`。

例如，可以用此打开远程 web 服务器上的文件，解析输出以获取所需数据，然后在数据库查询中使用该数据，或者网站其余部分相同的样式输出内容。

**获取远程页面的标题**

```php


<?php
$file = fopen ("http://www.example.com/", "r");
if (!$file) {
    echo "<p>Unable to open remote file.\n";
    exit;
}
while (!feof ($file)) {
    $line = fgets ($file, 1024);
    /* 仅当标题跟标签在同一行时才有效 */
    if (preg_match ("@\<title\>(.*)\</title\>@i", $line, $out)) {
        $title = $out[1];
        break;
    }
}
fclose($file);
?>

   
```

也可以在 FTP 服务器上写入文件（提供具有正确访问权限的用户身份连接）。只能使用此方法创建新文件；如果尝试覆盖已存在的文件，则调用 `fopen()` 将失败。

要以“anonymous”以外的用户名连接服务器，需要指明用户名（可能还有密码），例如“`ftp://user:password@ftp.example.com/path/to/file`”（当需要基础认证的 HTTP 协议访问远程文件时也可以使用相同的语法）。

**将数据保存到远程服务器**

```php


<?php
$file = fopen ("ftp://ftp.example.com/incoming/outputfile", "w");
if (!$file) {
    echo "<p>Unable to open remote file for writing.\n";
    exit;
}
/* 这里写入数据。 */
fwrite ($file, $_SERVER['HTTP_USER_AGENT'] . "\n");
fclose ($file);
?>

   
```

> 或许可以从以上范例中了解到可以使用该技术写入远程日志文件。但不幸的是，这不起作用，因为如果远程文件已存在，调用 `fopen()` 将失败。要进行这样的分布式日志记录，应该参考 `syslog()`。
