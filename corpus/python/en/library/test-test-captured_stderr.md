---
id: "python-en-function-test-captured_stderr"
language: "python"
lang: "en"
category: "function"
name: "captured_stderr"
signature: "captured_stderr()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.captured_stderr"
license: "PSF"
updated: "2026-10-01"
---

# captured_stderr

A context managers that temporarily replaces the named stream with
`io.StringIO` object.

Example use with output streams::

   with captured_stdout() as stdout, captured_stderr() as stderr:
       print("hello")
       print("error", file=sys.stderr)
   assert stdout.getvalue() == "hello\n"
   assert stderr.getvalue() == "error\n"

Example use with input stream::

   with captured_stdin() as stdin:
       stdin.write('hello\n')
       stdin.seek(0)
       # call test code that consumes from sys.stdin
       captured = input()
   self.assertEqual(captured, "hello")
