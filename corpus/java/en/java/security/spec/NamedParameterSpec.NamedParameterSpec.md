---
id: "java-en-function-namedparameterspec-namedparameterspec"
language: "java"
lang: "en"
category: "function"
name: "NamedParameterSpec.NamedParameterSpec"
signature: "public NamedParameterSpec(String stdName)"
title: "NamedParameterSpec.NamedParameterSpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/NamedParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamedParameterSpec.NamedParameterSpec

```java
public NamedParameterSpec(String stdName)
```

Creates a parameter specification using a standard (or predefined)
 name `stdName`. For the
 list of supported names, please consult the documentation
 of the provider whose implementation will be used.

**参数**

- **stdName** — the standard name of the algorithm parameters. See the NamedParameterSpec section in the  Java Security Standard Algorithm Names Specification for information about standard names.

**异常**

- **NullPointerException** — if `stdName` is null.
