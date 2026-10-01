---
id: "java-en-function-filesystem-supportedfileattributeviews"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.supportedFileAttributeViews"
signature: "public abstract Set<String> supportedFileAttributeViews()"
title: "FileSystem.supportedFileAttributeViews"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.supportedFileAttributeViews

```java
public abstract Set<String> supportedFileAttributeViews()
```

Returns the set of the `name names` of the file
 attribute views supported by this `FileSystem`.

 

 The `BasicFileAttributeView` is required to be supported and
 therefore the set contains at least one element, "basic".

 

 The `supportsFileAttributeView(String)
 supportsFileAttributeView` method may be used to test if an
 underlying `FileStore` supports the file attributes identified by a
 file attribute view.

**返回**

- An unmodifiable set of the names of the supported file attribute views
