---
id: "java-en-function-callbackhandler-handle"
language: "java"
lang: "en"
category: "function"
name: "CallbackHandler.handle"
signature: "void handle(Callback[] callbacks) throws java.io.IOException, UnsupportedCallbackException"
title: "CallbackHandler.handle"
directive: "method"
module: "java.base/javax.security.auth.callback"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/callback/CallbackHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallbackHandler.handle

```java
void handle(Callback[] callbacks) throws java.io.IOException, UnsupportedCallbackException
```

Retrieve or display the information requested in the
 provided Callbacks.

 

 The `handle` method implementation checks the
 instance(s) of the `Callback` object(s) passed in
 to retrieve or display the requested information.
 The following example is provided to help demonstrate what an
 `handle` method implementation might look like.
 This example code is for guidance only.  Many details,
 including proper error handling, are left out for simplicity.

 
```
`public void handle(Callback[] callbacks)
 throws IOException, UnsupportedCallbackException {

   for (int i = 0; i < callbacks.length; i++) {
      if (callbacks[i] instanceof TextOutputCallback) {

          // display the message according to the specified type
          TextOutputCallback toc = (TextOutputCallback)callbacks[i];
          switch (toc.getMessageType()) {
          case TextOutputCallback.INFORMATION:
              System.out.println(toc.getMessage());
              break;
          case TextOutputCallback.ERROR:
              System.out.println("ERROR: " + toc.getMessage());
              break;
          case TextOutputCallback.WARNING:
              System.out.println("WARNING: " + toc.getMessage());
              break;
          default:
              throw new IOException("Unsupported message type: " +
                                  toc.getMessageType());
          `

      } else if (callbacks[i] instanceof NameCallback) {

          // prompt the user for a username
          NameCallback nc = (NameCallback)callbacks[i];

          // ignore the provided defaultName
          System.err.print(nc.getPrompt());
          System.err.flush();
          nc.setName((new BufferedReader
                  (new InputStreamReader(
                          System.in,
                          System.getProperty("stdin.encoding")))).readLine());

      } else if (callbacks[i] instanceof PasswordCallback) {

          // prompt the user for sensitive information
          PasswordCallback pc = (PasswordCallback)callbacks[i];
          System.err.print(pc.getPrompt());
          System.err.flush();
          pc.setPassword(readPassword(System.in));

      } else {
          throw new UnsupportedCallbackException
                  (callbacks[i], "Unrecognized Callback");
      }
   }
 }

 // Reads user password from given input stream.
 private char[] readPassword(InputStream in) throws IOException {
    // insert code to read a user password from the input stream
 }
 }
```

**参数**

- **callbacks** — an array of `Callback` objects provided by an underlying security service which contains the information requested to be retrieved or displayed.

**异常**

- **java.io.IOException** — if an input or output error occurs.
- **UnsupportedCallbackException** — if the implementation of this method does not support one or more of the Callbacks specified in the `callbacks` parameter.
