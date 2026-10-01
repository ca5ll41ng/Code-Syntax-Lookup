---
id: "python-en-function-email-errors-multipartinvariantviolationdefect"
language: "python"
lang: "en"
category: "function"
name: "MultipartInvariantViolationDefect"
directive: "exception"
module: "email.errors"
source_url: "https://docs.python.org/3/library/email.errors.html#email.errors.MultipartInvariantViolationDefect"
license: "PSF"
updated: "2026-10-01"
---

# MultipartInvariantViolationDefect

A message claimed to be a `multipart`, but no subparts were found.
Note that when a message has this defect, its
`~email.message.Message.is_multipart` method may return `False`
even though its content type claims to be `multipart`.
