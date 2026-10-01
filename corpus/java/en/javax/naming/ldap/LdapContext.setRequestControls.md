---
id: "java-en-function-ldapcontext-setrequestcontrols"
language: "java"
lang: "en"
category: "function"
name: "LdapContext.setRequestControls"
signature: "public void setRequestControls(Control[] requestControls) throws NamingException"
title: "LdapContext.setRequestControls"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapContext.setRequestControls

```java
public void setRequestControls(Control[] requestControls) throws NamingException
```

Sets the request controls for methods subsequently
 invoked on this context.
 The request controls are owned by the JNDI implementation and are
 immutable. Neither the array nor the controls may be modified by the
 caller.
 

 This removes any previous request controls and adds
 `requestControls`
 for use by subsequent methods invoked on this context.
 This method does not affect this context's connection request controls.

 Note that `requestControls` will be in effect until the next
 invocation of `setRequestControls()`. You need to explicitly
 invoke `setRequestControls()` with `null` or an empty
 array to clear the controls if you don't want them to affect the
 context methods any more.
 To check what request controls are in effect for this context, use
 `getRequestControls()`.

**参数**

- **requestControls** — The possibly null controls to use. If null, no controls are used.

**异常**

- **NamingException** — If an error occurred while setting the request controls.

**参见**

- #getRequestControls
