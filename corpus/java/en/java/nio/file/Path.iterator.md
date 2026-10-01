---
id: "java-en-function-path-iterator"
language: "java"
lang: "en"
category: "function"
name: "Path.iterator"
signature: "default Iterator<Path> iterator()"
title: "Path.iterator"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.iterator

```java
default Iterator<Path> iterator()
```

Returns an iterator over the name elements of this path.

 

 The first element returned by the iterator represents the name
 element that is closest to the root in the directory hierarchy, the
 second element is the next closest, and so on. The last element returned
 is the name of the file or directory denoted by this path. The `getRoot root` component, if present, is not returned by the iterator.

 The default implementation returns an `Iterator` which, for
 this path, traverses the `Path`s returned by
 `getName(index)`, where `index` ranges from zero to
 `getNameCount() - 1`, inclusive.

**返回**

- an iterator over the name elements of this path
