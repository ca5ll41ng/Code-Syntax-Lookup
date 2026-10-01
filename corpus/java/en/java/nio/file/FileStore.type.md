---
id: "java-en-function-filestore-type"
language: "java"
lang: "en"
category: "function"
name: "FileStore.type"
signature: "public abstract String type()"
title: "FileStore.type"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore.type

```java
public abstract String type()
```

Returns the type of this file store. The format of the string
 returned by this method is highly implementation specific. It may
 indicate, for example, the format used or if the file store is local
 or remote.

**返回**

- a string representing the type of this file store
