---
id: "java-en-function-httpurlconnection-getheaderfield"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.getHeaderField"
signature: "public String getHeaderField(int n)"
title: "HttpURLConnection.getHeaderField"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.getHeaderField

```java
public String getHeaderField(int n)
```

Returns the value for the `n`th header field.
 Some implementations may treat the `0`th
 header field as special, i.e. as the status line returned by the HTTP
 server.
 

 This method can be used in conjunction with the
 `getHeaderFieldKey getHeaderFieldKey` method to iterate through all
 the headers in the message.

**参数**

- **n** — an index, where `n>=0`.

**返回**

- the value of the `n`th header field, or `null` if the value does not exist.

**参见**

- java.net.HttpURLConnection#getHeaderFieldKey(int)
