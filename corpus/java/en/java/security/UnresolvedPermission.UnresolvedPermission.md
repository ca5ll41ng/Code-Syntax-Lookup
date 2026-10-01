---
id: "java-en-function-unresolvedpermission-unresolvedpermission"
language: "java"
lang: "en"
category: "function"
name: "UnresolvedPermission.UnresolvedPermission"
signature: "public UnresolvedPermission(String type, String name, String actions, java.security.cert.Certificate[] certs)"
title: "UnresolvedPermission.UnresolvedPermission"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/UnresolvedPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnresolvedPermission.UnresolvedPermission

```java
public UnresolvedPermission(String type, String name, String actions, java.security.cert.Certificate[] certs)
```

Creates a new `UnresolvedPermission` containing the permission
 information needed later to actually create a Permission of the
 specified class, when the permission is resolved.

**参数**

- **type** — the class name of the Permission class that will be created when this unresolved permission is resolved.
- **name** — the name of the permission.
- **actions** — the actions of the permission.
- **certs** — the certificates the permission's class was signed with. This is a list of certificate chains, where each chain is composed of a signer certificate and optionally its supporting certificate chain. Each chain is ordered bottom-to-top (i.e., with the signer certificate first and the (root) certificate authority last). The signer certificates are copied from the array. Subsequent changes to the array will not affect this UnresolvedPermission.
