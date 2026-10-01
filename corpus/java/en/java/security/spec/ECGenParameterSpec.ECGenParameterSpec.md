---
id: "java-en-function-ecgenparameterspec-ecgenparameterspec"
language: "java"
lang: "en"
category: "function"
name: "ECGenParameterSpec.ECGenParameterSpec"
signature: "public ECGenParameterSpec(String stdName)"
title: "ECGenParameterSpec.ECGenParameterSpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/ECGenParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ECGenParameterSpec.ECGenParameterSpec

```java
public ECGenParameterSpec(String stdName)
```

Creates a parameter specification for EC parameter
 generation using a standard (or predefined) name
 `stdName` in order to generate the corresponding
 (precomputed) elliptic curve domain parameters. For the
 list of supported names, please consult the documentation
 of the provider whose implementation will be used.

**参数**

- **stdName** — the standard name of the to-be-generated EC domain parameters. See the ECGenParameterSpec section in the  Java Security Standard Algorithm Names Specification for information about standard names.

**异常**

- **NullPointerException** — if `stdName` is null.
