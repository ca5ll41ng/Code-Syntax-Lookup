---
id: "java-en-function-ldapcontext-getrequestcontrols"
language: "java"
lang: "en"
category: "function"
name: "LdapContext.getRequestControls"
signature: "public Control[] getRequestControls() throws NamingException"
title: "LdapContext.getRequestControls"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapContext.getRequestControls

```java
public Control[] getRequestControls() throws NamingException
```

Retrieves the request controls in effect for this context.
 The request controls are owned by the JNDI implementation and are
 immutable. Neither the array nor the controls may be modified by the
 caller.

**返回**

- A possibly-null array of controls. null means no request controls have been set for this context.

**异常**

- **NamingException** — If an error occurred while getting the request controls.

**参见**

- #setRequestControls
