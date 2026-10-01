---
id: "python-en-function-unittest-removehandler"
language: "python"
lang: "en"
category: "function"
name: "removeHandler"
signature: "removeHandler(function=None)"
directive: "function"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.removeHandler"
license: "PSF"
updated: "2026-10-01"
---

# removeHandler

When called without arguments this function removes the control-c handler
if it has been installed. This function can also be used as a test decorator
to temporarily remove the handler while the test is being executed::

   @unittest.removeHandler
   def test_signal_handling(self):
       ...
