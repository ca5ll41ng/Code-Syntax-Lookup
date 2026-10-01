---
id: "java-en-function-path-tostring"
language: "java"
lang: "en"
category: "function"
name: "Path.toString"
signature: "String toString()"
title: "Path.toString"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Path.toString

```java
String toString()
```

{@return the string representation of this path}

 

 If this path was created by converting a path string using the
 `getPath getPath` method then the path string returned
 by this method may differ from the original String used to create the path.

 

 The returned path string uses the default name `getSeparator separator` to separate names in the path.
