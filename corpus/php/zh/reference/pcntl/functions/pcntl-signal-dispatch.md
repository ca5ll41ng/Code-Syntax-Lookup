---
id: "zh-php-function-function-pcntl-signal-dispatch"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_signal_dispatch"
title: "调用等待信号的处理程序"
signature: "bool pcntl_signal_dispatch()"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-signal-dispatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用等待信号的处理程序

## 说明

```php
bool pcntl_signal_dispatch()
```

`pcntl_signal_dispatch()` 函数调用每个等待信号通过 `pcntl_signal()` 安装的处理程序。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`pcntl_signal_dispatch()` 示例**

```php


<?php
echo "安装信号处理程序...\n";
pcntl_signal(SIGHUP,  function($signo) {
     echo "信号处理程序被调用\n";
});

echo "为自己生成SIGHUP信号...\n";
posix_kill(posix_getpid(), SIGHUP);

echo "分发...\n";
pcntl_signal_dispatch();

echo "完成\n";

?>

    
```

以上示例的输出类似于：

```text


安装信号处理程序...
为自己生成SIGHUP信号...
分发...
信号处理程序被调用
完成

    
```

## 参见

`pcntl_signal()` `pcntl_sigprocmask()` `pcntl_sigwaitinfo()` `pcntl_sigtimedwait()`
