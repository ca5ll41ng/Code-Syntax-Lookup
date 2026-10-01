---
id: "java-en-function-capability-supportspredictionresistance"
language: "java"
lang: "en"
category: "function"
name: "Capability.supportsPredictionResistance"
signature: "public boolean supportsPredictionResistance()"
title: "Capability.supportsPredictionResistance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Capability.supportsPredictionResistance

```java
public boolean supportsPredictionResistance()
```

Returns whether this capability supports prediction resistance.

**返回**

- `true` for `PR_AND_RESEED`, and `false` for `RESEED_ONLY` and `NONE`
