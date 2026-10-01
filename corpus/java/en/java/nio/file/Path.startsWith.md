---
id: "java-en-function-path-startswith"
language: "java"
lang: "en"
category: "function"
name: "Path.startsWith"
signature: "boolean startsWith(Path other)"
title: "Path.startsWith"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.startsWith

```java
boolean startsWith(Path other)
```

Tests if this path starts with the given path.

 

 This path starts with the given path if this path's root
 component starts with the root component of the given path,
 and this path starts with the same name elements as the given path.
 If the given path has more name elements than this path then `false`
 is returned.

 

 Whether or not the root component of this path starts with the root
 component of the given path is file system specific. If this path does
 not have a root component and the given path has a root component then
 this path does not start with the given path.

 

 If the given path is associated with a different `FileSystem`
 to this path then `false` is returned.

**参数**

- **other** — the given path

**返回**

- `true` if this path starts with the given path; otherwise `false`
