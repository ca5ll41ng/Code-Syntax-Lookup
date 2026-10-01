---
id: "zh-php-function-pool-submitto"
language: "php"
lang: "zh"
category: "function"
name: "Pool::submitTo"
title: "提交一个任务到特定的 Worker 以执行"
signature: "public int Pool::submitTo(int $worker, Threaded $task)"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/pool.submitTo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 提交一个任务到特定的 Worker 以执行

## 说明

```php
public int Pool::submitTo(int $worker, Threaded $task)
```

将对象提交到 Pool 中某个特定的 Worker 对象来执行。Worker 的下标从 0 开始， 由于 Pool 中的线程是懒加载机制， 所以 Worker 对象仅在 Pool 需要执行任务的时候才会真正被创建。

## 参数

- **`$worker`** — 用来执行任务的 Worker 对象，下标从 `0` 开始。
- **`$task`** — 要执行的任务

## 返回值

接受新加入对象的 Worker 对象ID

## 示例

**提交任务到特定的 Worker**

```php


<?php
class Task extends Threaded {
    public function run() {
        var_dump(Thread::getCurrentThreadID());
    }
}

$pool = new Pool(2);

$pool->submit(new Task());

for ($i = 0; $i < 5; ++$i) {
    $pool->submitTo(0, new Task()); // 将所有的任务都入栈到下标为 0 的 Worker
}

$pool->submitTo(1, new Task()); // 由于第二个 Worker 尚未存在，所以不可以将任务入栈到第二个 Worker

$pool->shutdown();

   
```

以上示例会输出：

```text


int(4475011072)
int(4475011072)
int(4475011072)
int(4475011072)
int(4475011072)
int(4475011072)

Fatal error: Uncaught Exception: The selected worker (1) does not exist in %s:%d

   
```
