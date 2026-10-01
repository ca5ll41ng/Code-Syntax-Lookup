---
id: "zh-php-guide-spl-datastructures"
language: "php"
lang: "zh"
category: "guide"
name: "spl.datastructures"
title: "Datastructures"
module: "spl"
source_url: "https://www.php.net/manual/zh/spl.datastructures.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Datastructures

SPL 提供了一套标准的数据结构。它们按底层实现进行分组, 通常定义了它们的一般应用领域。    双向链表  双链表 (DLL) 是一个链接到两个方向的节点列表。当底层结构是 DLL 时, 迭代器的操作、对两端的访问、节点的添加或删除都具有 O (1) 的开销。因此, 它为栈和队列提供了一个合适的实现。   
- `SplDoublyLinkedList` - `SplStack` - `SplQueue`

   堆  堆是遵循堆属性的树状结构: 每个节点都大于或等于其子级, 使用对堆全局的已实现的比较方法进行比较。   
- `SplHeap` - `SplMaxHeap` - `SplMinHeap`
- `SplPriorityQueue`

   数组  数组是以连续方式存储数据的结构, 可通过索引访问。   
> 请勿将此与 PHP 的本地 `array` 类型混淆。 PHP 数组实际上是有序哈希表。 然而, SPL 提供了 `ArrayObject` 类来将 PHP 数组包装成对象。

 
- `SplFixedArray`

   映射  映射是一个数据拥有键值对。PHP 数组可以被看作是从整数/字符串到值的映射。SPL 提供了从对象到数据的映射。此映射也可用作对象集。   
- `SplObjectStorage`
