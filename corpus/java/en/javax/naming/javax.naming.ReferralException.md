---
id: "java-en-function-javax-naming-referralexception"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ReferralException"
title: "ReferralException"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ReferralException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReferralException

This abstract class is used to represent a referral exception,
 which is generated in response to a referral
 such as that returned by LDAP v3 servers.
 

 A service provider provides
 a subclass of `ReferralException` by providing implementations
 for `getReferralInfo()` and `getReferralContext()` (and appropriate
 constructors and/or corresponding "set" methods).
 

 The following code sample shows how `ReferralException` can be used.
 
```
`while (true) {
          try {
              bindings = ctx.listBindings(name);
              while (bindings.hasMore()) {
                  b = bindings.next();
                  ...
              `
              break;
          } catch (ReferralException e) {
              ctx = e.getReferralContext();
          }
      }
 }
```

 `ReferralException` is an abstract class. Concrete implementations
 determine its synchronization and serialization properties.

 An environment parameter passed to the `getReferralContext()`
 method is owned by the caller.
 The service provider will not modify the object or keep a reference to it,
 but may keep a reference to a clone of it.

> *Since 1.3*
