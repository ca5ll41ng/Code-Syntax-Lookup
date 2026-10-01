---
id: "java-en-function-member-getmodifiers"
language: "java"
lang: "en"
category: "function"
name: "Member.getModifiers"
signature: "public int getModifiers()"
title: "Member.getModifiers"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Member.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Member.getModifiers

```java
public int getModifiers()
```

Returns the Java language modifiers for the member or
 constructor represented by this Member, as an integer.  The
 Modifier class should be used to decode the modifiers in
 the integer.

**返回**

- the Java language modifiers for the underlying member

**参见**

- Modifier
- #accessFlags()
