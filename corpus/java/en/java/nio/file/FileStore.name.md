---
id: "java-en-function-filestore-name"
language: "java"
lang: "en"
category: "function"
name: "FileStore.name"
signature: "public abstract String name()"
title: "FileStore.name"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore.name

```java
public abstract String name()
```

Returns the name of this file store. The format of the name is highly
 implementation specific. It will typically be the name of the storage
 pool or volume.

 

 The string returned by this method may differ from the string
 returned by the `toString() toString` method.

**返回**

- the name of this file store
