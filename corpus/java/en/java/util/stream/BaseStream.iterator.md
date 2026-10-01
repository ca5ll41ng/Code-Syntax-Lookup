---
id: "java-en-function-basestream-iterator"
language: "java"
lang: "en"
category: "function"
name: "BaseStream.iterator"
signature: "Iterator<T> iterator()"
title: "BaseStream.iterator"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/BaseStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BaseStream.iterator

```java
Iterator<T> iterator()
```

Returns an iterator for the elements of this stream.

 

This is a terminal
 operation.

 This operation is provided as an "escape hatch" to enable
 arbitrary client-controlled pipeline traversals in the event that the
 existing operations are not sufficient to the task.

**返回**

- the element iterator for this stream
