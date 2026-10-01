---
id: "java-en-function-authenticator-getrequestingurl"
language: "java"
lang: "en"
category: "function"
name: "Authenticator.getRequestingURL"
signature: "protected URL getRequestingURL ()"
title: "Authenticator.getRequestingURL"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Authenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Authenticator.getRequestingURL

```java
protected URL getRequestingURL ()
```

Returns the URL that resulted in this request for authentication.
 If the corresponding request does not specify a URL, this method returns null.

**返回**

- the requesting URL, or null if not available.

> *Since 1.5*
