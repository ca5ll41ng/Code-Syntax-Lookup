---
id: "java-en-function-httpurlconnection-getheaderfieldkey"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.getHeaderFieldKey"
signature: "public String getHeaderFieldKey (int n)"
title: "HttpURLConnection.getHeaderFieldKey"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.getHeaderFieldKey

```java
public String getHeaderFieldKey (int n)
```

Returns the key for the `n`th header field.
 Some implementations may treat the `0`th
 header field as special, i.e. as the status line returned by the HTTP
 server. In this case, `getHeaderField` returns the status
 line, but `getHeaderFieldKey(0)` returns null.

**参数**

- **n** — an index, where `n >=0`.

**返回**

- the key for the `n`th header field, or `null` if the key does not exist.
