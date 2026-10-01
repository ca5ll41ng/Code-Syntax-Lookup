---
id: "java-en-function-pathstatus-getcanonicalfile"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.getCanonicalFile"
signature: "public File getCanonicalFile() throws IOException"
title: "PathStatus.getCanonicalFile"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.getCanonicalFile

```java
public File getCanonicalFile() throws IOException
```

Returns the canonical form of this abstract pathname.  Equivalent to
 new&nbsp;File(this.`getCanonicalPath`).

**返回**

- The canonical pathname string locating the same file or directory as this abstract pathname

**异常**

- **IOException** — If an I/O error occurs, which is possible because the construction of the canonical pathname may require filesystem queries

**参见**

- Path#toRealPath

> *Since 1.2*
