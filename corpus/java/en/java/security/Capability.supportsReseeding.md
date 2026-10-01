---
id: "java-en-function-capability-supportsreseeding"
language: "java"
lang: "en"
category: "function"
name: "Capability.supportsReseeding"
signature: "public boolean supportsReseeding()"
title: "Capability.supportsReseeding"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Capability.supportsReseeding

```java
public boolean supportsReseeding()
```

Returns whether this capability supports reseeding.

**返回**

- `true` for `PR_AND_RESEED` and `RESEED_ONLY`, and `false` for `NONE`
