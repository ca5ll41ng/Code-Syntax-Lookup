---
id: "java-en-function-pathstatus-getparent"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.getParent"
signature: "public String getParent()"
title: "PathStatus.getParent"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.getParent

```java
public String getParent()
```

Returns the pathname string of this abstract pathname's parent, or
 `null` if this pathname does not name a parent directory.

 

 The parent of an abstract pathname consists of the
 pathname's prefix, if any, and each name in the pathname's name
 sequence except for the last.  If the name sequence is empty then
 the pathname does not name a parent directory.

**返回**

- The pathname string of the parent directory named by this abstract pathname, or `null` if this pathname does not name a parent
