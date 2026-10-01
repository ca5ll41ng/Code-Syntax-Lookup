---
id: "java-en-function-ldapcontext-reconnect"
language: "java"
lang: "en"
category: "function"
name: "LdapContext.reconnect"
signature: "public void reconnect(Control[] connCtls) throws NamingException"
title: "LdapContext.reconnect"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapContext.reconnect

```java
public void reconnect(Control[] connCtls) throws NamingException
```

Reconnects to the LDAP server using the supplied controls and
 this context's environment.

 This method is a way to explicitly initiate an LDAP "bind" operation.
 For example, you can use this method to set request controls for
 the LDAP "bind" operation, or to explicitly connect to the server
 to get response controls returned by the LDAP "bind" operation.

 This method sets this context's `connCtls`
 to be its new connection request controls. This context's
 context request controls are not affected.
 After this method has been invoked, any subsequent
 implicit reconnections will be done using `connCtls`.
 `connCtls` are also used as
 connection request controls for new context instances derived from this
 context.
 These connection request controls are not
 affected by `setRequestControls()`.

 Service provider implementors should read the "Service Provider" section
 in the class description for implementation details.

**参数**

- **connCtls** — The possibly null controls to use. If null, no controls are used.

**异常**

- **NamingException** — If an error occurred while reconnecting.

**参见**

- #getConnectControls
- #newInstance
