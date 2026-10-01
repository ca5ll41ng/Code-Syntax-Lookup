---
id: "python-zh-function-test-captured_stderr"
language: "python"
lang: "zh"
category: "function"
name: "captured_stderr"
signature: "captured_stderr()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.captured_stderr"
license: "PSF"
updated: "2026-10-01"
---

# captured_stderr

A context managers that temporarily replaces the named stream with
`io.StringIO` object.

使用输出流的示例::

   with captured_stdout() as stdout, captured_stderr() as stderr:
       print("hello")
       print("error", file=sys.stderr)
   assert stdout.getvalue() == "hello\n"
   assert stderr.getvalue() == "error\n"

使用输入流的示例::

   with captured_stdin() as stdin:
       stdin.write('hello\n')
       stdin.seek(0)
       # call test code that consumes from sys.stdin
       captured = input()
   self.assertEqual(captured, "hello")
