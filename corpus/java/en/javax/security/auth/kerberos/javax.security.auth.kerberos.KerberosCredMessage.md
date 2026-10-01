---
id: "java-en-function-javax-security-auth-kerberos-kerberoscredmessage"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.kerberos.KerberosCredMessage"
title: "KerberosCredMessage"
directive: "type"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosCredMessage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosCredMessage

This class encapsulates a Kerberos 5 KRB_CRED message which can be used to
 send Kerberos credentials from one principal to another.

 A KRB_CRED message is defined in Section 5.8.1 of the Kerberos Protocol
 Specification (RFC 4120) as:
 
```

    KRB-CRED        ::= [APPLICATION 22] SEQUENCE {
            pvno            [0] INTEGER (5),
            msg-type        [1] INTEGER (22),
            tickets         [2] SEQUENCE OF Ticket,
            enc-part        [3] EncryptedData -- EncKrbCredPart
    }
 
```

> *Since 9*
