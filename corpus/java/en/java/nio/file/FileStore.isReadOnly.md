---
id: "java-en-function-filestore-isreadonly"
language: "java"
lang: "en"
category: "function"
name: "FileStore.isReadOnly"
signature: "public abstract boolean isReadOnly()"
title: "FileStore.isReadOnly"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore.isReadOnly

```java
public abstract boolean isReadOnly()
```

Tells whether this file store is read-only. A file store is read-only if
 it does not support write operations or other changes to files. Any
 attempt to create a file, open an existing file for writing etc. causes
 an `IOException` to be thrown.

**返回**

- `true` if, and only if, this file store is read-only
