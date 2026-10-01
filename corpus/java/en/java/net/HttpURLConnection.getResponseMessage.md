---
id: "java-en-function-httpurlconnection-getresponsemessage"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.getResponseMessage"
signature: "public String getResponseMessage() throws IOException"
title: "HttpURLConnection.getResponseMessage"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.getResponseMessage

```java
public String getResponseMessage() throws IOException
```

Gets the HTTP response message, if any, returned along with the
 response code from a server.  From responses like:
 
```

 HTTP/1.0 200 OK
 HTTP/1.0 404 Not Found
 
```

 Extracts the Strings "OK" and "Not Found" respectively.
 Returns null if none could be discerned from the responses
 (the result was not valid HTTP).

**返回**

- the HTTP response message, or `null`

**异常**

- **IOException** — if an error occurred connecting to the server.
