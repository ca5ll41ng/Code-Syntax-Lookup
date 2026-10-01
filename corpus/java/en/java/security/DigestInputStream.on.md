---
id: "java-en-function-digestinputstream-on"
language: "java"
lang: "en"
category: "function"
name: "DigestInputStream.on"
signature: "public void on(boolean on)"
title: "DigestInputStream.on"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DigestInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DigestInputStream.on

```java
public void on(boolean on)
```

Turns the digest function on or off. The default is on.  When
 it is on, a call to one of the `read` methods results in an
 update on the message digest.  But when it is off, the message
 digest is not updated.

**参数**

- **on** — `true` to turn the digest function on, `false` to turn it off.
