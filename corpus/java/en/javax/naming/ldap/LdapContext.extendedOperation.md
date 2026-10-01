---
id: "java-en-function-ldapcontext-extendedoperation"
language: "java"
lang: "en"
category: "function"
name: "LdapContext.extendedOperation"
signature: "public ExtendedResponse extendedOperation(ExtendedRequest request) throws NamingException"
title: "LdapContext.extendedOperation"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapContext.extendedOperation

```java
public ExtendedResponse extendedOperation(ExtendedRequest request) throws NamingException
```

Performs an extended operation.

 This method is used to support LDAPv3 extended operations.

**参数**

- **request** — The non-null request to be performed.

**返回**

- The possibly null response of the operation. null means the operation did not generate any response.

**异常**

- **NamingException** — If an error occurred while performing the extended operation.
