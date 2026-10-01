---
id: "java-en-function-ecfieldf2m-equals"
language: "java"
lang: "en"
category: "function"
name: "ECFieldF2m.equals"
signature: "public boolean equals(Object obj)"
title: "ECFieldF2m.equals"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/ECFieldF2m.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ECFieldF2m.equals

```java
public boolean equals(Object obj)
```

Compares this finite field for equality with the
 specified object.

**参数**

- **obj** — the object to be compared.

**返回**

- true if `obj` is an instance of ECFieldF2m and both `m` and the reduction polynomial match, false otherwise.
