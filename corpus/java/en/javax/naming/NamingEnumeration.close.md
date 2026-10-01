---
id: "java-en-function-namingenumeration-close"
language: "java"
lang: "en"
category: "function"
name: "NamingEnumeration.close"
signature: "public void close() throws NamingException"
title: "NamingEnumeration.close"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingEnumeration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingEnumeration.close

```java
public void close() throws NamingException
```

Closes this enumeration.

 After this method has been invoked on this enumeration, the
 enumeration becomes invalid and subsequent invocation of any of
 its methods will yield undefined results.
 This method is intended for aborting an enumeration to free up resources.
 If an enumeration proceeds to the end--that is, until
 `hasMoreElements()` or `hasMore()` returns `false`--
 resources will be freed up automatically and there is no need to
 explicitly call `close()`.

 This method indicates to the service provider that it is free
 to release resources associated with the enumeration, and can
 notify servers to cancel any outstanding requests. The `close()`
 method is a hint to implementations for managing their resources.
 Implementations are encouraged to use appropriate algorithms to
 manage their resources when client omits the `close()` calls.

**异常**

- **NamingException** — If a naming exception is encountered while closing the enumeration.

> *Since 1.3*
