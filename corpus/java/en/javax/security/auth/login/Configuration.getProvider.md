---
id: "java-en-function-configuration-getprovider"
language: "java"
lang: "en"
category: "function"
name: "Configuration.getProvider"
signature: "public Provider getProvider()"
title: "Configuration.getProvider"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.getProvider

```java
public Provider getProvider()
```

Return the Provider of this Configuration.

 

 This Configuration instance will only have a Provider if it
 was obtained via a call to `Configuration.getInstance`.
 Otherwise, this method returns null.

**返回**

- the Provider of this Configuration, or null.

> *Since 1.6*
