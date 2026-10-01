---
id: "java-en-function-java-security-cert-extension"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.Extension"
title: "Extension"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/Extension.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Extension

This interface represents an X.509 extension.

 

 Extensions provide a means of associating additional attributes with users
 or public keys and for managing a certification hierarchy.  The extension
 format also allows communities to define private extensions to carry
 information unique to those communities.

 

 Each extension contains an object identifier, a criticality setting
 indicating whether it is a critical or a non-critical extension, and
 an ASN.1 DER-encoded value. Its ASN.1 definition is:

 
```

     Extension ::= SEQUENCE {
         extnId        OBJECT IDENTIFIER,
         critical      BOOLEAN DEFAULT FALSE,
         extnValue     OCTET STRING
                 -- contains a DER encoding of a value
                 -- of the type registered for use with
                 -- the extnId object identifier value
     }

 
```

 

 This interface is designed to provide access to a single extension,
 unlike `java.security.cert.X509Extension` which is more suitable
 for accessing a set of extensions.

> *Since 1.7*
