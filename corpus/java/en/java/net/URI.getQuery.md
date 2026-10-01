---
id: "java-en-function-uri-getquery"
language: "java"
lang: "en"
category: "function"
name: "URI.getQuery"
signature: "public String getQuery()"
title: "URI.getQuery"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getQuery

```java
public String getQuery()
```

Returns the decoded query component of this URI.

 

 The string returned by this method is equal to that returned by the
 `getRawQuery() getRawQuery` method except that all sequences of
 escaped octets are decoded.

**返回**

- The decoded query component of this URI, or `null` if the query is undefined
