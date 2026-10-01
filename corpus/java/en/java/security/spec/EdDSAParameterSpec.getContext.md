---
id: "java-en-function-eddsaparameterspec-getcontext"
language: "java"
lang: "en"
category: "function"
name: "EdDSAParameterSpec.getContext"
signature: "public Optional<byte[]> getContext()"
title: "EdDSAParameterSpec.getContext"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EdDSAParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdDSAParameterSpec.getContext

```java
public Optional<byte[]> getContext()
```

Get the context that the signature will use.

**返回**

- `Optional` contains a copy of the context or empty if context is null.
