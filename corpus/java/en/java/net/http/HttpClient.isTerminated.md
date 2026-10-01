---
id: "java-en-function-httpclient-isterminated"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.isTerminated"
signature: "public boolean isTerminated()"
title: "HttpClient.isTerminated"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.isTerminated

```java
public boolean isTerminated()
```

Returns `true` if all operations have completed following
 a shutdown.
 Operations are any tasks required to run a request previously
 submitted with `send` or `sendAsync` to completion.
 

 Note that `isTerminated` is never `true` unless
 either `shutdown` or `shutdownNow` was called first.

 The default implementation of this method does nothing and returns false.
 Subclasses should override this method to implement the proper behavior.

**返回**

- `true` if all tasks have completed following a shutdown

**参见**

- ##closing Implementation Note on closing the HttpClient

> *Since 21*
