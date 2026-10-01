---
id: "java-en-function-urlconnection-getheaderfield"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getHeaderField"
signature: "public String getHeaderField(String name)"
title: "URLConnection.getHeaderField"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getHeaderField

```java
public String getHeaderField(String name)
```

Returns the value of the named header field.
 

 If called on a connection that sets the same header multiple times
 with possibly different values, only the last value is returned.

**参数**

- **name** — the name of a header field.

**返回**

- the value of the named header field, or `null` if there is no such field in the header.
