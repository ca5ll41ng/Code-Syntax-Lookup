---
id: "java-en-function-hascontrols-getcontrols"
language: "java"
lang: "en"
category: "function"
name: "HasControls.getControls"
signature: "public Control[] getControls() throws NamingException"
title: "HasControls.getControls"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/HasControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HasControls.getControls

```java
public Control[] getControls() throws NamingException
```

Retrieves an array of `Control`s from the object that
 implements this interface. It is null if there are no controls.

**返回**

- A possibly null array of `Control` objects.

**异常**

- **NamingException** — If cannot return controls due to an error.
