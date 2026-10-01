---
id: "java-en-function-filestore-supportsfileattributeview"
language: "java"
lang: "en"
category: "function"
name: "FileStore.supportsFileAttributeView"
signature: "public abstract boolean supportsFileAttributeView(Class<? extends FileAttributeView> type)"
title: "FileStore.supportsFileAttributeView"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore.supportsFileAttributeView

```java
public abstract boolean supportsFileAttributeView(Class<? extends FileAttributeView> type)
```

Tells whether or not this file store supports the file attributes
 identified by the given file attribute view.

 

 Invoking this method to test if the file store supports `BasicFileAttributeView` will always return `true`. In the case of
 the default provider, this method cannot guarantee to give the correct
 result when the file store is not a local storage device. The reasons for
 this are implementation specific and therefore unspecified.

**参数**

- **type** — the file attribute view type

**返回**

- `true` if, and only if, the file attribute view is supported
