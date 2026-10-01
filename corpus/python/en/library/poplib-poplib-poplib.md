---
id: "python-en-function-poplib-poplib"
language: "python"
lang: "en"
category: "function"
name: "poplib"
title: "Instances of `POP3_SSL` have no additional methods. The interface of this"
directive: "module"
module: "poplib"
source_url: "https://docs.python.org/3/library/poplib.html#module-poplib"
license: "PSF"
updated: "2026-10-01"
---

# Instances of `POP3_SSL` have no additional methods. The interface of this

Instances of `POP3_SSL` have no additional methods. The interface of this
subclass is identical to its parent.

.. _pop3-example:

**POP3 Example**

Here is a minimal example (without error checking) that opens a mailbox and
retrieves and prints all messages::

   import getpass, poplib

   M = poplib.POP3('localhost')
   M.user(getpass.getuser())
   M.pass_(getpass.getpass())
   numMessages = len(M.list()[1])
   for i in range(numMessages):
       for j in M.retr(i+1)[1]:
           print(j)

At the end of the module, there is a test section that contains a more extensive
example of usage.
