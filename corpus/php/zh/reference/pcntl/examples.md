---
id: "zh-php-guide-pcntl-examples"
language: "php"
lang: "zh"
category: "guide"
name: "pcntl.examples"
title: "示例"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/pcntl.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 基本用法

这个示例用于产生一个守护进程并可以通过信号处理进行关闭。

**进程控制示例**

```php


<?php
pcntl_async_signals(true);

$pid = pcntl_fork();
if ($pid == -1) {
     die("could not fork"); 
} else if ($pid) {
     exit(); // 父进程
} else {
     // 子进程
}

// 从控制终端分离
if (posix_setsid() == -1) {
    die("could not detach from terminal");
}

// 安装信号处理程序
pcntl_signal(SIGTERM, "sig_handler");
pcntl_signal(SIGHUP, "sig_handler");

// 执行无限循环任务
while (1) {

    // do something interesting here

}

function sig_handler($signo) 
{

     switch ($signo) {
         case SIGTERM:
             // 处理终止任务
             exit;
             break;
         case SIGHUP:
             // 处理重启任务
             break;
         default:
             // 处理所有其它信号
     }

}

?>

   
```
