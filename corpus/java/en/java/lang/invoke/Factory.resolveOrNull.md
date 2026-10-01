---
id: "java-en-function-factory-resolveornull"
language: "java"
lang: "en"
category: "function"
name: "Factory.resolveOrNull"
signature: "public MemberName resolveOrNull(byte refKind, MemberName m, Class<?> lookupClass, int allowedModes)"
title: "Factory.resolveOrNull"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MemberName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Factory.resolveOrNull

```java
public MemberName resolveOrNull(byte refKind, MemberName m, Class<?> lookupClass, int allowedModes)
```

Produce a resolved version of the given member.
  Super types are searched (for inherited members) if `searchSupers` is true.
  Access checking is performed on behalf of the given `lookupClass`.
  If lookup fails or access is not permitted, return null.
  Otherwise a fresh copy of the given member is returned, with modifier bits filled in.
