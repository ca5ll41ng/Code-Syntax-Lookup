---
id: "java-en-function-kerberosticket-refresh"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.refresh"
signature: "public void refresh() throws RefreshFailedException"
title: "KerberosTicket.refresh"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.refresh

```java
public void refresh() throws RefreshFailedException
```

Extends the validity period of this ticket. The ticket will contain
 a new session key if the refresh operation succeeds. The refresh
 operation will fail if the ticket is not renewable or the latest
 allowable renew time has passed. Any other error returned by the
 KDC will also cause this method to fail.

 Note: This method is not synchronized with the accessor
 methods of this object. Hence callers need to be aware of multiple
 threads that might access this and try to renew it at the same
 time.

**异常**

- **IllegalStateException** — if this ticket is destroyed
- **RefreshFailedException** — if the ticket is not renewable, or the latest allowable renew time has passed, or the KDC returns some error.

**参见**

- #isRenewable()
- #getRenewTill()
