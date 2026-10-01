---
id: "java-en-function-urlconnection-getfilenamemap"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getFileNameMap"
signature: "public static FileNameMap getFileNameMap()"
title: "URLConnection.getFileNameMap"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getFileNameMap

```java
public static FileNameMap getFileNameMap()
```

Loads filename map (a mimetable) from a data file. It will
 first try to load the user-specific table, defined
 by &quot;content.types.user.table&quot; property. If that fails,
 it tries to load the default built-in table.

**返回**

- the FileNameMap

**参见**

- #setFileNameMap(java.net.FileNameMap)

> *Since 1.2*
