---
id: "java-en-function-pathstatus-setreadonly"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.setReadOnly"
signature: "public boolean setReadOnly()"
title: "PathStatus.setReadOnly"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.setReadOnly

```java
public boolean setReadOnly()
```

Marks the file or directory located by this abstract pathname so that
 only read operations are allowed. After invoking this method the file
 or directory will not change until it is either deleted or marked
 to allow write access. On some platforms it may be possible to start the
 Java virtual machine with special privileges that allow it to modify
 files that are marked read-only. Whether or not a read-only file or
 directory may be deleted depends upon the underlying system.

**返回**

- `true` if and only if the operation succeeded; `false` otherwise

> *Since 1.2*
