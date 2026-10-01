---
id: "java-en-function-httpurlconnection-setrequestmethod"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.setRequestMethod"
signature: "public void setRequestMethod(String method) throws ProtocolException"
title: "HttpURLConnection.setRequestMethod"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.setRequestMethod

```java
public void setRequestMethod(String method) throws ProtocolException
```

Set the method for the URL request, one of:
 
  
- GET
  
- POST
  
- HEAD
  
- OPTIONS
  
- PUT
  
- DELETE
  
- TRACE
 
 are legal, subject to protocol restrictions.  The default
 method is GET.

**参数**

- **method** — the HTTP method

**异常**

- **ProtocolException** — if the method cannot be reset or if the requested method isn't valid for HTTP.

**参见**

- #getRequestMethod()
