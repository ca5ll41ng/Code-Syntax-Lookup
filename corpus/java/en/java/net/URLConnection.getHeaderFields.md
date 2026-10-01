---
id: "java-en-function-urlconnection-getheaderfields"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getHeaderFields"
signature: "public Map<String,List<String>> getHeaderFields()"
title: "URLConnection.getHeaderFields"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getHeaderFields

```java
public Map<String,List<String>> getHeaderFields()
```

Returns an unmodifiable Map of the header fields.
 The Map keys are Strings that represent the
 response-header field names. Each Map value is an
 unmodifiable List of Strings that represents
 the corresponding field values.

 This method is overridden by the subclasses of `URLConnection`.

 In the implementation of these methods, if a given key has multiple
 corresponding values, they must be returned in the order they were added,
 preserving the insertion-order.

**返回**

- a Map of header fields

> *Since 1.4*
