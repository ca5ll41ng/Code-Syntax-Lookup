---
id: "java-en-function-unsupportedemptycollection-add"
language: "java"
lang: "en"
category: "function"
name: "UnsupportedEmptyCollection.add"
signature: "@Override public void add(Permission permission)"
title: "UnsupportedEmptyCollection.add"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnsupportedEmptyCollection.add

```java
@Override public void add(Permission permission)
```

Adds a permission object to the current collection of permission
 objects.

**参数**

- **permission** — the Permission object to add.

**异常**

- **SecurityException** — if this PermissionCollection object has been marked readonly
