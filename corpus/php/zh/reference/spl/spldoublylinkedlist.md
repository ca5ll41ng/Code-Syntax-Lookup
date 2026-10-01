---
id: "zh-php-guide-class-spldoublylinkedlist"
language: "php"
lang: "zh"
category: "guide"
name: "class.spldoublylinkedlist"
title: "SplDoublyLinkedList 类"
module: "spl"
source_url: "https://www.php.net/manual/zh/class.spldoublylinkedlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SplDoublyLinkedList 类

SplDoublyLinkedList

   简介  SplDoublyLinkedList 类提供双向链表的主要功能。      类摘要    `SplDoublyLinkedList`   `implements` Iterator   Countable   ArrayAccess   Serializable  常量  `public` `const` `int` `SplDoublyLinkedList::IT_MODE_LIFO`   `public` `const` `int` `SplDoublyLinkedList::IT_MODE_FIFO`   `public` `const` `int` `SplDoublyLinkedList::IT_MODE_DELETE`   `public` `const` `int` `SplDoublyLinkedList::IT_MODE_KEEP`  方法      预定义常量  迭代方向 
- **`SplDoublyLinkedList::IT_MODE_LIFO`** — 列表将以先进后出的顺序迭代，就像栈一样。
- **`SplDoublyLinkedList::IT_MODE_FIFO`** — 列表将以先进先出的顺序迭代，就像队列一样。

   迭代行为 
- **`SplDoublyLinkedList::IT_MODE_DELETE`** — 迭代将移除已迭代的元素。
- **`SplDoublyLinkedList::IT_MODE_KEEP`** — 迭代将不会移除已迭代的元素。

      更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 类常量现在是有类型的。 |
