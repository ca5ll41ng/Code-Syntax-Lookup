---
id: "java-en-function-javax-security-sasl-authenticationexception"
language: "java"
lang: "en"
category: "function"
name: "javax.security.sasl.AuthenticationException"
title: "AuthenticationException"
directive: "type"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/AuthenticationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthenticationException

This exception is thrown by a SASL mechanism implementation
 to indicate that the SASL
 exchange has failed due to reasons related to authentication, such as
 an invalid identity, passphrase, or key.
 

 Note that the lack of an AuthenticationException does not mean that
 the failure was not due to an authentication error.  A SASL mechanism
 implementation might throw the more general SaslException instead of
 AuthenticationException if it is unable to determine the nature
 of the failure, or if does not want to disclose the nature of
 the failure, for example, due to security reasons.

> *Since 1.5*
