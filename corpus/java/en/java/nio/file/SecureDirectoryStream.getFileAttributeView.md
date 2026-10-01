---
id: "java-en-function-securedirectorystream-getfileattributeview"
language: "java"
lang: "en"
category: "function"
name: "SecureDirectoryStream.getFileAttributeView"
signature: "<V extends FileAttributeView> V getFileAttributeView(Class<V> type)"
title: "SecureDirectoryStream.getFileAttributeView"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SecureDirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureDirectoryStream.getFileAttributeView

```java
<V extends FileAttributeView> V getFileAttributeView(Class<V> type)
```

Returns a new file attribute view to access the file attributes of this
 directory.

 

 The resulting file attribute view can be used to read or update the
 attributes of this (open) directory. The `type` parameter specifies
 the type of the attribute view and the method returns an instance of that
 type if supported. Invoking this method to obtain a `BasicFileAttributeView` always returns an instance of that class that is
 bound to this open directory.

 

 The state of resulting file attribute view is intimately connected
 to this directory stream. Once the directory stream is `close closed`,
 then all methods to read or update attributes will throw `ClosedDirectoryStreamException ClosedDirectoryStreamException`.

**参数**

- **The** — `FileAttributeView` type
- **type** — the `Class` object corresponding to the file attribute view

**返回**

- a new file attribute view of the specified type bound to this directory stream, or `null` if the attribute view type is not available
