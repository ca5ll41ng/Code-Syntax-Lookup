---
id: "java-en-function-context-getnameinnamespace"
language: "java"
lang: "en"
category: "function"
name: "Context.getNameInNamespace"
signature: "public String getNameInNamespace() throws NamingException"
title: "Context.getNameInNamespace"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.getNameInNamespace

```java
public String getNameInNamespace() throws NamingException
```

Retrieves the full name of this context within its own namespace.

 

 Many naming services have a notion of a "full name" for objects
 in their respective namespaces.  For example, an LDAP entry has
 a distinguished name, and a DNS record has a fully qualified name.
 This method allows the client application to retrieve this name.
 The string returned by this method is not a JNDI composite name
 and should not be passed directly to context methods.
 In naming systems for which the notion of full name does not
 make sense, `OperationNotSupportedException` is thrown.

**返回**

- this context's name in its own namespace; never null

**异常**

- **OperationNotSupportedException** — if the naming system does not have the notion of a full name
- **NamingException** — if a naming exception is encountered

> *Since 1.3*
