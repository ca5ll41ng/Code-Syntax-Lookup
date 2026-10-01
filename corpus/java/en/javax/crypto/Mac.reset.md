---
id: "java-en-function-mac-reset"
language: "java"
lang: "en"
category: "function"
name: "Mac.reset"
signature: "public final void reset()"
title: "Mac.reset"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Mac.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Mac.reset

```java
public final void reset()
```

Resets this `Mac` object.

 

A call to this method resets this `Mac` object to the
 state it was in when previously initialized via a call to
 `init(Key)` or
 `init(Key, AlgorithmParameterSpec)`.
 That is, the object is reset and available to generate another MAC from
 the same key, if desired, via new calls to `update` and
 `doFinal`.
 (In order to reuse this `Mac` object with a different key,
 it must be reinitialized via a call to `init(Key)` or
 `init(Key, AlgorithmParameterSpec)`.
