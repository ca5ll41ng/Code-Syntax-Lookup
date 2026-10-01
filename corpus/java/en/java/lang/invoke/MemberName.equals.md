---
id: "java-en-function-membername-equals"
language: "java"
lang: "en"
category: "function"
name: "MemberName.equals"
signature: "public boolean equals(MemberName that)"
title: "MemberName.equals"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MemberName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemberName.equals

```java
public boolean equals(MemberName that)
```

Decide if two member names have exactly the same symbolic content.
  Does not take into account any actual class members, so even if
  two member names resolve to the same actual member, they may
  be distinct references.
