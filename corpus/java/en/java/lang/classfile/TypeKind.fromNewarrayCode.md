---
id: "java-en-function-typekind-fromnewarraycode"
language: "java"
lang: "en"
category: "function"
name: "TypeKind.fromNewarrayCode"
signature: "public static TypeKind fromNewarrayCode(int newarrayCode)"
title: "TypeKind.fromNewarrayCode"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeKind.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeKind.fromNewarrayCode

```java
public static TypeKind fromNewarrayCode(int newarrayCode)
```

{@return the component type described by the array code used as an operand to `NEWARRAY
 newarray`}

**参数**

- **newarrayCode** — the operand of the `newarray` instruction

**异常**

- **IllegalArgumentException** — if the code is invalid

**参见**

- NewPrimitiveArrayInstruction
- #newarrayCode() newarrayCode()
