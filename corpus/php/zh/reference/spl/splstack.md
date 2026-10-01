---
id: "zh-php-guide-class-splstack"
language: "php"
lang: "zh"
category: "guide"
name: "class.splstack"
title: "SplStack 类"
module: "spl"
source_url: "https://www.php.net/manual/zh/class.splstack.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SplStack 类

SplStack

   简介  SplStack 类的主要功能是通过将迭代模式设置为 `SplDoublyLinkedList::IT_MODE_LIFO` 来提供使用双向链表实现的栈。      类摘要    `SplStack`   `extends` `SplDoublyLinkedList`  继承的常量  继承的方法      示例  
**`SplStack` 示例**

```php

<?php
$q = new SplStack();
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

3
2
1

     
```
