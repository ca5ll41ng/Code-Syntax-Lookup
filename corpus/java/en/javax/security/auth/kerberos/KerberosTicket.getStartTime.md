---
id: "java-en-function-kerberosticket-getstarttime"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getStartTime"
signature: "public final java.util.Date getStartTime()"
title: "KerberosTicket.getStartTime"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getStartTime

```java
public final java.util.Date getStartTime()
```

Returns the start time for this ticket's validity period.

**返回**

- the start time for this ticket's validity period or `null` if the field is not set or this ticket is destroyed.
