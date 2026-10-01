---
id: "java-en-function-userprincipallookupservice-lookupprincipalbyname"
language: "java"
lang: "en"
category: "function"
name: "UserPrincipalLookupService.lookupPrincipalByName"
signature: "public abstract UserPrincipal lookupPrincipalByName(String name) throws IOException"
title: "UserPrincipalLookupService.lookupPrincipalByName"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/UserPrincipalLookupService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UserPrincipalLookupService.lookupPrincipalByName

```java
public abstract UserPrincipal lookupPrincipalByName(String name) throws IOException
```

Lookup a user principal by name.

**参数**

- **name** — the string representation of the user principal to lookup

**返回**

- a user principal

**异常**

- **UserPrincipalNotFoundException** — the principal does not exist
- **IOException** — if an I/O error occurs
