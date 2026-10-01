---
id: "java-en-function-directorystream-iterator"
language: "java"
lang: "en"
category: "function"
name: "DirectoryStream.iterator"
signature: "Iterator<T> iterator()"
title: "DirectoryStream.iterator"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/DirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirectoryStream.iterator

```java
Iterator<T> iterator()
```

Returns the iterator associated with this `DirectoryStream`.

**返回**

- the iterator associated with this `DirectoryStream`

**异常**

- **IllegalStateException** — if this directory stream is closed or the iterator has already been returned
