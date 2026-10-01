---
id: "java-en-function-path-endswith"
language: "java"
lang: "en"
category: "function"
name: "Path.endsWith"
signature: "boolean endsWith(Path other)"
title: "Path.endsWith"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.endsWith

```java
boolean endsWith(Path other)
```

Tests if this path ends with the given path.

 

 If the given path has N elements, and no root component,
 and this path has N or more elements, then this path ends with
 the given path if the last N elements of each path, starting at
 the element farthest from the root, are equal.

 

 If the given path has a root component then this path ends with the
 given path if the root component of this path ends with the root
 component of the given path, and the corresponding elements of both paths
 are equal. Whether or not the root component of this path ends with the
 root component of the given path is file system specific. If this path
 does not have a root component and the given path has a root component
 then this path does not end with the given path.

 

 If the given path is associated with a different `FileSystem`
 to this path then `false` is returned.

**参数**

- **other** — the given path

**返回**

- `true` if this path ends with the given path; otherwise `false`
