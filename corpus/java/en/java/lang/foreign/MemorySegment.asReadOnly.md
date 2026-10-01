---
id: "java-en-function-memorysegment-asreadonly"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.asReadOnly"
signature: "MemorySegment asReadOnly()"
title: "MemorySegment.asReadOnly"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.asReadOnly

```java
MemorySegment asReadOnly()
```

{@return a read-only view of this segment}

 The resulting segment will be identical to this one, but attempts to overwrite the
 contents of the returned segment will cause runtime exceptions.

**参见**

- #isReadOnly()
