---
id: "java-en-function-configuration-getparameters"
language: "java"
lang: "en"
category: "function"
name: "Configuration.getParameters"
signature: "public Configuration.Parameters getParameters()"
title: "Configuration.getParameters"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.getParameters

```java
public Configuration.Parameters getParameters()
```

Return Configuration parameters.

 

 This Configuration instance will only have parameters if it
 was obtained via a call to `Configuration.getInstance`.
 Otherwise, this method returns null.

**返回**

- Configuration parameters, or null.

> *Since 1.6*
