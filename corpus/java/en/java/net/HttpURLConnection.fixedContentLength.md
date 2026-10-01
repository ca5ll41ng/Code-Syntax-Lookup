---
id: "java-en-function-httpurlconnection-fixedcontentlength"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.fixedContentLength"
signature: "protected int fixedContentLength = -1"
title: "HttpURLConnection.fixedContentLength"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.fixedContentLength

```java
protected int fixedContentLength = -1
```

The fixed content-length when using fixed-length streaming mode.
 A value of `-1` means fixed-length streaming mode is disabled
 for output.

 

 **NOTE:** `fixedContentLengthLong` is recommended instead
 of this field, as it allows larger content lengths to be set.

> *Since 1.5*
