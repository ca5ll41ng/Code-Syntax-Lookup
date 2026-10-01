---
id: "java-en-function-objectinputstream-registervalidation"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.registerValidation"
signature: "public void registerValidation(ObjectInputValidation obj, int prio) throws NotActiveException, InvalidObjectException"
title: "ObjectInputStream.registerValidation"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.registerValidation

```java
public void registerValidation(ObjectInputValidation obj, int prio) throws NotActiveException, InvalidObjectException
```

Register an object to be validated before the graph is returned.  While
 similar to resolveObject these validations are called after the entire
 graph has been reconstituted.  Typically, a readObject method will
 register the object with the stream so that when all of the objects are
 restored a final set of validations can be performed.

**参数**

- **obj** — the object to receive the validation callback.
- **prio** — controls the order of callbacks; zero is a good default. Use higher numbers to be called back earlier, lower numbers for later callbacks. Within a priority, callbacks are processed in no particular order.

**异常**

- **NotActiveException** — The stream is not currently reading objects so it is invalid to register a callback.
- **InvalidObjectException** — The validation object is null.
