---
id: "java-en-function-javax-security-auth-login-credentialexpiredexception"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.login.CredentialExpiredException"
title: "CredentialExpiredException"
directive: "type"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/CredentialExpiredException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CredentialExpiredException

Signals that a `Credential` has expired.

 

 This exception is thrown by LoginModules when they determine
 that a `Credential` has expired.
 For example, a `LoginModule` authenticating a user
 in its `login` method may determine that the user's
 password, although entered correctly, has expired.  In this case
 the `LoginModule` throws this exception to notify
 the application.  The application can then take the appropriate
 steps to assist the user in updating the password.

> *Since 1.4*
