---
id: "java-en-function-initialldapcontext-initialldapcontext"
language: "java"
lang: "en"
category: "function"
name: "InitialLdapContext.InitialLdapContext"
signature: "public InitialLdapContext() throws NamingException"
title: "InitialLdapContext.InitialLdapContext"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/InitialLdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialLdapContext.InitialLdapContext

```java
public InitialLdapContext() throws NamingException
```

Constructs an initial context using no environment properties or
 connection request controls.
 Equivalent to `new InitialLdapContext(null, null)`.

**异常**

- **NamingException** — if a naming exception is encountered
