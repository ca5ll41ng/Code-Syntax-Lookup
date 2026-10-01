---
id: "java-en-function-exemptionmechanism-init"
language: "java"
lang: "en"
category: "function"
name: "ExemptionMechanism.init"
signature: "public final void init(Key key) throws InvalidKeyException, ExemptionMechanismException"
title: "ExemptionMechanism.init"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/ExemptionMechanism.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExemptionMechanism.init

```java
public final void init(Key key) throws InvalidKeyException, ExemptionMechanismException
```

Initializes this exemption mechanism with a key.

 

If this exemption mechanism requires any algorithm parameters
 that cannot be derived from the given `key`, the
 underlying exemption mechanism implementation is supposed to
 generate the required parameters itself (using provider-specific
 default values); in the case that algorithm parameters must be
 specified by the caller, an `InvalidKeyException` is raised.

**参数**

- **key** — the key for this exemption mechanism

**异常**

- **InvalidKeyException** — if the given key is inappropriate for this exemption mechanism.
- **ExemptionMechanismException** — if problem(s) encountered in the process of initializing.
