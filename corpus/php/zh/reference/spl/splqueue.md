---
id: "zh-php-guide-class-splqueue"
language: "php"
lang: "zh"
category: "guide"
name: "class.splqueue"
title: "SplQueue 类"
module: "spl"
source_url: "https://www.php.net/manual/zh/class.splqueue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SplQueue 类

SplQueue

   简介  SplQueue 类的主要功能是通过将迭代模式设置为 `SplDoublyLinkedList::IT_MODE_FIFO` 来提供使用双向链表实现的队列。      类摘要    `SplQueue`   `extends` `SplDoublyLinkedList`  继承的常量  方法  继承的方法      示例  
**`SplQueue` 示例**

```php

<?php
$q = new SplQueue();
$q[] = 1;
$q[] = 2;
$q[] = 3;
foreach ($q as $elem)  {
 echo $elem."\n";
}
?>

     
```

以上示例会输出：

```text

      
1
2
3

     
```

 
**使用 `SplQueue` 高效处理任务**

```php

<?php
$q = new SplQueue();
$q->setIteratorMode(SplQueue::IT_MODE_DELETE);
// ... enqueue some tasks on the queue ...
// process them
foreach ($q as $task) {
    // ... process $task ...
    // add new tasks on the queue
    $q[] = $newTask;
    // ...
}
?>

     
```
