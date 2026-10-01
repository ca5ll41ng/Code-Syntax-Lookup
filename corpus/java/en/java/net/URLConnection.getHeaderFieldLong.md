---
id: "java-en-function-urlconnection-getheaderfieldlong"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getHeaderFieldLong"
signature: "public long getHeaderFieldLong(String name, long defaultValue)"
title: "URLConnection.getHeaderFieldLong"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getHeaderFieldLong

```java
public long getHeaderFieldLong(String name, long defaultValue)
```

Returns the value of the named field parsed as a number.
 

 This form of `getHeaderField` exists because some
 connection types (e.g., `http-ng`) have pre-parsed
 headers. Classes for that connection type can override this method
 and short-circuit the parsing.

**参数**

- **name** — the name of the header field.
- **defaultValue** — the default value.

**返回**

- the value of the named field, parsed as a long. The `defaultValue` value is returned if the field is missing or malformed.

> *Since 1.7*
