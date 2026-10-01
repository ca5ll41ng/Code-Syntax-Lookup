---
id: "java-en-function-httpurlconnection-setfixedlengthstreamingmode"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.setFixedLengthStreamingMode"
signature: "public void setFixedLengthStreamingMode (int contentLength)"
title: "HttpURLConnection.setFixedLengthStreamingMode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.setFixedLengthStreamingMode

```java
public void setFixedLengthStreamingMode (int contentLength)
```

This method is used to enable streaming of a HTTP request body
 without internal buffering, when the content length is known in
 advance.
 

 An exception will be thrown if the application
 attempts to write more data than the indicated
 content-length, or if the application closes the OutputStream
 before writing the indicated amount.
 

 When output streaming is enabled, authentication
 and redirection cannot be handled automatically.
 A HttpRetryException will be thrown when reading
 the response if authentication or redirection are required.
 This exception can be queried for the details of the error.
 

 This method must be called before the URLConnection is connected.
 

 **NOTE:** `setFixedLengthStreamingMode` is recommended
 instead of this method as it allows larger content lengths to be set.

**参数**

- **contentLength** — The number of bytes which will be written to the OutputStream.

**异常**

- **IllegalStateException** — if URLConnection is already connected or if a different streaming mode is already enabled.
- **IllegalArgumentException** — if a content length less than zero is specified.

**参见**

- #setChunkedStreamingMode(int)

> *Since 1.5*
