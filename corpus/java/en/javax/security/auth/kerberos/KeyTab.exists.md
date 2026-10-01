---
id: "java-en-function-keytab-exists"
language: "java"
lang: "en"
category: "function"
name: "KeyTab.exists"
signature: "public boolean exists()"
title: "KeyTab.exists"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KeyTab.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyTab.exists

```java
public boolean exists()
```

Checks if the keytab file exists. Implementation of this method
 should make sure that the result matches the latest status of the
 keytab file.

**返回**

- true if the keytab file exists; false otherwise.
