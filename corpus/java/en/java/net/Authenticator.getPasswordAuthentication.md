---
id: "java-en-function-authenticator-getpasswordauthentication"
language: "java"
lang: "en"
category: "function"
name: "Authenticator.getPasswordAuthentication"
signature: "protected PasswordAuthentication getPasswordAuthentication()"
title: "Authenticator.getPasswordAuthentication"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Authenticator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Authenticator.getPasswordAuthentication

```java
protected PasswordAuthentication getPasswordAuthentication()
```

Called when password authorization is needed.  Subclasses should
 override the default implementation, which returns null.

**返回**

- The PasswordAuthentication collected from the user, or null if none is provided.
