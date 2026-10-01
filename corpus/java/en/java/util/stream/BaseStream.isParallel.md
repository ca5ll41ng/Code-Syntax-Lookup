---
id: "java-en-function-basestream-isparallel"
language: "java"
lang: "en"
category: "function"
name: "BaseStream.isParallel"
signature: "boolean isParallel()"
title: "BaseStream.isParallel"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/BaseStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BaseStream.isParallel

```java
boolean isParallel()
```

Returns whether this stream, if a terminal operation were to be executed,
 would execute in parallel.  Calling this method after invoking an
 terminal stream operation method may yield unpredictable results.

**返回**

- `true` if this stream would execute in parallel if executed
