---
id: "java-en-function-urlconnection-guesscontenttypefromstream"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.guessContentTypeFromStream"
signature: "public static String guessContentTypeFromStream(InputStream is) throws IOException"
title: "URLConnection.guessContentTypeFromStream"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.guessContentTypeFromStream

```java
public static String guessContentTypeFromStream(InputStream is) throws IOException
```

Tries to determine the type of an input stream based on the
 characters at the beginning of the input stream. This method can
 be used by subclasses that override the
 `getContentType` method.
 

 Ideally, this routine would not be needed. But many
 `http` servers return the incorrect content type; in
 addition, there are many nonstandard extensions. Direct inspection
 of the bytes to determine the content type is often more accurate
 than believing the content type claimed by the `http` server.

**参数**

- **is** — an input stream that supports marks.

**返回**

- a guess at the content type, or `null` if none can be determined.

**异常**

- **IOException** — if an I/O error occurs while reading the input stream.

**参见**

- java.io.InputStream#mark(int)
- java.io.InputStream#markSupported()
- java.net.URLConnection#getContentType()
