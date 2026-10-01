---
id: "java-en-function-keytab-getinstance"
language: "java"
lang: "en"
category: "function"
name: "KeyTab.getInstance"
signature: "public static KeyTab getInstance(File file)"
title: "KeyTab.getInstance"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KeyTab.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyTab.getInstance

```java
public static KeyTab getInstance(File file)
```

Returns a `KeyTab` instance from a `File` object
 that is bound to an unknown service principal.
 

 The result of this method is never null. This method only associates
 the returned `KeyTab` object with the file and does not read it.
 

 Developers should call `getInstance`
 when the bound service principal is known.

**参数**

- **file** — the keytab `File` object, must not be null

**返回**

- the keytab instance

**异常**

- **NullPointerException** — if the `file` argument is null
