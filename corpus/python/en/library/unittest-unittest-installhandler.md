---
id: "python-en-function-unittest-installhandler"
language: "python"
lang: "en"
category: "function"
name: "installHandler"
signature: "installHandler()"
directive: "function"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.installHandler"
license: "PSF"
updated: "2026-10-01"
---

# installHandler

Install the control-c handler. When a `signal.SIGINT` is received
(usually in response to the user pressing control-c) all registered results
have `~TestResult.stop` called.
