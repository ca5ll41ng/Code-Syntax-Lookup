---
id: "java-en-function-filelock-channel"
language: "java"
lang: "en"
category: "function"
name: "FileLock.channel"
signature: "public final FileChannel channel()"
title: "FileLock.channel"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileLock.channel

```java
public final FileChannel channel()
```

Returns the file channel upon whose file this lock was acquired.

 

 This method has been superseded by the `acquiredBy acquiredBy`
 method.

**返回**

- The file channel, or `null` if the file lock was not acquired by a file channel.
