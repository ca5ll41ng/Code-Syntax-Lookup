---
id: "java-en-function-javax-security-auth-login-accountexpiredexception"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.login.AccountExpiredException"
title: "AccountExpiredException"
directive: "type"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/AccountExpiredException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccountExpiredException

Signals that a user account has expired.

 

 This exception is thrown by LoginModules when they determine
 that an account has expired.  For example, a `LoginModule`,
 after successfully authenticating a user, may determine that the
 user's account has expired.  In this case the `LoginModule`
 throws this exception to notify the application.  The application can
 then take the appropriate steps to notify the user.

> *Since 1.4*
