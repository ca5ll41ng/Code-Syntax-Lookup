---
id: "en-php-guide-class-swoole-coroutine-lock"
language: "php"
lang: "en"
category: "guide"
name: "class.swoole-coroutine-lock"
title: "The Swoole\\Coroutine\\Lock class"
module: "swoole"
source_url: "https://www.php.net/manual/en/class.swoole-coroutine-lock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Swoole\Coroutine\Lock class

Swoole\Coroutine\Lock

   Introduction  Swoole 6.0.1 introduced a coroutine lock that supports inter-process and inter-thread sharing. This lock is designed with non-blocking behavior and enables efficient coroutine synchronization in multi-process and multi-thread environments.    When compiled with the `--enable-iouring` option and the Linux kernel supports the `io_uring futex` feature, Swoole's coroutine lock implements synchronization using `io_uring futex`. In this case, coroutines wait for lock wakeups using an efficient queuing mechanism, significantly improving performance.    Without `io_uring futex`, the coroutine lock falls back to an exponential backoff sleep mechanism, where the wait time increases by 2^n milliseconds (n being the number of failures) after each failed attempt to acquire the lock. While this approach avoids busy waiting, it introduces additional CPU scheduling overhead and latency.    The coroutine lock is reentrant, allowing the currently holding coroutine to safely perform multiple lock operations.   
> Do not create locks in callback functions like `onReceive`, as this will cause continuous memory growth and lead to memory leaks.

 
> Locking and unlocking must be performed in the same coroutine, otherwise it will break static conditions.

    Class Synopsis   `Swoole\Coroutine\Lock`    `Swoole\Coroutine\Lock`          Examples 
**Basic usage**

```php

<?php
use Swoole\Coroutine\Lock;
use Swoole\Coroutine\WaitGroup;
use function Swoole\Coroutine\go;
use function Swoole\Coroutine\run;

$lock = new Lock();
$waitGroup = new WaitGroup();

run(function() use ($lock, $waitGroup) {
    go(function() use ($lock, $waitGroup) {
        $waitGroup->add();
        $lock->lock();
        sleep(1);
        $lock->unlock();
        $waitGroup->done();
    });

    go(function() use ($lock, $waitGroup) {
        $waitGroup->add();
        $lock->lock(); // Wait for the holding coroutine to unlock
        sleep(1);
        $lock->unlock();
        $waitGroup->done();
    });

    echo 'Lock does not block the process';
    $waitGroup->wait();
});

    
```
