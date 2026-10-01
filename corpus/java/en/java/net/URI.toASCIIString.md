---
id: "java-en-function-uri-toasciistring"
language: "java"
lang: "en"
category: "function"
name: "URI.toASCIIString"
signature: "public String toASCIIString()"
title: "URI.toASCIIString"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.toASCIIString

```java
public String toASCIIString()
```

Returns the content of this URI as a US-ASCII string.

 

 If this URI does not contain any characters in the other
 category then an invocation of this method will return the same value as
 an invocation of the `toString() toString` method.  Otherwise
 this method works as if by invoking that method and then encoding the result.

**返回**

- The string form of this URI, encoded as needed so that it only contains characters in the US-ASCII charset
