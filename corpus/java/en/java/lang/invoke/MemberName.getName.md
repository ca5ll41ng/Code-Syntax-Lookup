---
id: "java-en-function-membername-getname"
language: "java"
lang: "en"
category: "function"
name: "MemberName.getName"
signature: "public String getName()"
title: "MemberName.getName"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MemberName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemberName.getName

```java
public String getName()
```

Return the simple name of this member.
  For a type, it is the same as `getSimpleName`.
  For a method or field, it is the simple name of the member.
  For a constructor, it is always `""`.
