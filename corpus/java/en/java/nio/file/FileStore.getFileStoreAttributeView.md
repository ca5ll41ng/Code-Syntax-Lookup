---
id: "java-en-function-filestore-getfilestoreattributeview"
language: "java"
lang: "en"
category: "function"
name: "FileStore.getFileStoreAttributeView"
signature: "public abstract <V extends FileStoreAttributeView> V getFileStoreAttributeView(Class<V> type)"
title: "FileStore.getFileStoreAttributeView"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileStore.getFileStoreAttributeView

```java
public abstract <V extends FileStoreAttributeView> V getFileStoreAttributeView(Class<V> type)
```

Returns a `FileStoreAttributeView` of the given type.

 

 This method is intended to be used where the file store attribute
 view defines type-safe methods to read or update the file store attributes.
 The `type` parameter is the type of the attribute view required and
 the method returns an instance of that type if supported.

**参数**

- **The** — `FileStoreAttributeView` type
- **type** — the `Class` object corresponding to the attribute view

**返回**

- a file store attribute view of the specified type or `null` if the attribute view is not available
