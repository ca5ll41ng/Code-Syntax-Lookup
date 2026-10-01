---
id: "java-en-function-kerberosticket-getclientaddresses"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getClientAddresses"
signature: "public final java.net.InetAddress[] getClientAddresses()"
title: "KerberosTicket.getClientAddresses"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getClientAddresses

```java
public final java.net.InetAddress[] getClientAddresses()
```

Returns a list of addresses from where the ticket can be used.

**返回**

- the list of addresses, or `null` if the field was not provided or this ticket is destroyed.
