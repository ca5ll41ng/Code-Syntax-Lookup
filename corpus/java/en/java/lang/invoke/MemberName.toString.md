---
id: "java-en-function-membername-tostring"
language: "java"
lang: "en"
category: "function"
name: "MemberName.toString"
signature: "public String toString()"
title: "MemberName.toString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MemberName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemberName.toString

```java
public String toString()
```

Produce a string form of this member name.
  For types, it is simply the type's own string (as reported by `toString`).
  For fields, it is `"DeclaringClass.name/type"`.
  For methods and constructors, it is `"DeclaringClass.name(ptype...)rtype"`.
  If the declaring class is null, the prefix `"DeclaringClass."` is omitted.
  If the member is unresolved, a prefix `"*."` is prepended.
