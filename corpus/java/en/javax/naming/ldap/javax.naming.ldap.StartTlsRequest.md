---
id: "java-en-function-javax-naming-ldap-starttlsrequest"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.StartTlsRequest"
title: "StartTlsRequest"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/StartTlsRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartTlsRequest

This class implements the LDAPv3 Extended Request for StartTLS as
 defined in
 Lightweight Directory
 Access Protocol (v3): Extension for Transport Layer Security

 The object identifier for StartTLS is 1.3.6.1.4.1.1466.20037
 and no extended request value is defined.

 `StartTlsRequest`/`StartTlsResponse` are used to establish
 a TLS connection over the existing LDAP connection associated with
 the JNDI context on which `extendedOperation()` is invoked.
 Typically, a JNDI program uses these classes as follows.
 
```

 import javax.naming.ldap.*;

 // Open an LDAP association
 LdapContext ctx = new InitialLdapContext();

 // Perform a StartTLS extended operation
 StartTlsResponse tls =
     (StartTlsResponse) ctx.extendedOperation(new StartTlsRequest());

 // Open a TLS connection (over the existing LDAP association) and get details
 // of the negotiated TLS session: cipher suite, peer certificate, etc.
 SSLSession session = tls.negotiate();

 // ... use ctx to perform protected LDAP operations

 // Close the TLS connection (revert back to the underlying LDAP association)
 tls.close();

 // ... use ctx to perform unprotected LDAP operations

 // Close the LDAP association
 ctx.close;
 
```

**参见**

- StartTlsResponse

> *Since 1.4*
