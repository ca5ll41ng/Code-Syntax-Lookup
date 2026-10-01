---
id: "java-en-function-urlconnection-guesscontenttypefromname"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.guessContentTypeFromName"
signature: "public static String guessContentTypeFromName(String fname)"
title: "URLConnection.guessContentTypeFromName"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.guessContentTypeFromName

```java
public static String guessContentTypeFromName(String fname)
```

Tries to determine the content type of an object, based
 on the specified "file" component of a URL.
 This is a convenience method that can be used by
 subclasses that override the `getContentType` method.

**参数**

- **fname** — a filename.

**返回**

- a guess as to what the content type of the object is, based upon its file name.

**参见**

- java.net.URLConnection#getContentType()
