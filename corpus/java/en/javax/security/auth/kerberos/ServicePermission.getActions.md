---
id: "java-en-function-servicepermission-getactions"
language: "java"
lang: "en"
category: "function"
name: "ServicePermission.getActions"
signature: "public String getActions()"
title: "ServicePermission.getActions"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/ServicePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServicePermission.getActions

```java
public String getActions()
```

Returns the canonical string representation of the actions.
 Always returns present actions in the following order:
 initiate, accept.
