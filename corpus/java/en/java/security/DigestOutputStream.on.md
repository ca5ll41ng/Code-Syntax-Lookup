---
id: "java-en-function-digestoutputstream-on"
language: "java"
lang: "en"
category: "function"
name: "DigestOutputStream.on"
signature: "public void on(boolean on)"
title: "DigestOutputStream.on"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DigestOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigestOutputStream.on

```java
public void on(boolean on)
```

Turns the digest function on or off. The default is on.  When
 it is on, a call to one of the `write` methods results in an
 update on the message digest.  But when it is off, the message
 digest is not updated.

**参数**

- **on** — `true` to turn the digest function on, `false` to turn it off.
