---
id: "zh-php-function-wrappers-ssh2"
language: "php"
lang: "zh"
category: "function"
name: "ssh2://"
title: "安全外壳协议 2"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.ssh2.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安全外壳协议 2

## 说明

 {{{ 

`ssh2.shell://` `ssh2.exec://` `ssh2.tunnel://` `ssh2.sftp://` `ssh2.scp://` (PECL)

> 该封装器默认没有激活
>
> 为了使用 `ssh2.*://` 封装协议，必须从  中安装有效的 [SSH2](ssh2) 扩展。

除了支持传统的 URI 登录信息，ssh2 封装协议也支持通过 URL 的主机（host）部分来复用打开连接。

 }}} 

## 用法

 {{{ 

- `ssh2.shell://user:pass@example.com:22/xterm`
- `ssh2.exec://user:pass@example.com:22/usr/local/bin/somecmd`
- `ssh2.tunnel://user:pass@example.com:22/192.168.0.1:14`
- `ssh2.sftp://user:pass@example.com:22/path/to/filename`

 }}} 

## 可选项

 {{{ 

| 属性 | ssh2.shell | ssh2.exec | ssh2.tunnel | ssh2.sftp | ssh2.scp |
| --- | --- | --- | --- | --- | --- |
| 受 allow_url_fopen 影响 | Yes | Yes | Yes | Yes | Yes |
| 允许读取 | Yes | Yes | Yes | Yes | Yes |
| 允许写入 | Yes | Yes | Yes | Yes | No |
| 允许追加 | No | No | No | Yes（当服务器支持的时候） | No |
| 允许同时读和写 | Yes | Yes | Yes | Yes | No |
| 支持 `stat()` | No | No | No | Yes | No |
| 支持 `unlink()` | No | No | No | Yes | No |
| 支持 `rename()` | No | No | No | Yes | No |
| 支持 `mkdir()` | No | No | No | Yes | No |
| 支持 `rmdir()` | No | No | No | Yes | No |

 FIXME: This should be context.ssh2!!! 

| 名称 | 用法 | 默认 |
| --- | --- | --- |
| `session` | 重复使用预连接的 ssh2 资源 |  |
| `sftp` | 重复使用预先分配的 sftp 资源 |  |
| `methods` | 密钥交换（key exchange）、主机密钥（hostkey）、cipher、压缩和 MAC 方法 |  |
| `callbacks` |  |  |
| `username` | 以该用户名连接 |  |
| `password` | 使用的密码来进行密码验证 |  |
| `pubkey_file` | 用于验证的公钥（public key）文件 |  |
| `privkey_file` | 用于验证的私钥（private key）文件 |  |
| `env` | 需要设置的环境变量的关联数组 |  |
| `term` | 在分配一个 pty 时请求的终端类型 |  |
| `term_width` | 在分配一个 pty 时请求的终端宽度 |  |
| `term_height` | 在分配一个 pty 时请求的终端宽度高度 |  |
| `term_units` | term_width 和 term_height 的单位 | `SSH2_TERM_UNIT_CHARS` |

 }}} 

## 示例

 {{{ 

**从一个活跃的连接中打开流**

```php


<?php
$session = ssh2_connect('example.com', 22);
ssh2_auth_pubkey_file($session, 'username', '/home/username/.ssh/id_rsa.pub',
                                            '/home/username/.ssh/id_rsa', 'secret');
$stream = fopen("ssh2.tunnel://$session/remote.example.com:1234", 'r');
?>

   
```

**`$session` 变量必须保持可用！**

为了使用 `ssh2.*://$session` 封装协议， 必须保留 `$session` 资源变量。下面的代码就不会有预期的效果：

```php


<?php
$session = ssh2_connect('example.com', 22);
ssh2_auth_pubkey_file($session, 'username', '/home/username/.ssh/id_rsa.pub',
                                            '/home/username/.ssh/id_rsa', 'secret');
$connection_string = "ssh2.sftp://$session/";
unset($session);
$stream = fopen($connection_string . "path/to/file", 'r');
?>

   
```

unset() 会关闭 session，因为 `$connection_string` 不保存对 `$session` 变量的引用，只是源自它的字符串转换。当离开（像函数）作用域隐性调用 `unset()` 时，也会发生这种情况。

 }}}
