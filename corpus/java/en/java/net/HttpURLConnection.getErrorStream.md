---
id: "java-en-function-httpurlconnection-geterrorstream"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.getErrorStream"
signature: "public InputStream getErrorStream()"
title: "HttpURLConnection.getErrorStream"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.getErrorStream

```java
public InputStream getErrorStream()
```

Returns the error stream if the connection failed
 but the server sent useful data nonetheless. The
 typical example is when an HTTP server responds
 with a 404, which will cause a FileNotFoundException
 to be thrown in connect, but the server sent an HTML
 help page with suggestions as to what to do.

 

This method will not cause a connection to be initiated.  If
 the connection was not connected, or if the server did not have
 an error while connecting or if the server had an error but
 no error data was sent, this method will return null. This is
 the default.

**返回**

- an error stream if any, null if there have been no errors, the connection is not connected or the server sent no useful data.
