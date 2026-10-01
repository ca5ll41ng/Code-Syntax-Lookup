---
id: "zh-php-function-function-ftp-alloc"
language: "php"
lang: "zh"
category: "function"
name: "ftp_alloc"
title: "为要上传的文件分配空间"
signature: "bool ftp_alloc(FTP\\Connection $ftp, int $size, string $response = null)"
module: "ftp"
source_url: "https://www.php.net/manual/zh/function.ftp-alloc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为要上传的文件分配空间

## 说明

```php
bool ftp_alloc(FTP\Connection $ftp, int $size, string $response = null)
```

向远程 FTP 服务器发送 `ALLO` 命令， 来为要上传的文件分配空间。

> 很多 FTP 服务器不支持`ALLO` 命令。 如果服务器不支持此命令，将会返回错误码（`false`）， 返回成功码（`true`）表示预分配空间不是必需的， 客户端可以继续操作了。 因此，请仅对需要强制预分配空间服务器使用此函数。

## 参数

- **`$ftp`** — `FTP\Connection` 实例。
- **`$size`** — 要分配的空间，以字节为单位。
- **`$response`** — 如果提供此参数，那么服务器的响应 会以文本方式设置到 `$response` 中。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$ftp` 参数接受 `FTP\Connection` 实例，之前接受 `resource`。 |

## 示例

**`ftp_alloc()` 示例**

```php


<?php

$file = "/home/user/myfile";

// 连接服务器
$ftp = ftp_connect('ftp.example.com');
$login_result = ftp_login($ftp, 'anonymous', 'user@example.com');

if (ftp_alloc($ftp, filesize($file), $result)) {
  echo "Space successfully allocated on server.  Sending $file.\n";
  ftp_put($ftp, '/incoming/myfile', $file, FTP_BINARY);
} else {
  echo "Unable to allocate space on server.  Server said: $result\n";
}

ftp_close($ftp);

?>

    
```

## 参见

`ftp_put()` `ftp_fput()`
