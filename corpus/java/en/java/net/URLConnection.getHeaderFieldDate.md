---
id: "java-en-function-urlconnection-getheaderfielddate"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getHeaderFieldDate"
signature: "public long getHeaderFieldDate(String name, long defaultValue)"
title: "URLConnection.getHeaderFieldDate"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getHeaderFieldDate

```java
public long getHeaderFieldDate(String name, long defaultValue)
```

Returns the value of the named field parsed as date.
 The result is the number of milliseconds since January 1, 1970 GMT
 represented by the named field.
 

 This form of `getHeaderField` exists because some
 connection types (e.g., `http-ng`) have pre-parsed
 headers. Classes for that connection type can override this method
 and short-circuit the parsing.

**参数**

- **name** — the name of the header field.
- **defaultValue** — a default value.

**返回**

- the value of the field, parsed as a date. The value of the `defaultValue` argument is returned if the field is missing or malformed.
