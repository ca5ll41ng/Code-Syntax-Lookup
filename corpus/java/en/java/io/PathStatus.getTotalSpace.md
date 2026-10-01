---
id: "java-en-function-pathstatus-gettotalspace"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.getTotalSpace"
signature: "public long getTotalSpace()"
title: "PathStatus.getTotalSpace"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.getTotalSpace

```java
public long getTotalSpace()
```

Returns the size of the partition named by this
 abstract pathname. If the total number of bytes in the partition is
 greater than `MAX_VALUE`, then `Long.MAX_VALUE` will be
 returned.

**返回**

- The size, in bytes, of the partition or `0L` if this abstract pathname does not name a partition or if the size cannot be obtained

**参见**

- FileStore#getTotalSpace

> *Since 1.6*
