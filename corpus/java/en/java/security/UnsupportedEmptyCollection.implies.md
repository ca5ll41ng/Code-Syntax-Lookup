---
id: "java-en-function-unsupportedemptycollection-implies"
language: "java"
lang: "en"
category: "function"
name: "UnsupportedEmptyCollection.implies"
signature: "@Override public boolean implies(Permission permission)"
title: "UnsupportedEmptyCollection.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnsupportedEmptyCollection.implies

```java
@Override public boolean implies(Permission permission)
```

Checks to see if the specified permission is implied by the
 collection of Permission objects held in this PermissionCollection.

**参数**

- **permission** — the Permission object to compare.

**返回**

- `true` if "permission" is implied by the permissions in the collection, `false` if not.
