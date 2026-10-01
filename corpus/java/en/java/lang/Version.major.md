---
id: "java-en-function-version-major"
language: "java"
lang: "en"
category: "function"
name: "Version.major"
signature: "public int major()"
title: "Version.major"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Version.major

```java
public int major()
```

Returns the value of the major element of the version number.

**返回**

- The value of the feature element

> **⚠ Deprecated** — As of Java&nbsp;SE 10, the first element of a version number is not the major-release number but the feature-release counter, incremented for every time-based release.  Use the `feature` method in preference to this method.  For compatibility, this method returns the value of the feature element.
