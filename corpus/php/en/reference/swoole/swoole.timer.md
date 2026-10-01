---
id: "en-php-guide-class-swoole-timer"
language: "php"
lang: "en"
category: "guide"
name: "class.swoole-timer"
title: "The Swoole\\Timer class"
module: "swoole"
source_url: "https://www.php.net/manual/en/class.swoole-timer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Swoole\Timer class

Swoole\Timer

   Introduction  Millisecond precision timer. The underlying implementation is based on epoll_wait and setitimer, using a min-heap data structure that supports adding a large number of timers.    In synchronous I/O processes, such as the Manager and TaskWorker processes, it is implemented using setitimer and signals.    In asynchronous I/O processes, it is implemented using the timeout of epoll_wait/kevent/poll/select.    The underlying system does not support timers with a delay of `0`; values below `1` millisecond emit an `E_WARNING` and the call fails. This differs from languages such as Node.js. `Swoole\Event::defer()` may be used to achieve similar functionality. 
```php

<?php
Swoole\Event::defer(function () {
  echo "hello\n";
});
?>

    
```

    Timer Correction: The execution time of the timer callback function does not affect the timing of the next timer execution. For example, setting a tick timer of 10ms after 0.002s, the first callback will be executed at 0.012s, if the callback function takes 5ms to execute, the next timer will still trigger at 0.022s, not at 0.027s.    However, if the execution time of the timer callback function is too long, even covering the time of the next timer execution, the underlying system will perform time correction, discarding the expired behavior and triggering the timer callback at the next available time. For example, if the callback function at 0.012s takes 15ms to execute, causing the timer at 0.022s to be delayed, the timer callback will be triggered again at 0.032s.    By default, when a timer is triggered, a coroutine is automatically created to execute the callback function. This can be disabled with `swoole_async_set()`.   
> Timer only works within the current process space.

 
> Timer is purely asynchronous and incompatible with synchronous I/O functions.

 
> Timer execution may experience minor timing deviations.

    Class Synopsis   `Swoole\Timer`    `Swoole\Timer`
