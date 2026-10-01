---
id: "java-en-function-javax-naming-authenticationnotsupportedexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.AuthenticationNotSupportedException"
title: "AuthenticationNotSupportedException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/AuthenticationNotSupportedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthenticationNotSupportedException

This exception is thrown when
 the particular flavor of authentication requested is not supported.
 For example, if the program
 is attempting to use strong authentication but the directory/naming
 supports only simple authentication, this exception would be thrown.
 Identification of a particular flavor of authentication is
 provider- and server-specific. It may be specified using
 specific authentication schemes such
 those identified using SASL, or a generic authentication specifier
 (such as "simple" and "strong").

 If the program wants to handle this exception in particular, it
 should catch AuthenticationNotSupportedException explicitly before
 attempting to catch NamingException. After catching
 AuthenticationNotSupportedException, the program could
 reattempt the authentication using a different authentication flavor
 by updating the resolved context's environment properties accordingly.
 

 Synchronization and serialization issues that apply to NamingException
 apply directly here.

> *Since 1.3*
