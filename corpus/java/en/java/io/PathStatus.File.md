---
id: "java-en-function-pathstatus-file"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.File"
signature: "public File(String pathname)"
title: "PathStatus.File"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.File

```java
public File(String pathname)
```

Creates a new `File` instance by converting the given
 pathname string into an abstract pathname.  If the given string is
 the empty string, then the result is the empty abstract pathname.

**参数**

- **pathname** — A pathname string

**异常**

- **NullPointerException** — If the `pathname` argument is `null`
