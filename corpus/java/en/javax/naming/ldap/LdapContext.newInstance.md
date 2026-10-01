---
id: "java-en-function-ldapcontext-newinstance"
language: "java"
lang: "en"
category: "function"
name: "LdapContext.newInstance"
signature: "public LdapContext newInstance(Control[] requestControls) throws NamingException"
title: "LdapContext.newInstance"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapContext.newInstance

```java
public LdapContext newInstance(Control[] requestControls) throws NamingException
```

Creates a new instance of this context initialized using request controls.

 This method is a convenience method for creating a new instance
 of this context for the purposes of multithreaded access.
 For example, if multiple threads want to use different context
 request controls,
 each thread may use this method to get its own copy of this context
 and set/get context request controls without having to synchronize with other
 threads.

 The new context has the same environment properties and connection
 request controls as this context. See the class description for details.
 Implementations might also allow this context and the new context
 to share the same network connection or other resources if doing
 so does not impede the independence of either context.

**参数**

- **requestControls** — The possibly null request controls to use for the new context. If null, the context is initialized with no request controls.

**返回**

- A non-null `LdapContext` instance.

**异常**

- **NamingException** — If an error occurred while creating the new instance.

**参见**

- InitialLdapContext
