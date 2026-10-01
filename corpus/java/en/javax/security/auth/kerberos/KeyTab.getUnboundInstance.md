---
id: "java-en-function-keytab-getunboundinstance"
language: "java"
lang: "en"
category: "function"
name: "KeyTab.getUnboundInstance"
signature: "public static KeyTab getUnboundInstance(File file)"
title: "KeyTab.getUnboundInstance"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KeyTab.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyTab.getUnboundInstance

```java
public static KeyTab getUnboundInstance(File file)
```

Returns an unbound `KeyTab` instance from a `File`
 object.
 

 The result of this method is never null. This method only associates
 the returned `KeyTab` object with the file and does not read it.

**参数**

- **file** — the keytab `File` object, must not be null

**返回**

- the keytab instance

**异常**

- **NullPointerException** — if the file argument is null

> *Since 1.8*
