---
id: "java-en-function-url-getfile"
language: "java"
lang: "en"
category: "function"
name: "URL.getFile"
signature: "public String getFile()"
title: "URL.getFile"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URL.getFile

```java
public String getFile()
```

Gets the file name of this `URL`.
 The returned file portion will be
 the same as getPath(), plus the concatenation of
 the value of getQuery(), if any. If there is
 no query portion, this method and getPath() will
 return identical results.

**返回**

- the file name of this `URL`, or an empty string if one does not exist
