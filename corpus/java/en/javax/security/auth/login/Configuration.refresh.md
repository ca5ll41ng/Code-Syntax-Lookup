---
id: "java-en-function-configuration-refresh"
language: "java"
lang: "en"
category: "function"
name: "Configuration.refresh"
signature: "public void refresh()"
title: "Configuration.refresh"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.refresh

```java
public void refresh()
```

Refresh and reload the Configuration.

 

 This method causes this Configuration object to refresh/reload its
 contents in an implementation-dependent manner.
 For example, if this Configuration object stores its entries in a file,
 calling `refresh` may cause the file to be re-read.

 

 The default implementation of this method does nothing.
 This method should be overridden if a refresh operation is supported
 by the implementation.
