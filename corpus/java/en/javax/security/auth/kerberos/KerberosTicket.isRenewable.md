---
id: "java-en-function-kerberosticket-isrenewable"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.isRenewable"
signature: "public final boolean isRenewable()"
title: "KerberosTicket.isRenewable"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.isRenewable

```java
public final boolean isRenewable()
```

Determines is this ticket is renewable. If so, the `refresh()
 refresh` method can be called, assuming the validity period for
 renewing is not already over.

**返回**

- true if this ticket is renewable, or false if not renewable or destroyed.
