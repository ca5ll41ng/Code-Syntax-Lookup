---
id: "java-en-function-identity-setpublickey"
language: "java"
lang: "en"
category: "function"
name: "Identity.setPublicKey"
signature: "public void setPublicKey(PublicKey key) throws KeyManagementException"
title: "Identity.setPublicKey"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Identity.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Identity.setPublicKey

```java
public void setPublicKey(PublicKey key) throws KeyManagementException
```

Sets this identity's public key. The old key and all of this
 identity's certificates are removed by this operation.

**参数**

- **key** — the public key for this `Identity`.

**异常**

- **KeyManagementException** — if another identity in the identity's scope has the same public key, or if another exception occurs.

**参见**

- #getPublicKey
