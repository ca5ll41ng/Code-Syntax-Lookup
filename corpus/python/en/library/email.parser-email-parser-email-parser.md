---
id: "python-en-function-email-parser-email-parser"
language: "python"
lang: "en"
category: "function"
name: "email.parser"
title: "Here's an example of how you might use `message_from_bytes` at an"
directive: "module"
module: "email.parser"
source_url: "https://docs.python.org/3/library/email.parser.html#module-email.parser"
license: "PSF"
updated: "2026-10-01"
---

# Here's an example of how you might use `message_from_bytes` at an

Here's an example of how you might use `message_from_bytes` at an
interactive Python prompt::

   >>> import email
   >>> msg = email.message_from_bytes(myBytes)  # doctest: +SKIP

**Additional notes**

Here are some notes on the parsing semantics:

* Most non-\ `multipart` type messages are parsed as a single message
  object with a string payload.  These objects will return `False` for
  `~email.message.EmailMessage.is_multipart`, and
  `~email.message.EmailMessage.iter_parts` will yield an empty list.

* All `multipart` type messages will be parsed as a container message
  object with a list of sub-message objects for their payload.  The outer
  container message will return `True` for
  `~email.message.EmailMessage.is_multipart`, and
  `~email.message.EmailMessage.iter_parts` will yield a list of subparts.

* Most messages with a content type of `message/\*` (such as
  `message/delivery-status` and `message/rfc822`) will also
  be parsed as container object containing a list payload of length 1.  Their
  `~email.message.EmailMessage.is_multipart` method will return `True`.
  The single element yielded by `~email.message.EmailMessage.iter_parts`
  will be a sub-message object.

* Some non-standards-compliant messages may not be internally consistent about
  their `multipart`\ -edness.  Such messages may have a
  `Content-Type` header of type `multipart`, but their
  `~email.message.EmailMessage.is_multipart` method may return `False`.
  If such messages were parsed with the `~email.parser.FeedParser`,
  they will have an instance of the
  `~email.errors.MultipartInvariantViolationDefect` class in their
  *defects* attribute list.  See `email.errors` for details.
