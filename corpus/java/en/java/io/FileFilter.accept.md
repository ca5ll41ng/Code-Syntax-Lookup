---
id: "java-en-function-filefilter-accept"
language: "java"
lang: "en"
category: "function"
name: "FileFilter.accept"
signature: "boolean accept(File pathname)"
title: "FileFilter.accept"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileFilter.accept

```java
boolean accept(File pathname)
```

Tests whether or not the specified abstract pathname should be
 included in a pathname list.

**参数**

- **pathname** — The abstract pathname to be tested

**返回**

- `true` if and only if `pathname` should be included
