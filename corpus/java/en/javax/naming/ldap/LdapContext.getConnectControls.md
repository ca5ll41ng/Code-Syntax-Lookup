---
id: "java-en-function-ldapcontext-getconnectcontrols"
language: "java"
lang: "en"
category: "function"
name: "LdapContext.getConnectControls"
signature: "public Control[] getConnectControls() throws NamingException"
title: "LdapContext.getConnectControls"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapContext.getConnectControls

```java
public Control[] getConnectControls() throws NamingException
```

Retrieves the connection request controls in effect for this context.
 The controls are owned by the JNDI implementation and are
 immutable. Neither the array nor the controls may be modified by the
 caller.

**返回**

- A possibly-null array of controls. null means no connect controls have been set for this context.

**异常**

- **NamingException** — If an error occurred while getting the request controls.
