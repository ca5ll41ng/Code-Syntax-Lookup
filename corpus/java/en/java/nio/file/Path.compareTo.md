---
id: "java-en-function-path-compareto"
language: "java"
lang: "en"
category: "function"
name: "Path.compareTo"
signature: "int compareTo(Path other)"
title: "Path.compareTo"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.compareTo

```java
int compareTo(Path other)
```

Compares two abstract paths lexicographically. The ordering defined by
 this method is provider specific, and in the case of the default
 provider, platform specific. This method does not access the file system
 and neither file is required to exist.

 

 This method may not be used to compare paths that are associated
 with different file system providers.

**参数**

- **other** — the path compared to this path.

**返回**

- zero if the argument is `equals equal` to this path, a value less than zero if this path is lexicographically less than the argument, or a value greater than zero if this path is lexicographically greater than the argument

**异常**

- **ClassCastException** — if the paths are associated with different providers
