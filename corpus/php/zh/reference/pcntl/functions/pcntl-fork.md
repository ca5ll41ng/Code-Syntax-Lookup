---
id: "zh-php-function-function-pcntl-fork"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_fork"
title: "在当前进程当前位置产生分叉（fork）"
signature: "int pcntl_fork()"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-fork.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在当前进程当前位置产生分叉（fork）

## 说明

```php
int pcntl_fork()
```

`pcntl_fork()` 函数创建子进程，这个子进程仅 PID（进程号） 和 PPID（父进程号）与其父进程不同。有关分叉在系统上工作的具体细节，请参阅系统的 fork(2) 手册页。

## 参数

此函数没有参数。

## 返回值

成功时，在父进程执行线程内返回产生的子进程的 PID，在子进程执行线程内返回 0。失败时，在 父进程上下文返回 -1，不会创建子进程，并且会引发 PHP 错误。

## 示例

**`pcntl_fork()` 示例**

```php


<?php

$pid = pcntl_fork();
if ($pid == -1) {
     die('could not fork');
} else if ($pid) {
     // 父进程
     pcntl_wait($status); // 防止僵尸子进程
} else {
     // 子进程
}

?>

    
```

## 参见

`pcntl_rfork()` `pcntl_waitpid()` `pcntl_signal()` `cli_set_process_title()`
