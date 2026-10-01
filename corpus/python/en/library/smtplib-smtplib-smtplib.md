---
id: "python-en-function-smtplib-smtplib"
language: "python"
lang: "en"
category: "function"
name: "smtplib"
title: "SMTP Example"
directive: "module"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#module-smtplib"
license: "PSF"
updated: "2026-10-01"
---

# SMTP Example

.. _smtp-example:

**SMTP Example**

This example prompts the user for addresses needed in the message envelope ('To'
and 'From' addresses), and the message to be delivered.  Note that the headers
to be included with the message must be included in the message as entered; this
example doesn't do any processing of the RFC 822 headers.  In particular, the
'To' and 'From' addresses must be included in the message headers explicitly::

   import smtplib

   def prompt(title):
       return input(title).strip()

   from_addr = prompt("From: ")
   to_addrs  = prompt("To: ").split()
   print("Enter message, end with ^D (Unix) or ^Z (Windows):")

   # Add the From: and To: headers at the start!
   lines = [f"From: {from_addr}", f"To: {', '.join(to_addrs)}", ""]
   while True:
       try:
           line = input()
       except EOFError:
           break
       else:
           lines.append(line)

   msg = "\r\n".join(lines)
   print("Message length is", len(msg))

   server = smtplib.SMTP("localhost")
   server.set_debuglevel(1)
   server.sendmail(from_addr, to_addrs, msg)
   server.quit()

> **Note**
>
> In general, you will want to use the `email` package's features to
> construct an email message, which you can then send
> via `~smtplib.SMTP.send_message`; see `email-examples`.
>
