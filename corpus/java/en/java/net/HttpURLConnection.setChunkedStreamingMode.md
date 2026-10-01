---
id: "java-en-function-httpurlconnection-setchunkedstreamingmode"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.setChunkedStreamingMode"
signature: "public void setChunkedStreamingMode (int chunklen)"
title: "HttpURLConnection.setChunkedStreamingMode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.setChunkedStreamingMode

```java
public void setChunkedStreamingMode (int chunklen)
```

This method is used to enable streaming of a HTTP request body
 without internal buffering, when the content length is **not**
 known in advance. In this mode, chunked transfer encoding
 is used to send the request body. Note, not all HTTP servers
 support this mode.
 

 When output streaming is enabled, authentication
 and redirection cannot be handled automatically.
 A HttpRetryException will be thrown when reading
 the response if authentication or redirection are required.
 This exception can be queried for the details of the error.
 

 This method must be called before the URLConnection is connected.

**参数**

- **chunklen** — The number of bytes to be written in each chunk, including a chunk size header as a hexadecimal string (minimum of 1 byte), two CRLF's (4 bytes) and a minimum payload length of 1 byte. If chunklen is less than or equal to 5, a higher default value will be used.

**异常**

- **IllegalStateException** — if URLConnection is already connected or if a different streaming mode is already enabled.

**参见**

- #setFixedLengthStreamingMode(int)

> *Since 1.5*
