---
id: "java-en-function-version-security"
language: "java"
lang: "en"
category: "function"
name: "Version.security"
signature: "public int security()"
title: "Version.security"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Version.security

```java
public int security()
```

Returns the value of the security element of the version number, or
 zero if it is absent.

**返回**

- The value of the update element, or zero

> **⚠ Deprecated** — As of Java&nbsp;SE 10, the third element of a version number is not the security level but the update-release counter, incremented for every update release.  Use the `update` method in preference to this method.  For compatibility, this method returns the value of the update element, or zero if it is absent.
