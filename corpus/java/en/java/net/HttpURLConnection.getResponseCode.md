---
id: "java-en-function-httpurlconnection-getresponsecode"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.getResponseCode"
signature: "public int getResponseCode() throws IOException"
title: "HttpURLConnection.getResponseCode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.getResponseCode

```java
public int getResponseCode() throws IOException
```

Gets the status code from an HTTP response message.
 For example, in the case of the following status lines:
 
```

 HTTP/1.0 200 OK
 HTTP/1.0 401 Unauthorized
 
```

 It will return 200 and 401 respectively.
 Returns -1 if no code can be discerned
 from the response (i.e., the response is not valid HTTP).

**返回**

- the HTTP Status-Code, or -1

**异常**

- **IOException** — if an error occurred connecting to the server.
