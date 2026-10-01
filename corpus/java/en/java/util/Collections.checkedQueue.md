---
id: "java-en-function-collections-checkedqueue"
language: "java"
lang: "en"
category: "function"
name: "Collections.checkedQueue"
signature: "public static <E> Queue<E> checkedQueue(Queue<E> queue, Class<E> type)"
title: "Collections.checkedQueue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.checkedQueue

```java
public static <E> Queue<E> checkedQueue(Queue<E> queue, Class<E> type)
```

Returns a dynamically typesafe view of the specified queue.
 Any attempt to insert an element of the wrong type will result in
 an immediate `ClassCastException`.  Assuming a queue contains
 no incorrectly typed elements prior to the time a dynamically typesafe
 view is generated, and that all subsequent access to the queue
 takes place through the view, it is guaranteed that the
 queue cannot contain an incorrectly typed element.

 

A discussion of the use of dynamically typesafe views may be
 found in the documentation for the `checkedCollection
 checkedCollection` method.

 

The returned queue will be serializable if the specified queue
 is serializable.

 

Since `null` is considered to be a value of any reference
 type, the returned queue permits insertion of `null` elements
 whenever the backing queue does.

**参数**

- **the** — class of the objects in the queue
- **queue** — the queue for which a dynamically typesafe view is to be returned
- **type** — the type of element that `queue` is permitted to hold

**返回**

- a dynamically typesafe view of the specified queue

> *Since 1.8*
