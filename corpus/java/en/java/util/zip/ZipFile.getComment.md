---
id: "java-en-function-zipfile-getcomment"
language: "java"
lang: "en"
category: "function"
name: "ZipFile.getComment"
signature: "public String getComment()"
title: "ZipFile.getComment"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipFile.getComment

```java
public String getComment()
```

Returns the ZIP file comment. If a comment does not exist or an error is
 encountered decoding the comment using the charset specified
 when opening the ZIP file, then `null` is returned.

**返回**

- the comment string for the ZIP file, or null if none

**异常**

- **IllegalStateException** — if the ZIP file has been closed

> *Since 1.7*
