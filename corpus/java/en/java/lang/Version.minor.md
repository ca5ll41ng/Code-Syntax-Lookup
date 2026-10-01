---
id: "java-en-function-version-minor"
language: "java"
lang: "en"
category: "function"
name: "Version.minor"
signature: "public int minor()"
title: "Version.minor"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Version.minor

```java
public int minor()
```

Returns the value of the minor element of the version number, or
 zero if it is absent.

**返回**

- The value of the interim element, or zero

> **⚠ Deprecated** — As of Java&nbsp;SE 10, the second element of a version number is not the minor-release number but the interim-release counter, incremented for every interim release.  Use the `interim` method in preference to this method.  For compatibility, this method returns the value of the interim element, or zero if it is absent.
