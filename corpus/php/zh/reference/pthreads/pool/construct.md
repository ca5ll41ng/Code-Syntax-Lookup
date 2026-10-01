---
id: "zh-php-function-pool-construct"
language: "php"
lang: "zh"
category: "function"
name: "Pool::__construct"
title: "创建新的 Worker 对象池"
signature: "public Pool::__construct(int $size, [string $class = ...], [array $ctor = ...])"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/pool.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建新的 Worker 对象池

## 说明

```php
public Pool::__construct(int $size, [string $class = ...], [array $ctor = ...])
```

创建新的 Worker 对象池，但是所对应的线程是延迟创建的的，也就是说， 直到需要执行任务的时候 才会创建对应的线程。

## 参数

- **`$size`** — 此 Pool 对象可创建的 Worker 对象的最大数量
- **`$class`** — 新创建的 Worker 对象的类。 如果不指定类，那么会使用默认的 `Worker` 类。
- **`$ctor`** — 创建 Worker 对象时所用到的参数，以数组方式传入

## 示例

**创建 Pool 对象**

```php


<?php
class MyWorker extends Worker {

    public function __construct(Something $something) {
        $this->something = $something;
    }

    public function run() {
        /** ... **/
    }
}

$pool = new Pool(8, \MyWorker::class, [new Something()]);

var_dump($pool);
?>

   
```

以上示例会输出：

```text


object(Pool)#1 (6) {
  ["size":protected]=>
  int(8)
  ["class":protected]=>
  string(8) "MyWorker"
  ["workers":protected]=>
  NULL
  ["work":protected]=>
  NULL
  ["ctor":protected]=>
  array(1) {
    [0]=>
    object(Something)#2 (0) {
    }
  }
  ["last":protected]=>
  int(0)
}

   
```
