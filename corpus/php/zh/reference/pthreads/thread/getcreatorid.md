---
id: "zh-php-function-thread-getcreatorid"
language: "php"
lang: "zh"
category: "function"
name: "Thread::getCreatorId"
title: "识别"
signature: "public int Thread::getCreatorId()"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/thread.getcreatorid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 识别

## 说明

```php
public int Thread::getCreatorId()
```

返回创建当前线程的线程ID。

## 参数

此函数没有参数。

## 返回值

线程ID，数字格式

## 示例

**返回创建线程的线程或进程ID**

```php


<?php
class My extends Thread {
    public function run() {
        printf("%s created by Thread #%lu\n", __CLASS__, $this->getCreatorId());
    }
}
$my = new My();
$my->start();
?>

   
```

以上示例会输出：

```text


My created by Thread #123456778899

   
```
