---
id: "java-en-function-namingmanager-getcontinuationcontext"
language: "java"
lang: "en"
category: "function"
name: "NamingManager.getContinuationContext"
signature: "public static Context getContinuationContext(CannotProceedException cpe) throws NamingException"
title: "NamingManager.getContinuationContext"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/NamingManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingManager.getContinuationContext

```java
public static Context getContinuationContext(CannotProceedException cpe) throws NamingException
```

Creates a context in which to continue a context operation.

 In performing an operation on a name that spans multiple
 namespaces, a context from one naming system may need to pass
 the operation on to the next naming system.  The context
 implementation does this by first constructing a
 `CannotProceedException` containing information
 pinpointing how far it has proceeded.  It then obtains a
 continuation context from JNDI by calling
 `getContinuationContext`.  The context
 implementation should then resume the context operation by
 invoking the same operation on the continuation context, using
 the remainder of the name that has not yet been resolved.

 Before making use of the `cpe` parameter, this method
 updates the environment associated with that object by setting
 the value of the property `CPE`
 to `cpe`.  This property will be inherited by the
 continuation context, and may be used by that context's
 service provider to inspect the fields of this exception.

**参数**

- **cpe** — The non-null exception that triggered this continuation.

**返回**

- A non-null Context object for continuing the operation.

**异常**

- **NamingException** — If a naming exception occurred.
