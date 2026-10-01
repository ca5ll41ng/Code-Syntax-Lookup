---
id: "python-en-function-email-contentmanager-raw_data_manager"
language: "python"
lang: "en"
category: "function"
name: "raw_data_manager"
directive: "data"
module: "email.contentmanager"
source_url: "https://docs.python.org/3/library/email.contentmanager.html#email.contentmanager.raw_data_manager"
license: "PSF"
updated: "2026-10-01"
---

# raw_data_manager

This content manager provides only a minimum interface beyond that provided
by `~email.message.Message` itself:  it deals only with text, raw
bytes, and `~email.message.Message` objects.  Nevertheless, it
provides significant advantages compared to the base API: `get_content` on
a text part will return a string without the application needing to
manually decode it, `set_content` provides a rich set of options for
controlling the headers added to a part and controlling the content transfer
encoding, and it enables the use of the various `add_` methods, thereby
simplifying the creation of multipart messages.

method:: get_content(msg, errors='replace')

method:: set_content(msg, <'str'>, subtype="plain", charset='utf-8', \
