---
id: "java-en-function-keyagreement-dophase"
language: "java"
lang: "en"
category: "function"
name: "KeyAgreement.doPhase"
signature: "public final Key doPhase(Key key, boolean lastPhase) throws InvalidKeyException, IllegalStateException"
title: "KeyAgreement.doPhase"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyAgreement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyAgreement.doPhase

```java
public final Key doPhase(Key key, boolean lastPhase) throws InvalidKeyException, IllegalStateException
```

Executes the next phase of this key agreement with the given
 key that was received from one of the other parties involved in this key
 agreement.

**参数**

- **key** — the key for this phase. For example, in the case of Diffie-Hellman between 2 parties, this would be the other party's Diffie-Hellman public key.
- **lastPhase** — flag which indicates whether this is the last phase of this key agreement.

**返回**

- the (intermediate) key resulting from this phase, or `null` if this phase does not yield a key

**异常**

- **InvalidKeyException** — if the given key is inappropriate for this phase.
- **IllegalStateException** — if this key agreement has not been initialized.
